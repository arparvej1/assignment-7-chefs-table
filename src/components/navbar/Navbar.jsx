import SearchIcon from "../../assets/search.svg";
import AccountIcon from "../../assets/account.svg";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-2 md:mx-auto my-4">
      <nav className="flex justify-between items-center">
        <div className="dropdown block md:hidden">
          <div tabIndex={0} role="button" className="btn bg-transparent border-none pl-0 pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
          </ul>
        </div>
        <h3 className="font-bold text-xl md:text-2xl">Alvi Capri</h3>
        <div className="hidden md:block">
          <ul className="flex gap-5">
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
          </ul>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="hidden md:block flex gap-2 bg-[#150B2B0D] px-3 rounded-full w-3/5 md:w-auto">
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