import { useCallback, useEffect, useMemo, useState } from "react";
import { mealsDetails } from "../../constants/mealsDetails";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updatePeople, toggleMeal, Meal } from "../../redux/mealsSlice";
import SectionHeader from "../../components/SectionRelated/SectionHeader";

const MealsServiceSection = () => {
  const data = useMemo(() => mealsDetails, []);
  const [peopleInput, setPeopleInput] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const dispatch = useAppDispatch();
  const totalPeople = useAppSelector((state) => state.meals.meals.totalPeople);
  const selectedMeals = useAppSelector((state) => state.meals.meals);

  const calculateTotalCost = useCallback(() => {
    let total = 0;
    for (const [meal, price] of Object.entries(data)) {
      if (selectedMeals[meal as keyof typeof selectedMeals]) {
        total += price * totalPeople;
      }
    }
    return total;
  }, [data, selectedMeals, totalPeople]);

  useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [totalPeople, selectedMeals, calculateTotalCost]);

  // console.log("Selected Meals: ", selectedMeals);

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
    <section id="meals-section" className="scroll-mt-16">
      <SectionHeader title="Meals Selection" />
      <div
        className="bg-gradient-to-r from-amber-500 to-pink-500 max-w-[1280px] mx-auto my-0 mt-4 rounded-md flex flex-col justify-center items-center py-8"
        ria-describedby="section-body"
      >
        <div className="flex items-center justify-center w-full gap-4 px-8 mb-12">
          <p className="text-lg font-semibold drop-shadow-lg">
            Number of People:
          </p>
          <input
            className="px-2 text-black rounded-sm bg-zinc-300"
            type="number"
            onChange={handlePeopleInput}
            value={peopleInput}
          />
          {/* <p>(Redux Total People: {totalPeople})</p> */}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 justify-items-center">
          {Object.entries(data).map(([meal, price]) => (
            <div
              className="flex bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
              key={meal}
            >
              <div className="flex flex-row-reverse items-center justify-between gap-6 p-4 text-black rounded-md shadow-md bg-white/25 w-60">
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
            </div>
          ))}
        </div>
        <div className="p-4 mt-16 text-2xl text-black bg-white rounded-md shadow-md w-60">
          Total Amount: <strong>{totalCost}$</strong>
        </div>
      </div>
    </section>
  );
};

export default MealsServiceSection;
