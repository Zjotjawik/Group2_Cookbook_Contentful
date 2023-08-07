import { useEffect, useState } from "react";
import HeroRecipe from "../../components/HeroRecipe";
import RecipeList from "../../components/RecipeList";
import useContentful from "../../hooks/useContentful";
import { Helmet } from "react-helmet";

const Homepage = () => {
  // state
  const [heroRecipe, setHeroRecipe] = useState(null);
  const [recipeArray, setRecipeArray] = useState(null);

  // hooks
  const { getRecipe, getRecipes } = useContentful();

  useEffect(() => {
    // TODO: all of this is just mock data
    setHeroRecipe(getRecipe());
    setRecipeArray(getRecipes());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Welcome to WBS Group 2 Cookbook</title>
      </Helmet>

      <div className="my-10 grid gap-y-10 max-w-7xl mx-auto">
        <div>{heroRecipe && <HeroRecipe recipe={heroRecipe} />}</div>
        <div>{recipeArray && <RecipeList title={"Test Recipes"} recipes={recipeArray} />}</div>
        <div>{recipeArray && <RecipeList title={"More stuff"} recipes={recipeArray} />}</div>
      </div>
    </>
  );
};

export default Homepage;
