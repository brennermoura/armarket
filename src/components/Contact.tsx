import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, MessageCircle, Image } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "5521965755458"; // número com DDI + DDD
    const text = `
Mensagem do site AR Market 🚀

Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone || "Não informado"}
Mensagem: ${formData.message}
`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp...",
      description: "Finalize o envio por lá 📲",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(21) 96575-5458",
      link: "https://api.whatsapp.com/send?phone=5521965755458&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AR%20Market%20e%20gostaria%20de%20um%20atendimento%20personalizado!",
    },
    {
      icon: Image,
      title: "Instagram",
      info: "@armarkett_",
      link: "https://www.instagram.com/armarkett_",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. São Paulo, 15 - Qd 02 - Parque Império, Duque de Caxias, RJ",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 8h às 18h",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fale com a <span className="text-primary">AR Market</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a
            potencializar o seu negócio com nossas soluções em expositores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary/20"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="brand-button w-full md:w-auto"
                  >
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="glass-card group hover:scale-105 transition-[var(--transition-smooth)]"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-[var(--transition-smooth)]">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase">
                        {item.title}
                      </h3>
                      {item.link.startsWith("#") ? (
                        <p className="text-foreground font-medium">
                          {item.info}
                        </p>
                      ) : (
                        <a
                          href={item.link}
                          target="_blank"
                          className="text-foreground font-medium hover:text-primary transition-[var(--transition-fast)]"
                        >
                          {item.info}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
