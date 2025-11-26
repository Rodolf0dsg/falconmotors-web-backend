import { Vehicle, VehicleDocument } from "../models/Vehicle";

const JmcCarryingPlusN8224T: VehicleDocument = new Vehicle({
  brand: "JMC",
  vehicleModel: "New Carrying Plus N822 4T",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "5MT GETRAG",
  sold: false,
  used: false,
  horsePower: 95,
  type: "Camion",
  motor: "2.8 Isuzu Turbo Diesel 4 Cilindros",
  typeOfOil: "Diesel",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingPlusN8224T+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingPlusN8224T+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingPlusN8224T+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingPlusN8224T+5", alt: "Vista interio Blanca" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
    "Capacidad de carga 4000 Kg",
    "Tanque de combustible 120 L",
  ]
});