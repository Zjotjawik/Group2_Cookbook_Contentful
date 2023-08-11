import { useEffect, useState } from "react";
import HeroRecipe from "../components/HeroRecipe";
import RecipeList from "../components/RecipeList";
import useContentful from "../hooks/useContentful";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Homepage = () => {
  // state
  const [heroRecipe, setHeroRecipe] = useState(null);
  const [latestRecipes, setLatestRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // hooks
  const { getRecipes } = useContentful();

  useEffect(() => {
    // fetch recipes
    getRecipes()
      .then((result) => {
        setIsLoading(false);
        setHasError(false);
        setErrorMessage("");

        // select random hero recipe
        const hero = result[Math.floor(Math.random() * result.length)];
        setHeroRecipe(hero);

        // find most recent recipes;
        result.sort((a, b) => a.created > b.created);

        if (result.length > 10) result = result.slice(0, 10);
        setLatestRecipes(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(error.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Update title of page */}
      <Helmet>
        <title>Welcome to WBS Group 2 Cookbook</title>
      </Helmet>
      <div className="my-10 grid gap-y-10 max-w-7xl mx-auto">
        {/* Loading */}
        {isLoading && <Loading />}

        {/* Error occured */}
        {!isLoading && hasError && <Error errorMessage={errorMessage} />}

        {/* Display Components */}
        {!isLoading && !hasError && (
          <>
            <div>{heroRecipe && <HeroRecipe recipe={heroRecipe} />}</div>
            <div className="mt-4"></div>
            <div>{latestRecipes && <RecipeList title={"Latest Recipes"} recipes={latestRecipes} />}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Homepage;
