import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-gold">começar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato e garante sua vaga na promoção Black Friday
          </p>
          
          <Button variant="hero" size="xl" className="text-xl px-12 py-6 mb-8">
            Matricule-se já
          </Button>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Unidade Península */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gold">Unidade Península</h3>
                <p className="text-sm text-gray-300">Promoção Black Friday</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>(98) 3235-1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-fitness-green" />
                  <span>(98) 98765-4321</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>5h às 22h</span>
                </div>
              </div>
            </div>
            
            {/* Outras Unidades */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Renascença</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>(98) 3235-5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-fitness-green" />
                  <span>(98) 98765-8765</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Luzeiros</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>(98) 3235-9012</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-fitness-green" />
                  <span>(98) 98765-2109</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-4">Siga-nos nas redes sociais</p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://instagram.com/academiaestacaosaude" 
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full hover:scale-105 transition-transform"
              >
                <Instagram className="w-5 h-5" />
                @academiaestacaosaude
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;