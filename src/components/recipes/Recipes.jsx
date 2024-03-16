import ClockIcon from '../../assets/clock.svg';
import FireIcon from '../../assets/fire.svg';

const Recipes = () => {
  return (
    <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col gap-3 border-2 p-6 rounded-3xl">
        <img src="/src/assets/banner-img.png" alt="" />
        <h3 className="font-semibold text-xl">Spaghetti Bolognese</h3>
        <p className='text-[#878787]'>Classic Italian pasta dish with savory meat sauce.</p>
        <hr />
        <h3 className="font-semibold text-lg">Ingredients: 6</h3>
        <ul className="flex flex-col gap-2 text-[#878787]">
          <li>500g ground beeÎ</li>
          <li>1 onion, choppeÔ</li>
          <li>2 cloves garlic, minced</li>
        </ul>
        <hr />
        <div className='flex gap-4'>
          <div className='flex gap-2'>
            <img src={ClockIcon} alt="" />
            <p>30 minutes</p>
          </div>
          <div className='flex gap-2'>
            <img src={FireIcon} alt="" />
            <p>600 calories</p>
          </div>
        </div>
        <button className='btn w-2/3 bg-[#0BE58A] font-semibold text-xl'>Want to Cook</button>
      </div>
      {/* ----------------- */}
      <div className="flex flex-col gap-3 border-2 p-6 rounded-3xl">
        <img src="/src/assets/banner-img.png" alt="" />
        <h3 className="font-semibold text-xl">Spaghetti Bolognese</h3>
        <p>Classic Italian pasta dish with savory meat sauce.</p>
        <hr />
        <h3 className="font-semibold text-lg">Ingredients: 6</h3>
        <ul className="flex flex-col gap-2">
          <li>500g ground beeÎ</li>
          <li>1 onion, choppeÔ</li>
          <li>2 cloves garlic, minced</li>
        </ul>
        <hr />
        <div className='flex gap-4'>
          <div className='flex gap-2'>
            <img src={ClockIcon} alt="" />
            <p>30 minutes</p>
          </div>
          <div className='flex gap-2'>
            <img src={FireIcon} alt="" />
            <p>600 calories</p>
          </div>
        </div>
        <button className='btn w-auto bg-[#0BE58A] font-semibold text-xl'>Want to Cook</button>
      </div>
    </div>
  );
};

export default Recipes;