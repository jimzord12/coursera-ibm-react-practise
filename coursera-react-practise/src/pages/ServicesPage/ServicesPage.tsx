import ServiceSection from "../../components/SectionRelated/ServiceSection";
import MealsServiceSection from "./MealsServiceSection";
import NavBar from "./NavBar";

const ServicesPage = () => {
  return (
    <main className="relative w-full h-full">
      <NavBar />

      <article className="">
        <ServiceSection
          title="Venue Room Selection"
          type="rooms"
          idForRef="venue-section"
        />
        <ServiceSection
          title="Add-ons Selection"
          type="addons"
          idForRef="addons-section"
        />
        <MealsServiceSection />
      </article>
    </main>
  );
};

export default ServicesPage;
