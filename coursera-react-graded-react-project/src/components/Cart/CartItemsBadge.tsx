import { Plant } from "../../redux/plantsSlice";

const CartItemsBadge = ({
  openModal,
  items,
}: {
  openModal: (state: boolean) => void;
  items: Plant[];
}) => {
  const totalItems = items.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <div className="relative" onClick={() => openModal(true)}>
      <div
        className={`absolute z-10 flex items-center justify-center w-8 h-8 text-xl bg-red-600 rounded-full -top-1 -right-3  ${
          totalItems > 0 ? "visible" : "invisible"
        }`}
      >
        <span className="absolute top-0">{totalItems}</span>
      </div>
      <div className="w-16 h-16 transition-transform cursor-pointer hover:scale-110">
        <img
          className="block object-contain w-full h-full"
          src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
          alt="cart-icon"
        />
      </div>
    </div>
  );
};

export default CartItemsBadge;
