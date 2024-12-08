import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../redux/hooks";
import CartCard from "./CartCard";
import CartItemsBadge from "./CartItemsBadge";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const allPlants = useAppSelector((state) => state.plants.plants);

  useEffect(() => {
    const total = allPlants.reduce((acc, p) => acc + p.price * p.quantity, 0);
    setTotalAmount(total);
  }, [allPlants]);

  return (
    <>
      <CartItemsBadge openModal={setIsModalOpen} items={allPlants} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="mb-4 text-2xl font-semibold text-black">
          Total Cart Amount: ${totalAmount}
        </h1>

        <div className="flex flex-col gap-4 max-h-[75vh] overflow-auto scrollbar-hidden">
          {allPlants.length !== 0 ? (
            allPlants.map((p) => <CartCard data={p} key={p.id} />)
          ) : (
            <h1 className="my-12 text-2xl italic *:font-semibold text-black">
              Your cart is empty!
            </h1>
          )}
        </div>

        <div className="flex justify-center gap-6">
          <button
            className="px-4 py-2 mt-4 text-white rounded-md bg-emerald-800"
            onClick={() => setIsModalOpen(false)}
          >
            Continue Shopping
          </button>
          <button
            className="px-4 py-2 mt-4 text-white rounded-md bg-sky-600"
            onClick={() => {
              alert(
                "Checkout is not implemented yet. Please wait for the next update."
              );
            }}
          >
            Chekckout 🛒
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
