import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hortifrutiImage from "@/assets/hortifruti-display.jpg";
import wineImage from "@/assets/wine-display.jpg";
import bakeryImage from "@/assets/bakery-display.jpg";

const Services = () => {
  const services = [
    {
      title: "Expositores Hortifruti",
      description: "Trabalhos desenvolvidos para o setor de hortifruti...",
      image: hortifrutiImage,
      alt: "Expositores para seção de hortifruti"
    },
    {
      title: "Expositores Adegas",
      description: "Trabalhos desenvolvidos para a seção de bebidas...",
      image: wineImage,
      alt: "Expositores para seção de vinhos e bebidas"
    },
    {
      title: "Expositores Padarias",
      description: "Trabalhos desenvolvidos para a seção padaria...",
      image: bakeryImage,
      alt: "Expositores para seção de padaria"
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Produtos e Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-[var(--transition-smooth)] overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)]" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]">
                  Ver Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;