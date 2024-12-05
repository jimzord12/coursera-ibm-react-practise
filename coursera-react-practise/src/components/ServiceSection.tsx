import SectionHeader from "./SectionHeader";
import { roomsDetails } from "../constants/roomsDetails";
import { addonsDetails } from "../constants/addonsDetails";
import { useMemo } from "react";
import { mealsDetails } from "../constants/mealsDetails";
import MealsServiceSection from "./MealsServiceSection";

interface ServiceSectionProps {
  title: string;
  type: "rooms" | "addons" | "meals";
}

const ServiceSection = ({ title, type }: ServiceSectionProps) => {
  const data = useMemo(() => {
    switch (type) {
      case "rooms":
        return roomsDetails;
      case "addons":
        return addonsDetails;
      case "meals":
        return mealsDetails;
      default:
        throw new Error("ServiceSection - useMemo: Invalid type");
    }
  }, [type]);

  return (
    <section className="">
      <SectionHeader title={title} />
      <div
        className="bg-slate-600/50 max-w-[1280px] mx-auto my-0 mt-4 rounded-md flex justify-center"
        ria-describedby="section-body"
      >
        {/* <div>{}</div> */}
        {/* <ServiceCard data={data} /> */}
      </div>
    </section>
  );
};

export default ServiceSection;
