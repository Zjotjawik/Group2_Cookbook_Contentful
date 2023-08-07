import ShareButtons from "./ShareButtons";

/* eslint-disable react/prop-types */
const HeroRecipe = ({ recipe }) => {
  return (
    <>
      {recipe && (
        <div className="grid grid-cols-2 justify-between items-start">
          <div>
            <a href="#">
              <img src={recipe.image} alt={recipe.name} className="h-[42vh] rounded-2xl" />
            </a>
          </div>
          <div className="grid justify-start gap-y-4">
            <a href="#">
              <h4 className="font-bold uppercase text-orange-500">Have you tried this recipe yet?</h4>
              <h2 className="text-6xl font-light hover:text-orange-400">{recipe.name}</h2>
            </a>
            <div className="my-5">{recipe.description}</div>
            <div>
              <ShareButtons recipeName={recipe.name} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroRecipe;
