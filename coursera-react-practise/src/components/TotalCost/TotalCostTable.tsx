import { useMemo } from "react";
import { useAppSelector } from "../../redux/hooks";
import { mealsDetails } from "../../constants/mealsDetails";
import { roomsDetails } from "../../constants/roomsDetails";
import { Meal } from "../../redux/mealsSlice";

interface TotalCostTableProps {
  columns: string[];
  title: string;
}

const TotalCostTable = ({ title, columns }: TotalCostTableProps) => {
  const meals = useAppSelector((state) => state.meals.meals);
  const rooms = useAppSelector((state) => state.rooms.rooms);
  const addOns = useAppSelector((state) => state.addOns.addOns);

  const calcAllTotalCost = useMemo(() => {
    let totalMealsCost = 0;
    for (const [key, value] of Object.entries(meals)) {
      if (key !== "totalPeople" && value === true) {
        totalMealsCost +=
          mealsDetails[key as keyof typeof mealsDetails] * meals.totalPeople;
      }
    }

    let totalRoomsCost = 0;
    for (const room of rooms) {
      totalRoomsCost += room.price * room.quantity;
    }

    let totalAddonsCost = 0;
    for (const addon of addOns) {
      totalAddonsCost += addon.price * addon.quantity;
    }

    return totalMealsCost + totalRoomsCost + totalAddonsCost;
  }, [meals, rooms, addOns]);

  // console.log("Meals: ", meals);
  // console.log("Rooms: ", rooms);
  // console.log("Addons: ", addOns);

  // const isDataCorrect = useMemo(
  //   () =>
  //     data.every((dataEntry) => {
  //       if (Object.keys(dataEntry).length !== columns.length) {
  //         errors.push("Number of columns is not correct");
  //         return false;
  //       }

  //       columns.every((col) => {
  //         if (!(col in dataEntry)) {
  //           errors.push(`Column ${col} is missing`);
  //           return false;
  //         }
  //         if (typeof dataEntry[col] !== "string") {
  //           errors.push(`Column ${col} is not a string`);
  //           return false;
  //         }
  //         return true;
  //       });

  //       return true;
  //     }),
  //   [data, columns]
  // );

  // if (!isDataCorrect) {
  //   console.log("Columns: ", columns);
  //   console.log("Data: ", data);
  //   console.log("Errors: ", errors);
  //   throw new Error("TotalCostTable: Data is not correct");
  // }

  return (
    <main className="p-6 text-black rounded-md bg-slate-200">
      <table className="table w-full overflow-auto border border-collapse border-slate-500">
        <caption className="mb-4 font-serif text-2xl">
          <h1 className="text-3xl drop-shadow-2xl">{title}</h1>
          <h2 className="p-2 my-2 font-sans text-2xl font-semibold border-t-2 border-black rounded-md w-fit">
            ${calcAllTotalCost}
          </h2>
        </caption>
        <thead className="">
          <tr className="bg-slate-400">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="p-2 font-semibold capitalize border border-slate-600"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xl">
          <>
            {rooms.map((room, idx) => (
              <tr
                key={idx}
                className="border border-slate-600 bg-emerald-300/35"
              >
                <td
                  className="p-2 border border-slate-600 text-start"
                  key={idx}
                >
                  {room.name}
                </td>
                <td className="text-center border border-slate-600" key={idx}>
                  ${room.price}
                </td>
                <td
                  className="p-2 text-center border border-slate-600"
                  key={idx}
                >
                  {room.quantity}
                </td>
                <td
                  className="p-2 border border-slate-600 text-start"
                  key={idx}
                >
                  ${room.price * room.quantity}
                </td>
              </tr>
            ))}
          </>
          <>
            {addOns.map((addon, idx) => (
              <tr
                key={idx}
                className="capitalize border border-slate-600 bg-sky-300/35"
              >
                <td
                  className="p-2 border border-slate-600 text-start"
                  key={idx}
                >
                  {addon.name}
                </td>
                <td className="text-center border border-slate-600" key={idx}>
                  ${addon.price}
                </td>
                <td
                  className="p-2 text-center border border-slate-600"
                  key={idx}
                >
                  {addon.quantity}
                </td>
                <td
                  className="p-2 border border-slate-600 text-start"
                  key={idx}
                >
                  ${addon.price * addon.quantity}
                </td>
              </tr>
            ))}
          </>

          <>
            {Object.entries(meals)
              .filter(
                ([key, selected]) =>
                  selected && key !== "totalPeople" && meals.totalPeople > 0
              )
              .map(([key], idx) => (
                <tr
                  key={idx}
                  className="capitalize border border-slate-600 bg-amber-300/35"
                >
                  <td
                    className="p-2 border border-slate-600 text-start"
                    key={idx}
                  >
                    {key}
                  </td>
                  <td
                    className="p-2 text-center border border-slate-600"
                    key={idx}
                  >
                    ${mealsDetails[key as Meal]}
                  </td>
                  <td
                    className="p-2 text-lg border border-slate-600 text-start"
                    key={idx}
                  >
                    for {meals.totalPeople} people
                  </td>
                  <td
                    className="p-2 border border-slate-600 text-start"
                    key={idx}
                  >
                    ${mealsDetails[key as Meal] * meals.totalPeople}
                  </td>
                </tr>
              ))}
          </>
        </tbody>
      </table>
    </main>
  );
};

export default TotalCostTable;
