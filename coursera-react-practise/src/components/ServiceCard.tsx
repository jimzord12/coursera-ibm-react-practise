import { useEffect, useState } from "react";
import { addAddOn, AddOn, removeAddOn } from "../redux/addOnsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addRoom, removeRoom, Room } from "../redux/roomSlice";

interface ServiceCardProps {
  data: {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity?: number;
    capacity?: number;
  };
}

const ServiceCard = ({ data }: ServiceCardProps) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useAppDispatch();

  const allRooms = useAppSelector((state) => state.rooms);
  const allAddons = useAppSelector((state) => state.addOns);

  const specificRoom = allRooms.rooms.find((r) => r.id === data.id);
  const specificAddon = allAddons.addOns.find((a) => a.id === data.id);

  useEffect(() => {
    console.log("All Rooms: ", allRooms);
    console.log("All Addons: ", allAddons);
    if (data.id < 200) {
      setQuantity(specificRoom?.quantity ?? 0);
    } else {
      setQuantity(specificAddon?.quantity ?? 0);
    }
  }, [specificRoom, specificAddon, data.id]);

  // console.log("Room: ", specificRoom);
  // console.log("Add-On: ", specificAddon);

  return (
    <div className="w-[280px] h-[380px] shadow-lg bg-zinc-300 text-black rounded-md p-2 justify-center items-center border-2 border-blue-400">
      <h1 className="text-2xl font-semibold">{data.name}</h1>
      <div className="mt-4 h-2/5 rounded-md outline-dotted">
        <img
          className="object-cover h-full w-full rounded-md"
          src={data.img}
          alt={`image of ${data.name}`}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">Price: {data.price}</h2>
      {data.capacity && (
        <h2 className="text-xl font-semibold mt-4">
          (Capacity): {data.capacity}
        </h2>
      )}
      <QuantitySelector
        quantity={
          // data.id < 200 ? specificRoom?.quantity : specificAddon?.quantity
          quantity
        }
        add={() =>
          data.id < 200
            ? dispatch(addRoom(data as Room))
            : dispatch(addAddOn(data as AddOn))
        }
        remove={() =>
          data.id < 200
            ? dispatch(removeRoom(data as Room))
            : dispatch(removeAddOn(data as AddOn))
        }
      />
    </div>
  );
};

interface QuantitySelectorProps {
  quantity?: number;
  add: () => void;
  remove: () => void;
}

const QuantitySelector = ({
  quantity = 0,
  add,
  remove,
}: QuantitySelectorProps) => {
  // console.log("Qnt: ", quantity);
  return (
    <div className="flex justify-center mt-4">
      <div className="flex justify-center items-center mt-4 w-2/3 gap-4">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
          onClick={add}
        >
          Add
        </button>
        <input
          type="number"
          name="service-quanity"
          value={quantity}
          // defaultValue={0}
          readOnly
          style={{ userSelect: "none" }}
          className="bg-slate-400 px-2 flex-auto w-24 rounded-sm"
        />
        <button
          className="text-white bg-rose-600 px-2 py-1 rounded-md"
          onClick={remove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
