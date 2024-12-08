import { Link } from "react-router";
const LandingPage = () => {
  return (
    <main className="relative inset-0 w-screen h-screen bg-center bg-no-repeat bg-cover bg-landing-page">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 backdrop-blur-md">
        <h1
          className="font-extralight text-8xl"
          style={{ textShadow: "2px 8px 26px rgba(0,0,0,0.6)" }}
        >
          🌱 50 Shades of Green 🌱
        </h1>
        <div className="flex items-center justify-center gap-8">
          <section className="flex-none w-fit text-4xl bg-slate-900/65 rounded-md p-24 shadow-2xl h-[400px]">
            <h1 className="mb-8 text-4xl font-bold">
              Make your life <br />{" "}
              <span className="text-emerald-500">Greener</span>
            </h1>
            <p className="mb-8 text-xl">Explore our online store!</p>
            <Link to={"services"}>
              <button className="text-lg w-42">Get Started!</button>
            </Link>
          </section>
          <section className="w-1/2 bg-slate-900/65 rounded-md p-12 shadow-2xl h-[400px] text-start flex flex-col justify-center">
            <h2 className="mb-4 text-2xl">
              {" "}
              Welcome to{" "}
              <span className="font-semibold text-green-400">
                50 Shades of Green
              </span>
              , where our ❤️ for plants 🌱 equals our ❤️ for life
            </h2>
            <div className="flex justify-center">
              <div className="h-[2px] w-32 bg-white mb-6" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium excepturi, dignissimos sint sapiente ratione unde.
              Perferendis deserunt vitae doloremque pariatur, deleniti eveniet
              voluptatibus! Laudantium quaerat labore repellendus maxime alias
              doloremque!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              asperiores? Animi, voluptatum. Aut animi fuga, laborum in iste
              illum culpa dolorum dolores quibusdam possimus adipisci ratione
              dolore ullam perferendis ad.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              possimus aspernatur architecto harum numquam doloremque laudantium
              dignissimos corporis aut qui minima molestiae est, sed mollitia
              dolores quod earum dicta in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
