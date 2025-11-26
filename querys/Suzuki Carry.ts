import { Vehicle, VehicleDocument } from "../models/Vehicle";

const SuzukiCarry: VehicleDocument = new Vehicle({
  brand: "Suzuki",
  vehicleModel: "Carry",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Manual 5+R",
  sold: false,
  used: false,
  horsePower: 95,
  type: "Mini-Camion Pickup",
  motor: "4 Cilindros 1.5L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiCarry+1", alt: "Vista frontal   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiCarry+2", alt: "Vista derecha   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiCarry+3", alt: "Vista izquierda Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiCarry+4", alt: "Vista trasera   Blanco" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiCarry+5", alt: "Vista interio   Blanco" },
      ]
    },
  ],
  features: [
    "Incluye placa",
    "Capacidad de carga 920 Kg"
  ]
});