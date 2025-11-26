import { Vehicle, VehicleDocument } from "../models/Vehicle";

const JmcCarryingN697: VehicleDocument = new Vehicle({
  brand: "JMC",
  vehicleModel: "Carrying N697",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "5MT GETRAG",
  sold: false,
  used: false,
  horsePower: 85,
  type: "Camion",
  motor: "2.8 Isuzu Turbo Diesel 4 Cilindros",
  typeOfOil: "Diesel",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingN697+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingN697+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingN697+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingN697+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcCarryingN697+5", alt: "Vista interio Blanca" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
    "Capacidad de carga 2800 Kg",
    "Tanque de combustible 60 L",
  ]
});