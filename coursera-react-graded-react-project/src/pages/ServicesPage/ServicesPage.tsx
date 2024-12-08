import ServiceSection from "../../components/SectionRelated/ServiceSection";
import NavBar from "./NavBar";

const ServicesPage = () => {
  return (
    <main className="relative w-full h-full">
      <NavBar />

      <article className="pb-6">
        <ServiceSection
          title="Air Purifying Selection"
          type="air purifying"
          idForRef="venue-section"
        />
        <ServiceSection
          title="Aromatic Selection"
          type="aromatic"
          idForRef="addons-section"
        />
      </article>
    </main>
  );
};

export default ServicesPage;
