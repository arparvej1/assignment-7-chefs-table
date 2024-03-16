const Banner = () => {
  return (
    <div className="max-w-7xl mx-2 md:mx-auto bg-[url('/src/assets/banner-img.png')] bg-cover min-h-[600px] flex rounded-3xl">
      <div className="flex  flex-col justify-center items-center text-center gap-5 mx-32">
        <h3 className="text-white font-bold text-5xl">
          Discover an exceptional cooking
          class tailored for you!
        </h3>
        <p className="text-[#ffffffB3] text-xl">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ codingproblems to become an exceptionally well world-class Programmer
        </p>
        <div className="flex gap-5">
          <button className="btn text-black bg-[#0be58a] hover:bg-[#0be58aB3] rounded-full border-none">Explore Now</button>
          <button className="btn bg-transparent text-white rounded-full hover:bg-gray-400">Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;