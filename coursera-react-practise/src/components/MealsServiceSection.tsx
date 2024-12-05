import { useEffect, useMemo, useState } from "react";
import { mealsDetails } from "../constants/mealsDetails";
import SectionHeader from "./SectionHeader";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updatePeople, toggleMeal, Meal } from "../redux/mealsSlice";

const MealsServiceSection = () => {
  const data = useMemo(() => mealsDetails, []);
  const [peopleInput, setPeopleInput] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const dispatch = useAppDispatch();
  const totalPeople = useAppSelector((state) => state.meals.meals.totalPeople);
  const selectedMeals = useAppSelector((state) => state.meals.meals);

  useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [totalPeople, selectedMeals]);

  console.log("Selected Meals: ", selectedMeals);

  const calculateTotalCost = () => {
    let total = 0;
    for (const [meal, price] of Object.entries(data)) {
      if (selectedMeals[meal as keyof typeof selectedMeals]) {
        total += price * totalPeople;
      }
    }
    return total;
  };

  const handlePeopleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget === null) {
      return;
    }

    if (Number(e.currentTarget.value) < 0) {
      alert("Please enter a positive number");
      return;
    }
    const result = Number(e.currentTarget.value);
    setPeopleInput(result);
    dispatch(updatePeople(result));
  };

  const handleMealSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleMealSelection: ", e.currentTarget.dataset.type);
    dispatch(toggleMeal(e.currentTarget.dataset.type as Meal));
  };

  return (
    <section>
      <SectionHeader title="Meals Selection" />
      <div
        className="bg-slate-600/50 max-w-[1280px] mx-auto my-0 mt-4 rounded-md flex flex-col justify-center items-center py-8"
        ria-describedby="section-body"
      >
        <div className="flex gap-4 w-full px-8 mb-12 justify-center items-center">
          <p className="text-lg drop-shadow-lg font-semibold">
            Number of People
          </p>
          <input
            type="number"
            onChange={handlePeopleInput}
            value={peopleInput}
          />
          {/* <p>(Redux Total People: {totalPeople})</p> */}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 justify-items-center">
          {Object.entries(data).map(([meal, price]) => (
            <div
              key={meal}
              className="bg-white p-4 w-60 rounded-md shadow-md text-black flex flex-row-reverse justify-between items-center gap-6"
            >
              <div>
                <h2 className="text-xl font-bold capitalize">{meal}</h2>
                <p className="text-lg">{price}$</p>
              </div>
              <input
                type="checkbox"
                className="w-6 h-6"
                data-type={meal}
                onChange={handleMealSelection}
              />
            </div>
          ))}
        </div>
        <div className="bg-white mt-16 p-4 w-60 rounded-md shadow-md text-black text-2xl">
          Total Amount: <strong>{totalCost}$</strong>
        </div>
      </div>
    </section>
  );
};

export default MealsServiceSection;
