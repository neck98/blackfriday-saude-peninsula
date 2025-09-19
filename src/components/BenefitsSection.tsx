import { CheckCircle, Dumbbell, Heart, Users, Utensils, Activity } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Ficha de treino personalizada todo mês",
    description: "Treino exclusivo, adaptado aos seus objetivos e evolução mensal."
  },
  {
    icon: Heart,
    title: "Avaliações de bioimpedância inclusas",
    description: "Acompanhe sua evolução com tecnologia de ponta no seu plano."
  },
  {
    icon: Activity,
    title: "Acesso às aulas de Power Bike",
    description: "Participe das aulas dinâmicas de cycling em ambiente motivador."
  },
  {
    icon: Users,
    title: "Ambiente acolhedor e exclusivo",
    description: "Treine em espaço familiar com atendimento personalizado."
  },
  {
    icon: Utensils,
    title: "Consultoria nutricional inicial",
    description: "Mimo Black Friday: acompanhamento nutricional personalizado."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que você ganha com seu <span className="text-gold">plano premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Muito mais que uma academia. Uma experiência completa de saúde e bem-estar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-fitness-green-light rounded-full">
                  <benefit.icon className="w-6 h-6 text-fitness-green" />
                </div>
                <CheckCircle className="w-5 h-5 text-fitness-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;