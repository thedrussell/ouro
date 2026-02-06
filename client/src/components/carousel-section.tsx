import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  {
    title: "Mindfulness Retreats",
    description: "Immerse yourself in silence and guided meditation practices led by master teachers.",
    color: "bg-stone-200", // Placeholder color block
  },
  {
    title: "Holistic Nutrition",
    description: "Nourish your body with organic, plant-based culinary experiences tailored to your needs.",
    color: "bg-orange-100", // Placeholder color block
  },
  {
    title: "Somatic Healing",
    description: "Release tension and trauma through movement therapies and bodywork sessions.",
    color: "bg-emerald-100", // Placeholder color block
  },
];

export function CarouselSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6">Curated Experiences</h2>
          <p className="text-muted-foreground text-lg font-light">
            Explore our three pillars of wellbeing, each designed to bring you closer to a state of complete harmony.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full border-none shadow-none bg-transparent group cursor-pointer">
                    <CardContent className="flex flex-col h-full p-0 gap-6">
                      {/* Placeholder Image Block */}
                      <div className={`aspect-[4/5] rounded-xl overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 ${slide.color}`}>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <div className="space-y-3 px-2">
                        <h3 className="text-2xl font-serif">{slide.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-light">
                          {slide.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12 md:hidden">
            {/* Mobile controls usually hidden or styled differently, kept simple here */}
          </div>
          <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
