import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Calendar, Timer } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-gold/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-urgent-red text-white px-6 py-2 rounded-full mb-6 font-bold text-sm uppercase tracking-wider">
            <Timer className="w-4 h-4" />
            Oferta Limitada - Black Friday
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gold">Economize até</span>
            <br />
            R$1.320 por ano
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="text-center p-8 bg-white/10 rounded-2xl border border-white/20">
              <div className="text-sm uppercase tracking-wider text-gold mb-2">Preço Normal</div>
              <div className="text-4xl font-bold mb-2 line-through text-gray-400">
                R$425
              </div>
              <div className="text-sm text-gray-300">por mês</div>
            </div>
            
            {/* After */}
            <div className="text-center p-8 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl border-2 border-gold relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-urgent-red text-white px-4 py-1 rounded-full text-xs font-bold">
                25% OFF
              </div>
              <div className="text-sm uppercase tracking-wider text-gold mb-2">Black Friday</div>
              <div className="text-5xl font-bold mb-2 text-gold">
                R$315
              </div>
              <div className="text-sm text-white">por mês</div>
            </div>
          </div>
          
          {/* Savings Highlight */}
          <div className="text-center bg-fitness-green/20 border border-fitness-green rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-fitness-green" />
              <span className="text-2xl font-bold text-fitness-green">Sua Economia</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-fitness-green">R$110</div>
                <div className="text-sm">por mês</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fitness-green">R$330</div>
                <div className="text-sm">por trimestre</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fitness-green">R$660</div>
                <div className="text-sm">por semestre</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fitness-green">R$1.320</div>
                <div className="text-sm">por ano</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <Button variant="gold" size="xl" className="text-xl px-12 py-6 mb-4">
              Quero meu desconto agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Válido até 30/11
              </div>
              <div>•</div>
              <div>Vagas limitadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;