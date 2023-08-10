import React from "react";

// ... (Code for the dynamic components)

const Recipe = () => {
  const recipeTitle = "Eggs Benedict";
  const recipeDescription =
    "Eggs Benedict is a good option for Sunday breakfast. This dish is a poached egg with a delicate hollandaise sauce.";
  const recipeImageUrl =
    "https://i0.wp.com/takajaeda.com/wp-content/uploads/2021/05/IMG_20210523_132326-min.jpg?resize=1170%2C840&ssl=1";
  const recipeAltText = "Eggs Benedict";
  const recipeIngredients = [
    { name: "Chicken eggs", quantity: 2, unit: "pieces" },
    { name: "Chicken yolk", quantity: 2, unit: "pieces" },
    { name: "Whole grain bread (or bun)", quantity: 2, unit: "slices" },
    { name: "Butter", quantity: 3, unit: "tbsp" },
    { name: "Cream 20%", quantity: 15, unit: "ml" },
    { name: "Lemon juice", quantity: 0.5, unit: "tbsp" },
    { name: "Vinegar", quantity: 1, unit: "tbsp" },
  ];
  const recipeDirections = [
    "Put any greens to taste on top of the bread.",
    "Put a piece of butter in a frying pan and melt it. Make sure it doesn’t boil.",
    // Add the rest of the steps here
  ];

  const RecipeTitle = ({ title }) => {
    return (
      <div className="flex justify-center my-3 my-lg-5 ">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <h1 className="text-center text-4xl font-extrabold pb-8">{title}</h1>
        </div>
      </div>
    );
  };

  const RecipeDescription = ({ description }) => {
    return (
      <div className="flex justify-center my-3 my-lg-5">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <p className="text-secondary text-center pb-8">{description}</p>
        </div>
      </div>
    );
  };

  const RecipeImage = ({ imageUrl, altText }) => {
    return (
      <div className="flex justify-center my-3 my-lg-5">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <div className="hover-img">
            <img
              className="img-fluid rounded mx-auto d-block w-1/2 p-3 shadow"
              src={imageUrl}
              alt={altText}
              title={altText}
            />
            <div className="hover-caption">
              <span className="shadow-lg">{altText}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RecipeIngredients = ({ ingredients }) => {
    return (
      <div className="flex justify-center my-3 my-lg-5">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <h2 className="text-secondary text-center">Ingredients</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Ingredient</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Unit</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const RecipeDirections = ({ directions }) => {
    return (
      <div className="flex justify-center my-3 my-lg-5">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <h2 className="text-secondary text-center">Directions</h2>
          <ol>
            {directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  return (
    <>
      <RecipeTitle title={recipeTitle} />
      <RecipeDescription description={recipeDescription} />
      <RecipeImage imageUrl={recipeImageUrl} altText={recipeAltText} />
      <RecipeIngredients ingredients={recipeIngredients} />
      <RecipeDirections directions={recipeDirections} />
    </>
  );
};

export default Recipe;
