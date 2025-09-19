import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Posso trancar o plano Black Friday?",
    answer: "Sim! Você pode trancar seu plano por até 60 dias no plano anual, mantendo todos os benefícios quando retornar."
  },
  {
    question: "Quais benefícios estão inclusos no plano?",
    answer: "Seu plano inclui: fichas de treino personalizadas mensais, acesso às aulas de Power Bike, avaliações de bioimpedância, consultoria nutricional gratuita (brinde Black Friday) e ambiente familiar exclusivo."
  },
  {
    question: "Até quando vai a promoção?",
    answer: "A promoção Black Friday é válida até 30/11/2024 ou enquanto houver vagas disponíveis. Recomendamos garantir sua vaga o quanto antes!"
  },
  {
    question: "Posso usar a promoção em qualquer unidade?",
    answer: "Esta promoção especial é exclusiva para a Unidade Península, que conta com toda a infraestrutura premium da Estação Saúde."
  },
  {
    question: "Como funciona a consultoria nutricional?",
    answer: "Nosso nutricionista fará uma avaliação completa e criará um plano alimentar personalizado para seus objetivos. É nosso brinde especial da Black Friday!"
  },
  {
    question: "Preciso de experiência prévia?",
    answer: "Não! Atendemos desde iniciantes até atletas avançados. Nossa equipe criará um programa adequado ao seu nível e objetivos."
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