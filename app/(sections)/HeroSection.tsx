import StatsRow from "@/components/StatsRow";
import LineByLineReveal from "../../components/animations/LineByLineReveal";
import { TextReveal, FadeInView } from "@/components/animations";

function HeroSection() {
  return (
    <section
      className="sm:px-8 py-5 md:py-12  space-y-4 sm:space-y-7 pt-12 pb-8"
      id="about"
    >
      <div>
        <LineByLineReveal
          delay={0.2}
          staggerDelay={0.08}
          className="text-primary text-lg sm:text-xl md:text-2xl"
        >
          Hello, I'm
        </LineByLineReveal>{" "}
        <LineByLineReveal
          insideClass="text-[#78cc6d]"
          delay={0.6}
          staggerDelay={0.08}
          className="text-primary text-lg sm:text-xl md:text-2xl text-[#78cc6d] "
        >
          software engineer
        </LineByLineReveal>
      </div>

      <TextReveal delay={1.2}>
        <h1 className="text-2xl md:text-3xl lg:text-[56px] font-heading font-medium lg:leading-tight leading-loose capitalize ">
          Full Stack developer And
          <span className="mx-2 transform -skew-y-2 text-xl md:text-2xl lg:text-[48px] relative right-1  inline-block capitalize rounded-full bg-[#78cc6d] px-3 py-1 text-black">
            React Scientist
          </span>
          Based in Ethiopia, Addis Abeba .
        </h1>
      </TextReveal>

      <LineByLineReveal
        delay={2.0}
        staggerDelay={0.03}
        className="text-base md:text-lg text-secondary max-w-2xl"
      >
        Have worked in a variety of positions, including as frontend and
        backend. Strong engineering background combined with closely working
        with business customers.
      </LineByLineReveal>

      <FadeInView delay={2.4} className="pt-4">
        <StatsRow />
      </FadeInView>
    </section>
  );
}

export default HeroSection;
