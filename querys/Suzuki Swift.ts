import { Vehicle, VehicleDocument } from "../models/Vehicle";

const SuzukiSwift: VehicleDocument = new Vehicle({
  brand: "Suzuki",
  vehicleModel: "Swift",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "CVT",
  sold: false,
  used: false,
  horsePower: 82,
  type: "Subcompacto",
  motor: "3 Cilindros 1.2L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Azul",
      code: "rgba(30, 81, 192, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Axul+SuzukiSwift+1", alt: "Vista frontal   Azul" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Axul+SuzukiSwift+2", alt: "Vista derecha   Azul" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Axul+SuzukiSwift+3", alt: "Vista izquierda Azul" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Axul+SuzukiSwift+4", alt: "Vista trasera   Azul" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Axul+SuzukiSwift+5", alt: "Vista interio   Azul" },
      ]
    },
    {
      name: "Rojo",
      code: "rgba(255, 0, 0, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+SuzukiSwift+1", alt: "Vista frontal   Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+SuzukiSwift+2", alt: "Vista derecha   Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+SuzukiSwift+3", alt: "Vista izquierda Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+SuzukiSwift+4", alt: "Vista trasera   Rojo" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Rojo+SuzukiSwift+5", alt: "Vista interio   Rojo" },
      ]
    },
    {
      name: "Gris",
      code: "rgba(125, 129, 129, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiSwift+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiSwift+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiSwift+3", alt: "Vista izquierda Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiSwift+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+SuzukiSwift+5", alt: "Vista interio   Gris" },
      ]
    },
  ],
  features: [
    "Incluye placa",
  ]
});