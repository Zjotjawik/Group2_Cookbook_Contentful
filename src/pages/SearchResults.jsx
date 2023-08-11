import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useContentful from "../hooks/useContentful";
import Loading from "../components/Loading";
import Error from "../components/Error";
import RecipeCard from "../components/RecipeCard";

const SearchResults = () => {
  // STATE
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // HOOKS
  const [searchParams] = useSearchParams();
  const { getRecipes } = useContentful();

  useEffect(() => {
    let query = searchParams.get("query").toLowerCase();

    getRecipes()
      .then((result) => {
        setIsLoading(false);
        setHasError(false);
        setErrorMessage("");

        // select random hero recipe (the easy and very not performant way)
        let foundRecipes = result.filter((r) => {
          const inText =
            r.name.toLowerCase().indexOf(query) !== -1 || r.description.toLowerCase().indexOf(query) !== -1;
          const inIngredients = r.ingredients.filter((i) => i.name.toLowerCase().indexOf(query) !== -1).length > 0;

          return inText || inIngredients;
        });

        setResults(foundRecipes);
      })
      .catch((error) => {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(error.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div>
      {/* Loading */}
      {isLoading && <Loading />}

      {/* Error occured */}
      {!isLoading && hasError && <Error errorMessage={errorMessage} />}

      {/* Display Components */}
      {!isLoading && !hasError && results && (
        <>
          <h1 className="text-xl">
            {results.length > 0
              ? `We found ${results.length} recipe${results.length === 1 ? "" : "s"} you might be interested in:`
              : "Sorry, none of our recipes match your search."}
          </h1>
          <div className="mt-8"></div>
          {results.length > 0 && (
            <div className="grid grid-cols-5 gap-4">
              {results.map((result) => (
                <RecipeCard key={result.id} recipe={result} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
