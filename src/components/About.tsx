import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Soluções personalizadas para cada necessidade do seu negócio"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Tecnologia de ponta para maximizar a apresentação dos produtos"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Anos de experiência no mercado de equipamentos para varejo"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produtos duráveis e de alta qualidade para seu estabelecimento"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-primary">AR Market</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A AR Market é especializada no desenvolvimento e fabricação de expositores 
              e equipamentos para supermercados, oferecendo soluções inovadoras que 
              combinam funcionalidade e design para potencializar a apresentação 
              de produtos no ponto de venda.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa dedicação e tecnologia estão a serviço da sua empresa, 
              proporcionando equipamentos que aumentam a visibilidade dos produtos 
              e melhoram a experiência de compra dos seus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-[var(--transition-smooth)]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-[var(--transition-smooth)]">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;