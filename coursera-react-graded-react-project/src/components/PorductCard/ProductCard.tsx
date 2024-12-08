import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addPlantToCart, Plant } from "../../redux/plantsSlice";

interface ProductCardProps {
  data: {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity?: number;
    desc: string;
  };
}

const ProductCard = ({ data }: ProductCardProps) => {
  // const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();

  const allPlants = useAppSelector((state) => state.plants.plants);

  const specificPlant = allPlants.find((p) => p.id === data.id);

  const [isAddedToCart, setIsAddedToCart] = useState(
    specificPlant ? true : false
  );

  useEffect(() => {
    console.log("Plant Name: ", specificPlant?.name);
    console.log("Quantity: ", specificPlant?.quantity);
    setIsAddedToCart(specificPlant ? true : false);
  }, [specificPlant, data.id]);

  // console.log("Room: ", specificRoom);
  // console.log("Add-On: ", specificAddon);

  return (
    <div className="flex bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <div className="flex flex-col w-[280px] h-[380px] shadow-lg bg-stone-300/25 text-black rounded-md p-2 px-4 justify-center items-center">
        <h1 className="text-2xl font-semibold">{data.name}</h1>
        <div className="w-full mt-4 rounded-md drop-shadow-md h-2/5">
          <img
            className="object-cover w-full h-full rounded-md"
            src={data.img}
            alt={`image of ${data.name}`}
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold">Price: {data.price}</h2>

        <h2 className="mt-4 overflow-hidden text-sm italic">{data.desc}</h2>

        <button
          disabled={isAddedToCart}
          className={`px-4 py-2 mt-4 text-white rounded-md bg-emerald-800 ${
            isAddedToCart
              ? "cursor-not-allowed grayscale hover:border-opacity-0"
              : "hover:bg-emerald-900"
          }`}
          onClick={() => {
            dispatch(addPlantToCart(data as Plant));
            setIsAddedToCart(true);
          }}
        >
          {isAddedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
        {/* <QuantitySelector
          quantity={
            // data.id < 200 ? specificRoom?.quantity : specificAddon?.quantity
            quantity
          }
          add={() => dispatch(addPlantToCart(data as Plant))}
          remove={() => dispatch(removePlantFromCart(data as Plant))}
        /> */}
      </div>
    </div>
  );
};

export default ProductCard;
