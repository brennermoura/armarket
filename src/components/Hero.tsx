import { Button } from "@/components/ui/button";
import heroImage from "@/assets/supermarket-hero.jpg";
import heroLogo from "@/assets/armarket-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="mb-8">
          <img
            src={heroLogo}
            className="max-w-full m-auto"
            alt="Logo AR Market"
          />
        </div>

        <h2 className="text-xl md:text-2xl mb-8 font-light">
          Fabricamos os melhores expositores para o seu negócio. Unimos
          dedicação e tecnologia em cada detalhe, garantindo a excelência que os
          mercados atacadistas e varejistas precisam para destacar seus produtos
          e impulsionar as vendas.
        </h2>

        <Button
          onClick={scrollToContact}
          className="brand-button text-lg px-10 py-4"
        >
          Fale conosco
        </Button>
      </div>
    </section>
  );
};

export default Hero;
