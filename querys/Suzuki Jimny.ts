import { Vehicle, VehicleDocument } from "../models/Vehicle";

const SuzukiJimny: VehicleDocument = new Vehicle({
  brand: "Suzuki",
  vehicleModel: "Jimny",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Automatica",
  sold: false,
  used: false,
  horsePower: 103,
  type: "Todoterreno",
  motor: "4 Cilindros 1.5L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiJimny+1", alt: "Vista frontal   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiJimny+2", alt: "Vista derecha   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiJimny+3", alt: "Vista izquierda Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiJimny+4", alt: "Vista trasera   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiJimny+5", alt: "Vista interio   Blanco" },
      ]
    },
    {
      name: "Mostaza",
      code: "rgba(161, 182, 43, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Mostaza+SuzukiJimny+2", alt: "Vista derecha   Mostaza" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Mostaza+SuzukiJimny+1", alt: "Vista frontal   Mostaza" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Mostaza+SuzukiJimny+3", alt: "Vista izquierda Mostaza" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Mostaza+SuzukiJimny+4", alt: "Vista trasera   Mostaza" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Mostaza+SuzukiJimny+5", alt: "Vista interio   Mostaza" },
      ]
    },
  ],
  features: [
    "Incluye placa",
    "Disponible version de 3 y 5 puertas",
    "Tracción 4x4",
  ]
});