import PropTypes from 'prop-types';
import ClockIcon from '../../assets/clock.svg';
import FireIcon from '../../assets/fire.svg';

const Recipe = ({ recipe }) => {
  const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
  return (
    <div className="flex flex-col gap-3 border-2 p-6 rounded-3xl">
      <img src="/src/assets/banner-img.png" alt="" />
      <h3 className="font-semibold text-xl">{recipe_name}</h3>
      <p className='text-[#878787]'>{short_description}</p>
      <hr />
      <h3 className="font-semibold text-lg">Ingredients: {ingredients.length}</h3>
      <ul className="flex flex-col gap-2 text-[#878787]">
        <li>500g ground beeÎ</li>
        <li>1 onion, choppeÔ</li>
        <li>2 cloves garlic, minced</li>
      </ul>
      <hr />
      <div className='flex gap-4'>
        <div className='flex gap-2'>
          <div className='w-6'>
            <img src={ClockIcon} alt="" />
          </div>
          <p>{preparing_time} minutes</p>
        </div>
        <div className='flex gap-2'>
          <img src={FireIcon} alt="" />
          <p>{calories} calories</p>
        </div>
      </div>
      <button className='btn w-2/3 bg-[#0BE58A] font-semibold text-xl'>Want to Cook</button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;