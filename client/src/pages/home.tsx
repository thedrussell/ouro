import { Hero } from "@/components/hero";
import { CarouselSection } from "@/components/carousel-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight">Serenity</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Retreats</a>
            <a href="#" className="hover:text-foreground transition-colors">Journal</a>
            <a href="#" className="hover:text-foreground transition-colors">Our Story</a>
            <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <CarouselSection />
        <ProcessTimeline />
        <FaqSection />
      </main>

      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-serif">Serenity</h2>
          <p className="opacity-80 font-light max-w-md mx-auto">
            Curating spaces for stillness in a chaotic world.
          </p>
          <div className="pt-8 border-t border-primary-foreground/20 text-sm opacity-60">
            © 2024 Serenity Wellbeing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
