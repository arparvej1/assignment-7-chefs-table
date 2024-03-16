import PropTypes from 'prop-types';
import CookData from './CookData';

const WantToCook = ({ wantToCookTable, preparingHandler }) => {    
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-6 mb-3">
        <h3 className="font-semibold text-xl lg:text-2xl">Want to cook: {wantToCookTable.length}</h3>
        <hr className="w-4/5 mx-auto" />
      </div>
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
              wantToCookTable.map((item,idx) => (
                <CookData
                idx={idx}
                key={item.recipe_id}
                item={item}
                preparingHandler={preparingHandler}
                ></CookData>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

WantToCook.propTypes = {
  wantToCookTable: PropTypes.array,
  preparingHandler: PropTypes.func
};

export default WantToCook;