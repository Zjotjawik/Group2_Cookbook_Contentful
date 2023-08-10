// Just some mockdata
import { createClient } from "contentful";

// import mockCategory from "../assets/mock-category.json";
import mockRecipe1 from "../assets/mock-recipe-1.json";
import mockRecipe2 from "../assets/mock-recipe-2.json";

const useContentful = () => {
  const fallbackImage = "/fallback.jpg";

  // create contentful client
  const options = {
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
    host: "preview.contentful.com",
  };
  const client = createClient(options);

  // Helper function: clean up a single recipe by extracting relevant information
  const cleanRecipe = (recipeRaw) => {
    if (!recipeRaw.fields && !recipeRaw.items) return null;
    const recipe = recipeRaw.fields;

    // recipe data
    const name = recipe.name;
    const description = recipe.description;
    const ingredients = recipe.ingriedient.ingredients;
    const instructions = recipe.instructions.steps;
    const servings = recipe.servings;
    const preparationTimeMin = recipe.preparationTimeMin;
    const id = recipeRaw.sys.id;
    const created = recipeRaw.sys.createdAt;
    let image = fallbackImage;

    if (recipeRaw.fields.images && recipeRaw.fields.images.length > 0) {
      image = recipeRaw.fields.images[0].fields.file.url;
    }

    return {
      id,
      created,
      name,
      description,
      ingredients,
      instructions,
      servings,
      preparationTimeMin,
      image,
    };
  };

  /**
   * Clean up recipes
   * @param {Array} recipeArray
   * @returns
   */
  const cleanRecipes = (recipeArray) => {
    if (!recipeArray) return [];

    const cleanRecipiesData = recipeArray.items.map((r) => cleanRecipe(r));

    return cleanRecipiesData;
  };

  // cleanup a single category entry
  const cleanCategories = (categoryRaw) => {
    if (!categoryRaw) return [];

    const cleanCategoryData = categoryRaw.map((c) => {
      const images =
        c.fields.images &&
        c.fields.images.map((img) => {
          return {
            name: img.fields.title,
            description: img.fields.description,
            url: img.fields.file.url,
          };
        });

      return {
        id: c.sys.id,
        name: c.fields.name,
        description: c.fields.description,
        images,
      };
    });

    return cleanCategoryData;
  };

  // get all categories
  const getCategories = async () => {
    const categoryData = await client.getEntries({ content_type: "category" });

    if (!categoryData.items) return [];

    const cleanCategoryData = cleanCategories(categoryData.items);

    return cleanCategoryData;
  };

  // get a single category
  const getCategory = async (categoryName) => {
    const categories = await getCategories();

    return categories.find((c) => c.name === categoryName) ?? {};
  };

  // get recipe
  const getRecipe = async (id) => {
    const recipeData = await client.getEntry(id);

    return cleanRecipe(recipeData);
  };

  /**
   * Returns all recipes per category (categoryName) or all recipes (null)
   */
  const getRecipes = async () => {
    const recipeData = await client.getEntries({ content_type: "recipe" });

    const cleanRecipeData = cleanRecipes(recipeData);

    return cleanRecipeData;
  };

  return { getCategory, getCategories, getRecipe, getRecipes };
};

export default useContentful;
