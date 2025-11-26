import { Vehicle, VehicleDocument } from "../models/Vehicle";

const ForthingT5Evo: VehicleDocument = new Vehicle({
  brand: "Forthing",
  vehicleModel: "T5 EVO",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "ZF Automatica",
  sold: false,
  used: false,
  horsePower: 195,
  type: "suv",
  motor: "Mitsubishi Mivec Turbo 1.5L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingT5Evo+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingT5Evo+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingT5Evo+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingT5Evo+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingT5Evo+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Negro",
      code: "rgba(0, 0, 0, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingT5Evo+1", alt: "Vista frontal   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingT5Evo+2", alt: "Vista derecha   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingT5Evo+3", alt: "Vista izquierda Negro"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingT5Evo+4", alt: "Vista trasera   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingT5Evo+5", alt: "Vista interio   Negro" },
      ]
    },
    {
      name: "Gris Claro",
      code: "rgba(136, 133, 133, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingT5Evo+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingT5Evo+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingT5Evo+3", alt: "Vista izquierda Gris"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingT5Evo+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingT5Evo+5", alt: "Vista interio   Gris" },
      ]
    },
    {
      name: "Rojo",
      code: "rgba(255, 0, 0, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+ForthingT5Evo+1", alt: "Vista frontal   Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+ForthingT5Evo+2", alt: "Vista derecha   Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+ForthingT5Evo+3", alt: "Vista izquierda Rojo"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+ForthingT5Evo+4", alt: "Vista trasera   Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+ForthingT5Evo+5", alt: "Vista interio   Rojo" },
      ]
    },
    {
      name: "Cian",
      code: "rgba(34, 150, 179, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Cian+ForthingT5Evo+1", alt: "Vista frontal   Cian" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Cian+ForthingT5Evo+2", alt: "Vista derecha   Cian" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Cian+ForthingT5Evo+3", alt: "Vista izquierda Cian"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Cian+ForthingT5Evo+4", alt: "Vista trasera   Cian" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Cian+ForthingT5Evo+5", alt: "Vista interio   Cian" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
  ]
});