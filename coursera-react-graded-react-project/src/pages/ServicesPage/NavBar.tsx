import { Link } from "react-router";

import { appDetails } from "../../constants/appDetails";
import Cart from "../../components/Cart/Cart";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-12 py-8 shadow-xl bg-emerald-700">
      <div>
        <Link
          to="/"
          className="flex-auto flex-nowrap w-[15%] text-start font-serif"
        >
          <h1 className="flex-auto font-serif text-white duration-300 w-fit text-start hover:drop-shadow-lg hover:-rotate-12 text-clip">
            {appDetails.name}
          </h1>
        </Link>
      </div>
      <Cart />
    </nav>
  );
};

export default NavBar;
