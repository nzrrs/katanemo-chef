import React from "react";
export default function Main() {
  const [ingredients, setIngredient] = React.useState([]);

  let ingredientListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });


  function addIngredient(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient").trim();
    if ( newIngredient  && !ingredients.includes(newIngredient) ){
      setIngredient((prevIngredientes) => [...prevIngredientes, newIngredient]);
      
    }
    e.currentTarget.reset()
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        {/* aria label same for label.... its for screen reader */}
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
}
