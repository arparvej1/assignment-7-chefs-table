import PropTypes from 'prop-types';

const CookingData = ({ item, idx}) => {
  const { recipe_name, preparing_time, calories  } = item;
  return (
    <tr className="bg-base-200">
      <th>{idx+1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};

CookingData.propTypes = {
  item: PropTypes.array,
  idx: PropTypes.number
};


export default CookingData;