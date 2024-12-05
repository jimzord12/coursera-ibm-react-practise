const LandingPage = () => {
  return (
    <main className="relative inset-0 bg-cover bg-center bg-no-repeat bg-landing-page w-screen h-screen">
      <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center gap-12">
        <section className="flex-none w-fit text-4xl bg-slate-900/65 rounded-md p-24 shadow-2xl h-[400px]">
          <h1 className="text-4xl font-bold mb-8">
            Conference Expense <br /> Planner
          </h1>
          <p className="text-xl mb-8">Plan your next major event with us!</p>
          <button className="w-36 text-lg">Get Started!</button>
        </section>
        <section className="w-1/2 bg-slate-900/65 rounded-md p-12 shadow-2xl h-[400px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            excepturi, dignissimos sint sapiente ratione unde. Perferendis
            deserunt vitae doloremque pariatur, deleniti eveniet voluptatibus!
            Laudantium quaerat labore repellendus maxime alias doloremque!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            asperiores? Animi, voluptatum. Aut animi fuga, laborum in iste illum
            culpa dolorum dolores quibusdam possimus adipisci ratione dolore
            ullam perferendis ad.
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
    </main>
  );
};

export default LandingPage;
