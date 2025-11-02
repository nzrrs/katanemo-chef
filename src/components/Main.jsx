import React from "react";
import KatenamoRecipe from "./KatenamoRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";
import Loader from "./Loader";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const recipeSection = React.useRef(null);

  async function getRecipe() {
    setLoader(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoader(false);
  }

  function addIngredient(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient.length > 2 && !ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
      e.target.reset();
    }
    else{
      window.alert("Enter a new valid ingredient")
    }
  }

  function resetIngredients() {
    setIngredients([]);
    setRecipe("");
  }

  React.useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          resetIngredients={resetIngredients}
        />
      )}

      {loader ? (
        <Loader />
      ) : (
        recipe && <KatenamoRecipe recipe={recipe} ref={recipeSection} />
      )}
    </main>
  );
}
