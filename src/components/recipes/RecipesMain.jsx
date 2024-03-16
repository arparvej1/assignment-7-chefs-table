import Recipes from "./Recipes";
import RecipesCookPart from "./RecipesCookPart";


const RecipesMain = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4 flex flex-col gap-5 justify-between items-center">
      <h3 className="font-bold text-4xl">Our Recipes</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Egeturna volutpat curabitur elementum mauris aenean neque.
      </p>
      <div className="grid grid-cols-5 gap-5">
        <Recipes></Recipes>
        {/* <RecipesCookPart></RecipesCookPart> */}
      </div>
    </div>
  );
};

export default RecipesMain;