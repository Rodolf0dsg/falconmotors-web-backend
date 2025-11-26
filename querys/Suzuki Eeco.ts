import { Vehicle, VehicleDocument } from "../models/Vehicle";

const SuzukiEeco: VehicleDocument = new Vehicle({
  brand: "Suzuki",
  vehicleModel: "Eeco",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Manual 5+R",
  sold: false,
  used: false,
  horsePower: 79,
  type: "Van",
  motor: "4 Cilindros 1.5L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiEeco+1", alt: "Vista frontal   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiEeco+2", alt: "Vista derecha   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiEeco+3", alt: "Vista izquierda Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiEeco+4", alt: "Vista trasera   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiEeco+5", alt: "Vista interio   Blanco" },
      ]
    },
  ],
  features: [
    "Incluye placa",
  ]
});