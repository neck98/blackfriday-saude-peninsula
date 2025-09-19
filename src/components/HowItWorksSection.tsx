import { Calendar, FileText, Play } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Escolha o plano Black Friday",
    description: "Garanta sua vaga com desconto especial de até 25% OFF"
  },
  {
    icon: FileText,
    step: "2", 
    title: "Agende sua avaliação e ficha personalizada",
    description: "Nossa equipe criará um programa exclusivo para seus objetivos"
  },
  {
    icon: Play,
    step: "3",
    title: "Comece a treinar",
    description: "Power Bike incluso na rotina + acompanhamento mensal"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como <span className="text-gold">funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            3 passos simples para começar sua transformação
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;