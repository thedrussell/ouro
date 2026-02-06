import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What experience level is required?",
    answer: "Our programs are designed to be accessible to everyone, from complete beginners to experienced practitioners. We meet you exactly where you are.",
  },
  {
    question: "How do I choose the right retreat?",
    answer: "We recommend scheduling a discovery call with one of our guides. They can help listen to your needs and suggest the path that will serve you best.",
  },
  {
    question: "Are meals included in the experience?",
    answer: "Yes, all our in-person retreats include organic, locally-sourced meals prepared by our wellness chefs to support your physical healing.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "We understand life happens. Full refunds are available up to 30 days before your start date. Transfers to future dates are available up to 14 days prior.",
  },
  {
    question: "Do I need to bring my own equipment?",
    answer: "We provide everything you need, including yoga mats, meditation cushions, and journals. Just bring comfortable clothing and an open heart.",
  },
  {
    question: "Are the sessions private or group-based?",
    answer: "We offer both. Our signature retreats are small group experiences (max 12 people) to foster community, but private customized intensives are also available.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely. Our kitchen is free from processed sugars and gluten by default. Please let us know of any specific allergies upon booking.",
  },
  {
    question: "Is accommodation shared or private?",
    answer: "You have the choice of a private sanctuary suite or a shared twin room if you're traveling with a partner or friend.",
  },
  {
    question: "What happens after the retreat?",
    answer: "Integration is key. You'll receive a 30-day post-retreat digital guide and access to our monthly community calls to help sustain your practice.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">Common Questions</h2>
          <p className="text-muted-foreground font-light text-lg">
            Everything you need to know before you begin.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background/50 hover:bg-background transition-colors duration-300">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-6 hover:no-underline hover:text-primary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg font-light pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
