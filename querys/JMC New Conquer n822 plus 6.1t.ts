import { Vehicle, VehicleDocument } from "../models/Vehicle";

const JmcConquerPlusN8226T: VehicleDocument = new Vehicle({
  brand: "JMC",
  vehicleModel: "New Conquer Plus N822 6.1T",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Manaul 6 + R",
  sold: false,
  used: false,
  horsePower: 261,
  type: "Camion",
  motor: "3.0 Isuzu LWB Turbo Diesel",
  typeOfOil: "Diesel",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcConquerPlusN8226T+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcConquerPlusN8226T+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcConquerPlusN8226T+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JmcConquerPlusN8226T+5", alt: "Vista interio Blanca" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
    "Capacidad de carga 6100 Kg",
    "Tanque de combustible 125 L",
    "Sistema de frenos de Aire de Doble Circuito con ABS",
  ]
});