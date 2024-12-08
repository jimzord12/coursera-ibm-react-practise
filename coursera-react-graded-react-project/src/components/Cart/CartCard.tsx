import {
  addPlantToCart,
  deletePlantFromCart,
  Plant,
  removePlantFromCart,
} from "../../redux/plantsSlice";
import QuantitySelector from "../PorductCard/QuantitySelector";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useMemo } from "react";
import { plantsDetails } from "../../constants/plantDetails";

interface CartCardProps {
  data: Plant;
}

const CartCard = ({ data }: CartCardProps) => {
  const AllPlants = useAppSelector((state) => state.plants.plants);
  const specificPlant = AllPlants.find((p) => p.id === data.id);

  const dispatch = useAppDispatch();
  const handleItemAdd = () => {
    dispatch(addPlantToCart(data));
  };
  const handleItemRemove = () => {
    dispatch(removePlantFromCart(data));
  };
  const handleDeleteFromCart = () => {
    dispatch(deletePlantFromCart(data));
  };

  if (!specificPlant) throw new Error("CartCard: Plant not found");

  const specificPlantDetails = useMemo(
    () => plantsDetails.find((p) => p.id === data.id),
    [data.id]
  );

  if (!specificPlantDetails) throw new Error("CartCard - useMemo: Invalid id");

  return (
    <div className="flex gap-8 w-[560px] min-w-[420px] h-[360px] min-h-[200px] bg-emerald-700/40 rounded-md shadow justify-between">
      <div className="self-start h-full min-w-1/3 outline-dotted">
        <img
          className="block object-contain w-full h-full"
          src={specificPlantDetails.img}
          alt={data.name}
        />
      </div>

      <section className="flex flex-col items-start w-2/3 mt-2">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p>${specificPlant.price}</p>
        <div>
          <QuantitySelector
            add={handleItemAdd}
            remove={handleItemRemove}
            quantity={specificPlant.quantity}
          />
          <div className="flex ">
            <button
              className="text-white bg-red-600"
              onClick={handleDeleteFromCart}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
