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
    <div className="flex justify-center mb-4">
      <div className="flex items-center justify-center w-2/3 gap-4 mt-4">
        <button
          className="flex items-center justify-center px-2 py-1 text-white bg-blue-500 rounded-md shadow center min-w-8 min-h-8"
          onClick={add}
        >
          +
        </button>
        <input
          type="number"
          name="service-quanity"
          value={quantity}
          // defaultValue={0}
          readOnly
          style={{ userSelect: "none" }}
          className="flex-auto w-24 h-full px-2 rounded-sm bg-slate-400"
        />
        <button
          className="flex items-center justify-center px-2 py-1 text-white rounded-md shadow min-w-8 min-h-8 bg-rose-700"
          onClick={remove}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
