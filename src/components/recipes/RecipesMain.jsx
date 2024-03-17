import { useState } from "react";
import Recipes from "./Recipes";
import RecipesCookPart from "./RecipesCookPart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipesMain = () => {

  const [wantToCookTable, setWantToCookTable] = useState([]);

  const wantToCookHandler = (recipe) => {
    let newCookTable = [...wantToCookTable];
    if (!wantToCookTable.includes(recipe)) {
      newCookTable = [...wantToCookTable, recipe];
      toast.success("Add want to cook!");
    } else if (newCookTable.length >= 6) {
      toast.error("Maximum items added!");
    } else {
      toast.warn("Already Added List!");
    }
    setWantToCookTable(newCookTable);
  }

  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const preparingHandler = (CookingItem) => {
    let newCookingTable = [...currentlyCooking];
    let newTotalMinutes = totalMinutes;
    let newTotalCalories = totalCalories;

    if (!currentlyCooking.includes(CookingItem)) {
      newCookingTable = [...currentlyCooking, CookingItem];
      newTotalMinutes = totalMinutes + CookingItem.preparing_time;
      newTotalCalories = totalCalories + CookingItem.calories;
      toast("Add to Cooking List!");
    } else {
      toast.info("Currently cooking this item!");
    }
    setCurrentlyCooking(newCookingTable);
    setTotalMinutes(newTotalMinutes);
    setTotalCalories(newTotalCalories);

    let newCookTable = [...wantToCookTable];
    const index = newCookTable.indexOf(CookingItem);
    if (index > -1) {
      newCookTable.splice(index, 1);
    }
    setWantToCookTable(newCookTable);

  }

  return (
    <div className="max-w-screen-xl mx-3 lg:mx-auto my-4 flex flex-col gap-5 justify-between items-center">
      <h3 className="font-bold text-center text-4xl">Our Recipes</h3>
      <p className="text-center w-auto md:w-4/5 lg:w-2/3">
        Indulge in Our Restaurant's Recipes, a curated collection of culinary masterpieces crafted with passion, offering a tantalizing glimpse into our kitchen's artistry and flavorsome creations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <Recipes
          wantToCookHandler={wantToCookHandler}
        ></Recipes>
        <RecipesCookPart
          wantToCookTable={wantToCookTable}
          currentlyCooking={currentlyCooking}
          totalMinutes={totalMinutes}
          totalCalories={totalCalories}
          preparingHandler={preparingHandler}
        ></RecipesCookPart>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipesMain;