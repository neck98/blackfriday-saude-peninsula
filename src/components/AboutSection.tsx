import { Shield, Award, Users, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sobre a <span className="text-gold">Estação Saúde</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Há mais de <span className="text-gold font-bold">20 anos</span> promovendo saúde, bem-estar e qualidade de vida em São Luís. 
            A Estação Saúde é referência em atendimento exclusivo, planos personalizados e infraestrutura de alto padrão.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">20+ Anos</h3>
              <p className="text-muted-foreground">De experiência e tradição</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-fitness-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-fitness-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Vidas transformadas</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-urgent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-urgent-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Referência</h3>
              <p className="text-muted-foreground">Em atendimento premium</p>
            </div>
          </div>
          
          {/* Unidades */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-gold" />
              Nossas Unidades
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-bold text-lg">Renascença</h4>
                <p className="text-sm text-muted-foreground">Unidade tradicional</p>
              </div>
              <div className="p-4 bg-gold/10 rounded-lg border-2 border-gold">
                <h4 className="font-bold text-lg text-gold">Península</h4>
                <p className="text-sm text-gold">Promoção Black Friday</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-bold text-lg">Luzeiros</h4>
                <p className="text-sm text-muted-foreground">Mais próxima de você</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;