import { useEffect, useState } from "react";
import Recipes from "./Recipes";
import RecipesCookPart from "./RecipesCookPart";


const RecipesMain = () => {

  const [wantToCookTable, setWantToCookTable] = useState([]);

  const wantToCookHandler = (recipe)=>{
    let newCookTable = [...wantToCookTable];
    if(!wantToCookTable.includes(recipe))newCookTable = [...wantToCookTable, recipe];
    setWantToCookTable(newCookTable);
  }

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const preparingHandler = (CookingItem)=>{
    let newCookingTable = [...currentlyCooking];
    if(!currentlyCooking.includes(CookingItem))newCookingTable = [...currentlyCooking, CookingItem];
    setCurrentlyCooking(newCookingTable);
  }

  return (
    <div className="max-w-screen-xl mx-auto my-4 flex flex-col gap-5 justify-between items-center">
      <h3 className="font-bold text-4xl">Our Recipes</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Egeturna volutpat curabitur elementum mauris aenean neque.
      </p>
      <div className="grid grid-cols-5 gap-5">
        <Recipes
        wantToCookHandler={wantToCookHandler}
        ></Recipes>
        <RecipesCookPart
        wantToCookTable={wantToCookTable}
        currentlyCooking={currentlyCooking}
        preparingHandler={preparingHandler}
        ></RecipesCookPart>
      </div>
    </div>
  );
};

export default RecipesMain;