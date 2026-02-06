import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 mt-4 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden">
      <div className="flex-1 space-y-8 animate-in slide-in-from-left-5 duration-1000 fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground tracking-tight">
          Find Your <br />
          <span className="italic text-primary">Sanctuary</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
          Disconnect from the noise and reconnect with your essence. Our curated wellbeing experiences are designed to restore balance to your mind, body, and spirit.
        </p>
        <div className="flex gap-4 pt-4">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            Begin Journey
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 w-full relative animate-in slide-in-from-right-5 duration-1000 fade-in delay-200">
        <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* Color Block Placeholder */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/40 to-primary/10 transition-transform duration-700 hover:scale-105" />
          
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-60 h-60 bg-secondary/60 rounded-full blur-3xl mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
