import SearchIcon from "../../assets/search.svg";
import AccountIcon from "../../assets/account.svg";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4">
      <nav className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">Recipe Calories</h3>
        <ul className="flex gap-5">
          <li><a href="">Home</a></li>
          <li><a href="">Recipes</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Search</a></li>
        </ul>
        <div className="flex gap-2">
          <div className="flex gap-2 bg-[#150B2B0D] px-3 rounded-full">
            <img src={SearchIcon} alt="" />
            <input className="bg-transparent outline-none" type="text" placeholder="Search" />
          </div>
          <div className="p-2 bg-[#0BE58A] rounded-full">
          <img src={AccountIcon} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;