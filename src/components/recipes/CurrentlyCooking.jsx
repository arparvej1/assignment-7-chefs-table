const CurrentlyCooking = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 my-6">
      <h3 className="font-semibold text-xl lg:text-2xl">Currently cooking: 02</h3>
      <hr className="w-4/5 mx-auto" />
      <table className=" w-full">
        <tr>
          <th>Name</th>
          <th className="pl-1">Time</th>
          <th>Calories</th>
          <th></th>
        </tr>
        <tr className=" bg-[#28282808]">
          <td className="pl-6">Spaghetti Bolognese</td>
          <td className="pl-1">20 minutes</td>
          <td  className="pl-1">400 calories</td>
          <td className="pr-6 pl-1">Preparing</td>
        </tr>
        <tr className=" bg-[#28282808]">
          <td className="pl-6">Chicken Caesar Salad</td>
          <td className="pl-1">20 minutes</td>
          <td  className="pl-1">400 calories</td>
          <td className="pr-6 pl-1">Preparing</td>
        </tr>
        <tr className=" bg-[#28282808] font-semibold">
          <td className="pl-6"></td>
          <td className="pl-1"></td>
          <td  className="pl-1">Total Time = 45 minutes</td>
          <td className="pr-6 pl-1">Total Calories = 1050 calories</td>
        </tr>
      </table>
    </div>
    </div>
  );
};

export default CurrentlyCooking;