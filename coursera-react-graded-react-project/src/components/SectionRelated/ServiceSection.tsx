import SectionHeader from "./SectionHeader";
import { airPurifying, aromaticPlants } from "../../constants/plantDetails";
import { useMemo } from "react";
import ProductCard from "../PorductCard/ProductCard";

interface ServiceSectionProps {
  title: string;
  type: "aromatic" | "air purifying";
  idForRef: string;
}

const ServiceSection = ({ title, type, idForRef }: ServiceSectionProps) => {
  // const [totalCost, setTotalCost] = useState(0);

  // const purifyingPlantsInCart = useAppSelector(
  //   (state) => state.plants.plants
  // ).filter((p) => p.id < 300);
  // const aromaticPlantsInCart = useAppSelector(
  //   (state) => state.plants.plants
  // ).filter((p) => p.id >= 300);

  // useEffect(() => {
  //   if (type === "air purifying") {
  //     setTotalCost(
  //       purifyingPlantsInCart.reduce((acc, r) => acc + r.price * r.quantity, 0)
  //     );
  //   } else {
  //     setTotalCost(
  //       aromaticPlantsInCart.reduce((acc, a) => acc + a.price * a.quantity, 0)
  //     );
  //   }
  // }, [airPurifying, aromaticPlants, type]);

  const data = useMemo(() => {
    switch (type) {
      case "air purifying":
        return airPurifying;
      case "aromatic":
        return aromaticPlants;
      default:
        throw new Error("ServiceSection - useMemo: Invalid type");
    }
  }, [type]);

  return (
    <section className="mb-8 scroll-mt-16" id={idForRef}>
      <SectionHeader title={title} />
      <div
        className="bg-gradient-to-r from-sky-500 to-emerald-500 max-w-[1280px] mx-auto my-0 mt-4 rounded-md flex flex-wrap justify-start gap-4 py-6 px-14 shadow-xl"
        ria-describedby="section-body"
      >
        {data.map((el, idx) => (
          <ProductCard data={el} key={idx} />
        ))}
      </div>
      {/* <div className="flex justify-center">
        <div className="p-4 my-12 text-2xl text-black bg-white rounded-md shadow-md w-60">
          Total Amount: <strong>{totalCost}$</strong>
        </div>
      </div> */}
    </section>
  );
};

export default ServiceSection;
