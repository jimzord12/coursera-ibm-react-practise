import { useState } from "react";
import { Link } from "react-router";
import Modal from "../../components/Modal/Modal";
import TotalCostTable from "../../components/TotalCost/TotalCostTable";

const dummyData = [
  {
    name: "aaaaaaaaaaaaaaaaaaaaaaaa",
    "unit-cost": "$1500",
    quantity: "5",
    "total-cost": "$1200",
  },
  {
    name: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "unit-cost": "$2300",
    quantity: "4",
    "total-cost": "$42500",
  },
  { name: "ccc", "unit-cost": "$3700", quantity: "3", "total-cost": "$564500" },
];

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex justify-between px-12 py-8 bg-orange-500 shadow-xl">
      <Link to="/" className="flex-auto w-[15%] text-start font-serif">
        <h1 className="flex-auto w-[15%] text-start font-serif text-white hover:drop-shadow-lg hover:-rotate-12 duration-300 text-clip">
          EasyMeet
        </h1>
      </Link>
      <ul className="flex flex-auto w-[65%] justify-around items-center font-mono text-xl">
        <li className="cursor-pointer hover:text-blue-600 hover:underline ">
          <a href="#venue-section" className="text-inherit">
            Venue
          </a>
        </li>
        <div className="w-1 h-12 bg-white" />
        <li className="cursor-pointer hover:text-blue-600 hover:underline ">
          <a href="#addons-section" className="text-inherit">
            Add-ons
          </a>
        </li>
        <div className="w-1 h-12 bg-white" />
        <li className="cursor-pointer hover:text-blue-600 hover:underline ">
          <a href="#meals-section" className="text-inherit">
            Meals
          </a>
        </li>
        <li
          className="p-4 duration-500 bg-blue-500 border-2 rounded-md shadow-xl cursor-pointer hover:bg-blue-800 hover:shadow-none"
          onClick={() => setIsModalOpen(true)}
        >
          Show Details
        </li>
      </ul>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TotalCostTable
          title="Costs from Selected Services"
          columns={Object.keys(dummyData[0])}
          // data={dummyData}
        />
        <button className="mt-4" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </Modal>
    </nav>
  );
};

export default NavBar;
