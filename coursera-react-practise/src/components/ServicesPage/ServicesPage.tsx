import { Link } from "react-router";
import MealsServiceSection from "../MealsServiceSection";
import ServiceSection from "../ServiceSection";

const ServicesPage = () => {
  return (
    <main className="relative w-full h-full">
      <nav className="bg-orange-500 flex py-8 px-12 justify-between shadow-md">
        <Link to="/" className="flex-auto w-[15%] text-start font-serif">
          <h1 className="flex-auto w-[15%] text-start font-serif text-white hover:scale-110 duration-500">
            EasyMeet
          </h1>
        </Link>
        <ul className="flex flex-auto w-[65%] justify-around items-center font-mono text-xl">
          <li className="cursor-pointer hover:text-blue-600 hover:underline ">
            Venue
          </li>
          <div className="w-1 h-12 bg-white" />
          <li className="cursor-pointer hover:text-blue-600 hover:underline ">
            Add-ons
          </li>
          <div className="w-1 h-12 bg-white" />
          <li className="cursor-pointer hover:text-blue-600 hover:underline ">
            Meals
          </li>
          <li className="border-2 rounded-md p-4 bg-blue-500 shadow-xl hover:bg-blue-800 hover:shadow-none duration-500 cursor-pointer">
            Show Details
          </li>
        </ul>
      </nav>

      <article>
        <ServiceSection title="Venue Room Selection" type="rooms" />
        <ServiceSection title="Add-ons Selection" type="addons" />
        <MealsServiceSection />
      </article>
    </main>
  );
};

export default ServicesPage;
