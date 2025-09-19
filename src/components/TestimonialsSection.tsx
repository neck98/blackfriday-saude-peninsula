import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aluna há 2 anos",
    text: "Aqui encontrei motivação e acompanhamento que nunca tive em outras academias. Os treinos personalizados fizeram toda a diferença na minha evolução.",
    rating: 5
  },
  {
    name: "João Santos", 
    role: "Aluno Península",
    text: "O ambiente é acolhedor e os treinos realmente personalizados. A equipe sempre atenta aos detalhes e minha evolução é constante.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Aluna há 3 anos", 
    text: "A consultoria nutricional mudou minha vida! Resultados que não conseguia em outros lugares. Recomendo de olhos fechados.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-fitness-green-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="text-fitness-green">alunos dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 1000 vidas transformadas. Sua história pode ser a próxima.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;