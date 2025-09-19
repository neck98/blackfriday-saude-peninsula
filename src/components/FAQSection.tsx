import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Posso trancar o plano?",
    answer: "Sim. Até 60 dias no plano anual (regras na recepção)."
  },
  {
    question: "O que está incluso?",
    answer: "Ficha personalizada mensal, bioimpedância, Power Bike e consultoria nutricional inicial."
  },
  {
    question: "Até quando vai a promoção?",
    answer: "Até 30/11 ou enquanto houver vagas."
  },
  {
    question: "Qual unidade?",
    answer: "Esta campanha é para a Unidade Península."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-gold">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre nossa promoção Black Friday
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-gold hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;