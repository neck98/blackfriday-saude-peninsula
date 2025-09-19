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
        {/* Urgency Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-urgent-red text-white px-4 py-2 rounded-full font-bold text-sm">
            <Timer className="w-4 h-4" />
            Vagas limitadas
          </div>
          <div className="inline-flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-full font-bold text-sm border border-white/20">
            Termina em 30/11
          </div>
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full font-bold text-sm border border-gold/30">
            Unidade Península
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Super Black Friday <span className="text-gold">Estação Saúde</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300">– Península</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
          Planos premium de <span className="line-through text-gray-400">R$ 425</span>{" "}
          por <span className="text-gold font-bold text-3xl">R$ 315/mês</span>.{" "}
          Economize até <span className="text-fitness-green font-bold">R$ 1.320/ano</span>{" "}
          e treine com acompanhamento de verdade.
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
        
        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button variant="hero" size="xl" className="text-xl px-12 py-6">
            Garantir meu desconto
          </Button>
          <Button variant="outline" size="xl" className="text-xl px-12 py-6 bg-fitness-green hover:bg-fitness-green/90 text-white border-fitness-green">
            Falar no WhatsApp
          </Button>
        </div>
        
        <p className="text-sm text-gray-300">
          ⏰ Promoção válida até 30/11 ou enquanto houver vagas
        </p>
      </div>
    </section>
  );
};

export default HeroSection;