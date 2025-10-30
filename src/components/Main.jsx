import React from "react";
import KatenamoRecipe from "./KatenamoRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredient] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredient((prevIngredientes) => [...prevIngredientes, newIngredient]);
    }
  }
  function resetIngredients() {
    setIngredient([])
    setRecipe("");
  }
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        {/* Input field for adding ingredients */}
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient" // Accessibility label for screen readers
          name="ingredient"
        />
        {/* Button to submit the ingredient */}
        <button>+ Add ingredient</button>
      </form>

      {/* Render IngredientsList component if there are ingredients */}
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          resetIngredients={resetIngredients}
        />
      )}
      {recipe && <KatenamoRecipe recipe={recipe} />}
    </main>
  );
}
