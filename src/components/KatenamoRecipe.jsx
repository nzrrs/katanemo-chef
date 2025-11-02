import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const KatenamoRecipe = React.forwardRef(({ recipe }, ref) => {
  return (
    <section className="suggested-recipe-container" ref={ref}>
      <h2>Chef Katanemo Recommends:</h2>
      <ReactMarkdown children={recipe} remarkPlugins={[remarkGfm]} />
    </section>
  );
});

export default KatenamoRecipe;
