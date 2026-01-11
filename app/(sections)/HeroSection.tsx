import StatsRow from "@/components/StatsRow";

function HeroSection() {
  return (
    <section className="px-8 py-5 md:py-12 pb-0" id="about">
      <p className="text-secondary">
        Hello, I'm <span className="text-accent">software engineer</span>
      </p>
      <h1 className="mt-4 text-xl md:text-3xl lg:text-6xl  font-extrabold leading-tight capitalize ">
        Full Stack and Mobile app developer
        <span className="mx-2 transform -skew-y-2 mt-1 inline-block rounded-full bg-accent px-3 py-1 text-black">
          React Scientist
        </span>
        Based in
      </h1>
      <h2 className="text-md md:text-3xl lg:text-6xl font-extrabold">
        Addis Abeba
      </h2>

      <p className="mt-6 max-w- text-white">
        Have worked in a variety of positions, including as frontend and
        backend. Strong engineering background combined with closely working
        with business customers.
      </p>
      <StatsRow />
    </section>
  );
}

export default HeroSection;
