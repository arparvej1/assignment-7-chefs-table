import PropTypes from 'prop-types';
import CookingData from './CookingData';

const CurrentlyCooking = ({ currentlyCooking, totalMinutes, totalCalories }) => {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 my-6">
        <h3 className="font-semibold text-xl lg:text-2xl">Currently cooking: {currentlyCooking.length}</h3>
        <hr className="w-4/5 mx-auto" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              
              {/* row 1 */}
              {
                currentlyCooking.map((item, idx) => (
                  <CookingData
                    idx={idx}
                    key={item.recipe_id}
                    item={item}
                  ></CookingData>
                ))
              }
              <tr className=" bg-[#28282808] font-semibold">
                <td className="pl-6"></td>
                <td className="pl-1"></td>
                <td className="pl-1">Total Time = {totalMinutes} minutes</td>
                <td className="pr-6 pl-1">Total Calories = {totalCalories} calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

CurrentlyCooking.propTypes = {
  currentlyCooking: PropTypes.array,
  totalMinutes: PropTypes.number,
  totalCalories: PropTypes.number
};

export default CurrentlyCooking;