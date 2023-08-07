// Just some mockdata
import mockCategory from "../assets/mock-category.json";
import mockRecipe1 from "../assets/mock-recipe-1.json";
import mockRecipe2 from "../assets/mock-recipe-2.json";

const useContentful = () => {
  const fallbackImage = "/fallback.jpg";

  const cleanRecipe = (recipeRaw) => {
    // todo: above should be the actual calls to contentful
    const locale = "en-US";

    if (!recipeRaw.fields && !recipeRaw.items) return null;
    const recipe = recipeRaw.fields || recipeRaw.items[0].fields;

    // recipe data
    const name = recipe.name[locale];
    const description = recipe.description[locale];
    const ingredients = recipe.ingriedient[locale].ingredients;
    const instructions = recipe.instructions[locale].steps;
    const servings = recipe.servings[locale];
    const preparationTimeMin = recipe.preparationTimeMin[locale];
    const id = recipeRaw.sys.id || recipeRaw.items[0].sys.id;
    let image = "";

    // check images, select 1 and get URL

    try {
      const images = recipe.images[locale];
      const assetType = images[0].sys.linkType;

      if (assetType === "Asset") {
        const assetId = images[0].sys.id;
        image = recipeRaw.includes.Asset.find((img) => img.sys.id === assetId).fields.file[locale].url;
      } else {
        // todo: maybe there are more types, who knows, but for now:
        image = fallbackImage;
      }
    } catch (error) {
      image = fallbackImage;
      console.info("Error locating image: ", error.message);
    }

    return {
      id,
      name,
      description,
      ingredients,
      instructions,
      servings,
      preparationTimeMin,
      image,
    };
  };

  // TODO: change all of these to actually use contentful

  // get category
  const getCategory = (categoryName) => {
    return mockCategory;
  };

  // todo: get category with referenced recipes

  // get recipe
  const getRecipe = (recipeName) => {
    return cleanRecipe(mockRecipe2);
  };

  // get multiple recipes
  const getRecipes = () => {
    const mocks = [mockRecipe1, mockRecipe2, mockRecipe1, mockRecipe2, mockRecipe1, mockRecipe2];

    return mocks.map((m) => cleanRecipe(m));
  };

  return { getCategory, getRecipe, getRecipes };
};

export default useContentful;
