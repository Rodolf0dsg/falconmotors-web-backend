import { Vehicle, VehicleDocument } from "../models/Vehicle";

const Isuzu700p: VehicleDocument = new Vehicle({
  brand: "Isuzu",
  vehicleModel: "700P",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "6MT Getrag",
  sold: false,
  used: false,
  horsePower: 190,
  type: "Camion",
  motor: "Isuzu 4HK1-TC51",
  typeOfOil: "Diesel",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Isuzu700p+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Isuzu700p+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Isuzu700p+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Isuzu700p+5", alt: "Vista interio Blanca" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
    "Capacidad de carga 8000 Kg",
    "Tanque de combustible 180 L",
  ]
});