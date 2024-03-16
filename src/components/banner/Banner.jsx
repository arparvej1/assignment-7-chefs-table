const Banner = () => {
  return (
    <div className="max-w-7xl mx-2 md:mx-auto bg-[url('/src/assets/banner-img.png')] bg-cover py-10 lg:min-h-[600px] flex rounded-3xl">
      <div className="flex  flex-col justify-center items-center text-center gap-5 mx-5 md:mx-10 lg:mx-32">
        <h3 className="text-white font-bold text-3xl lg:text-5xl">
          Discover an exceptional cooking
          class tailored for you!
        </h3>
        <p className="text-[#ffffffB3] text-xl">
        Our blend of Italian and Mediterranean culinary expertise here provides an unforgettable dining experience with exquisite cuisine in an elegant, inviting environment.
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