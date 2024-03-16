
const WantToCook = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-6">
      <h3>Want to cook: 01</h3>
      <hr className="w-4/5 mx-auto" />
      <table className=" w-full">
        <tr className=" bg-red-500">
          <th>Name</th>
          <th className="pl-1">Time</th>
          <th>Calories</th>
          <th></th>
        </tr>
        <tr className=" bg-[#28282808]">
          <td className="pl-6">Chicken Caesar Salad</td>
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
      </table>
    </div>
  );
};

export default WantToCook;