import footerLogo from "@/assets/armarket-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src={footerLogo}
              className="max-w-full h-8"
              alt="Logo AR Market"
            />{" "}
            <p className="text-sm text-background/70 mt-1 max-w-lg">
              Unimos dedicação e tecnologia em cada detalhe, garantindo a
              excelência que os mercados atacadistas e varejistas precisam para
              se destacar.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-background/70">
              © 2025 AR Market. Todos os direitos reservados.
            </p>
            <p className="text-sm text-background/70 mt-1">
              Desenvolvido por:{" "}
              <a
                href="https://hospeda.shop"
                target="_blank"
                className="text-amber-700"
              >
                HospedaShop
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
