import PropTypes from 'prop-types';

const CookData = ({ item, idx, preparingHandler}) => {
  const { recipe_name, preparing_time, calories  } = item;
  return (
    <tr className="bg-base-200">
      <th>{idx+1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
      <button onClick={()=>preparingHandler(item)} className='py-2 px-3 rounded-3xl bg-[#0BE58A] font-semibold'>Preparing</button>
      </td>
    </tr>
  );
};

CookData.propTypes = {
  item: PropTypes.array,
  idx: PropTypes.number,
  preparingHandler: PropTypes.func
};

export default CookData;