import { Button } from "@/components/ui/button";
import { Timer, Star, Award, Users } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroGym})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        {/* Black Friday Badge */}
        <div className="inline-flex items-center gap-2 bg-urgent-red text-white px-6 py-2 rounded-full mb-8 font-bold text-sm uppercase tracking-wider animate-pulse">
          <Timer className="w-4 h-4" />
          Super Black Friday - Últimas Vagas!
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gold">Transforme</span> sua rotina de treinos
          <br />
          com até <span className="text-gold">25% OFF</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
          Na Unidade Península, você garante planos exclusivos de{" "}
          <span className="line-through text-gray-400">R$425</span>{" "}
          por apenas <span className="text-gold font-bold text-3xl">R$315/mês</span>{" "}
          e ainda economiza até <span className="text-fitness-green font-bold">R$1.320 por ano</span>!
        </p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-gold">
            <Star className="w-5 h-5 fill-current" />
            <span>Mais de 20 anos de experiência</span>
          </div>
          <div className="flex items-center gap-2 text-gold">
            <Award className="w-5 h-5" />
            <span>Infraestrutura premium</span>
          </div>
          <div className="flex items-center gap-2 text-gold">
            <Users className="w-5 h-5" />
            <span>Ambiente familiar</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button variant="hero" size="xl" className="text-xl px-12 py-6 mb-4">
          Quero garantir meu desconto agora
        </Button>
        
        <p className="text-sm text-gray-300">
          ⏰ Promoção válida até 30/11 ou enquanto houver vagas
        </p>
      </div>
    </section>
  );
};

export default HeroSection;