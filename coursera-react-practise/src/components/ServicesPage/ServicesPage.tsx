import MealsServiceSection from "../MealsServiceSection";
import ServiceSection from "../ServiceSection";
import NavBar from "./NavBar";

const ServicesPage = () => {
  return (
    <main className="relative w-full h-full">
      <NavBar />

      <article>
        <ServiceSection title="Venue Room Selection" type="rooms" />
        <ServiceSection title="Add-ons Selection" type="addons" />
        <MealsServiceSection />
      </article>
    </main>
  );
};

export default ServicesPage;
