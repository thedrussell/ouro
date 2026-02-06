import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a deep conversation to understand your current state, needs, and aspirations.",
  },
  {
    number: "02",
    title: "Curation",
    description: "Our experts design a personalized wellbeing itinerary tailored specifically to your unique path.",
  },
  {
    number: "03",
    title: "Immersion",
    description: "Step into the experience. Whether remote or in-person, you are fully supported every step of the way.",
  },
  {
    number: "04",
    title: "Integration",
    description: "The journey doesn't end when you leave. We provide tools to integrate your new practices into daily life.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32 h-fit bg-background py-8 lg:py-0 z-10">
          <h2 className="text-4xl md:text-6xl leading-tight">
            The Journey <br />
            <span className="text-primary italic">Inward</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Wellness is not a destination, but a continuous unfolding. Our process is designed to guide you gently from where you are to where you wish to be, with care and intention at every threshold.
          </p>
          <div className="w-24 h-[1px] bg-primary/30" />
        </div>

        <div className="lg:w-2/3 relative pl-8 md:pl-12 border-l border-primary/20">
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-2 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
                
                <div className="space-y-4">
                  <span className="text-6xl md:text-8xl font-serif text-primary/10 font-bold absolute -top-10 -left-4 -z-10 select-none group-hover:text-primary/20 transition-colors duration-500">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium pt-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
