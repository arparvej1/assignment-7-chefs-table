import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";
import PropTypes from 'prop-types';

const RecipesCookPart = ({ wantToCookTable, currentlyCooking, preparingHandler }) => {

  return (
    <div className="col-span-2 border-2 rounded-3xl">
      <WantToCook
        wantToCookTable={wantToCookTable}
        preparingHandler={preparingHandler}
      ></WantToCook>
      <CurrentlyCooking
        key={currentlyCooking.recipe_id}
        currentlyCooking={currentlyCooking}
      ></CurrentlyCooking>
    </div>
  );
};

RecipesCookPart.propTypes = {
  wantToCookTable: PropTypes.array,
  currentlyCooking: PropTypes.array,
  preparingHandler: PropTypes.func
};

export default RecipesCookPart;