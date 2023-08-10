import { useEffect, useState } from "react";
import HeroRecipe from "../../components/HeroRecipe";
import RecipeList from "../../components/RecipeList";
import useContentful from "../../hooks/useContentful";
import { Helmet } from "react-helmet";

const Homepage = () => {
  // state
  const [heroRecipe, setHeroRecipe] = useState(null);
  const [recipeArray, setRecipeArray] = useState(null);
  const [categories, setCategories] = useState(null);

  // hooks
  const { getRecipe, getRecipes, getCategories, getCategory } = useContentful();

  useEffect(() => {
    // TODO: all of this is just mock data
    //setHeroRecipe(getRecipe());
    getRecipes()
      .then((result) => console.log("Fetch in Component", result))
      .catch((error) => console.log(error));
    // getRecipe("1Q1S7ojEM8PZPU2XxliMhx")
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
    // getCategories()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => console.log(error));
    // getCategory("Fictional Food")
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Update title of page */}
      <Helmet>
        <title>Welcome to WBS Group 2 Cookbook</title>
      </Helmet>

      <div className="my-10 grid gap-y-10 max-w-7xl mx-auto">
        {/* <div>{heroRecipe && <HeroRecipe recipe={heroRecipe} />}</div>
        <div>{recipeArray && <RecipeList title={"Test Recipes"} recipes={recipeArray} />}</div>
        <div>{recipeArray && <RecipeList title={"More stuff"} recipes={recipeArray} />}</div> */}
      </div>
    </>
  );
};

export default Homepage;
