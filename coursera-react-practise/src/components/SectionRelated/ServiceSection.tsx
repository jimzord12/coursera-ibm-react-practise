import SectionHeader from "./SectionHeader";
import { roomsDetails } from "../../constants/roomsDetails";
import { addonsDetails } from "../../constants/addonsDetails";
import { useEffect, useMemo, useState } from "react";
import ServiceCard from "../ServiceCard";
import { useAppSelector } from "../../redux/hooks";

interface ServiceSectionProps {
  title: string;
  type: "rooms" | "addons" | "meals";
  idForRef: string;
}

const ServiceSection = ({ title, type, idForRef }: ServiceSectionProps) => {
  const [totalCost, setTotalCost] = useState(0);

  const allRooms = useAppSelector((state) => state.rooms.rooms);
  const allAddons = useAppSelector((state) => state.addOns.addOns);

  useEffect(() => {
    if (type === "rooms") {
      setTotalCost(allRooms.reduce((acc, r) => acc + r.price * r.quantity, 0));
    } else {
      setTotalCost(allAddons.reduce((acc, a) => acc + a.price * a.quantity, 0));
    }
  }, [allRooms, allAddons, type]);

  const data = useMemo(() => {
    switch (type) {
      case "rooms":
        return roomsDetails;
      case "addons":
        return addonsDetails;
      default:
        throw new Error("ServiceSection - useMemo: Invalid type");
    }
  }, [type]);

  return (
    <section className="scroll-mt-16" id={idForRef}>
      <SectionHeader title={title} />
      <div
        className="bg-gradient-to-r from-amber-500 to-pink-500 max-w-[1280px] mx-auto my-0 mt-4 rounded-md flex flex-wrap justify-start gap-4 py-6 px-14 shadow-xl"
        ria-describedby="section-body"
      >
        {data.map((el, idx) => (
          <ServiceCard data={el} key={idx} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="p-4 my-12 text-2xl text-black bg-white rounded-md shadow-md w-60">
          Total Amount: <strong>{totalCost}$</strong>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
