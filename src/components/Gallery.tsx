import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

// Importe as imagens de todas as categorias
import { expositoresVinhos } from "@/assets/expositores-vinhos/gallery-vinhos";
import { expositoresHortifruti } from "@/assets/expositores-hortifruti/gallery-hortifruti";
import { expositoresPadarias } from "@/assets/expositores-padarias/gallery-padarias";
import { expositoresDiversos } from "@/assets/expositores-diversos/gallery-diversos";

// Crie uma lista para cada categoria
const adegaItems = expositoresVinhos.map((image, index) => ({
  id: `adega-${index + 1}`,
  title: `Expositor de Bebidas ${index + 1}`,
  category: "Expositores Bebidas",
  image: image,
  description: `Descrição do Expositor de Vinhos ${index + 1}.`,
}));

const hortifrutiItems = expositoresHortifruti.map((image, index) => ({
  id: `hortifruti-${index + 1}`,
  title: `Expositor Hortifruti ${index + 1}`,
  category: "Expositores Hortifruti",
  image: image,
  description: `Descrição do Expositor Hortifruti ${index + 1}.`,
}));

const padariaItems = expositoresPadarias.map((image, index) => ({
  id: `padaria-${index + 1}`,
  title: `Expositor de Padaria ${index + 1}`,
  category: "Expositores Padarias",
  image: image,
  description: `Descrição do Expositor de Padaria ${index + 1}.`,
}));

const diversosItems = expositoresDiversos.map((image, index) => ({
  id: `padaria-${index + 1}`,
  title: `Expositor diverso ${index + 1}`,
  category: "Expositores Diversos",
  image: image,
  description: `Descrição do Expositor variado ${index + 1}.`,
}));

// Combine todas as listas em um único array
const allGalleryItems = [
  ...hortifrutiItems,
  ...adegaItems,
  ...padariaItems,
  ...diversosItems,
];

const categories = [
  "Expositores Hortifruti",
  "Expositores Bebidas",
  "Expositores Padarias",
  "Expositores Diversos",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  // A lógica de filtro não muda, ela já funciona com o `allGalleryItems`
  const filteredItems = allGalleryItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section id="services" className="py-20 section-padding ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Catálogo de <span className="text-primary">Expositores</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Conheça nossos expositores para adegas, padarias e hortifruts,
            desenvolvidos com dedicação e tecnologia. Oferecemos soluções sob
            medida, feitas para valorizar seus produtos e otimizar seu espaço.{" "}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-[#A35B2E] hover:bg-[#8e4f28] text-white rounded-lg"
                    : "border-[#A35B2E] text-[#A35B2E] hover:bg-white rounded-lg"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1"></h3>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-white/20 text-white border-white/30"
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="w-[95vw] max-w-4xl p-0 overflow-hidden rounded-lg bg-black flex items-center justify-center">
            {selectedImage && (
              <div className="relative w-full flex items-center justify-center">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 z-10 p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
