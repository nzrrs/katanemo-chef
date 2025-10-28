# Meal Generator App

A web application that generates meal recipes based on the ingredients you have. It leverages the **Hugging Face `katanemo/Arch-Router-1.5B` model** for AI-based recipe generation and formats the output using a **Markdown parser** for clean display. Built with **React + Vite**.

---
## 🚀 Live Demo  
🔗 [**Visit the Website**](https://katenamo-chef.netlify.app/)

---
## Features

* Input a list of ingredients and get a full recipe suggestion.
* Recipes are returned in **Markdown format** and displayed cleanly on the page.
* Simple, responsive, and easy-to-use interface.
* Powered by **Hugging Face Inference API**.

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the `.env-simple` file and rename it to `.env`:

   ```bash
   cp .env-simple .env
   ```

4. Open the `.env` file and replace the placeholder with your Hugging Face API token:

   ```env
   VITE_HF_ACCESS_TOKEN=your_api_token_here
   ```

5. Make sure the `.env` file is **ignored by Git** by adding it to `.gitignore` if it’s not already included.

---

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser at `http://localhost:5173` (Vite default port).

3. Add ingredients using the input field and click **Add ingredient**.

4. Click **Get a recipe** to generate a meal suggestion based on your ingredients.

5. The recipe will be displayed in formatted Markdown for easy reading.

---

## Environment Variables

The application requires a Hugging Face API token:

```
VITE_HF_ACCESS_TOKEN=your_api_token_here
```

**Instructions**:

* Copy `.env-simple` to `.env`.
* Replace the placeholder with your own token.
* **Do not commit** `.env` to version control.
* Ensure `.env` is added to `.gitignore`.

---

## Technologies Used

* **React** – Frontend framework
* **Vite** – Fast development and build tool
* **Hugging Face `katanemo/Arch-Router-1.5B`** – AI model for recipe generation
* **Markdown package** – Renders AI-generated recipes in formatted Markdown

---

## Project Structure

* `src/ai.js` – Contains the function to interact with Hugging Face API
* `src/components/IngredientsList.jsx` – Displays the list of ingredients
* `src/components/ClaudeRecipe.jsx` – Displays the recipe in Markdown
* `.env-simple` – Template for environment variables

---

## Notes

* Ensure your Hugging Face API token has sufficient usage quota.
* Using larger models in the browser may require a server for security and performance; this project uses a browser-friendly model.
* Always keep your API key private.

---

## License

This project is open-source and free to use for personal or educational purposes from scrimba course.
