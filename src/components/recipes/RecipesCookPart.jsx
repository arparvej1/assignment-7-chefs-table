import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

const RecipesCookPart = () => {
  return (
    <div  className="col-span-2 border-2 rounded-3xl">
      <WantToCook></WantToCook>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
};

export default RecipesCookPart;