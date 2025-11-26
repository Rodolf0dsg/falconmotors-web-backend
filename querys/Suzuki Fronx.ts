import { Vehicle, VehicleDocument } from "../models/Vehicle";

const SuzukiFronx: VehicleDocument = new Vehicle({
  brand: "Suzuki",
  vehicleModel: "Fronx",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Automatica",
  sold: false,
  used: false,
  horsePower: 103,
  type: "Crossover",
  motor: "4 Cilindros 1.5L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiFronx+1", alt: "Vista frontal   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiFronx+2", alt: "Vista derecha   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiFronx+3", alt: "Vista izquierda Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiFronx+4", alt: "Vista trasera   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiFronx+5", alt: "Vista interio   Blanco" },
      ]
    },
    {
      name: "Plateado",
      code: "rgba(192, 192, 192, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Plateado+SuzukiFronx+2", alt: "Vista derecha   Plateado" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Plateado+SuzukiFronx+1", alt: "Vista frontal   Plateado" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Plateado+SuzukiFronx+3", alt: "Vista izquierda Plateado" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Plateado+SuzukiFronx+4", alt: "Vista trasera   Plateado" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Plateado+SuzukiFronx+5", alt: "Vista interio   Plateado" },
      ]
    },
    {
      name: "Gris",
      code: "rgba(71, 68, 68, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiFronx+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiFronx+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiFronx+3", alt: "Vista izquierda Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiFronx+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiFronx+5", alt: "Vista interio   Gris" },
      ]
    },
  ],
  features: [
    "Incluye placa",
  ]
});