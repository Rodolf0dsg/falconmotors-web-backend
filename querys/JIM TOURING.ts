import { Vehicle, VehicleDocument } from "../models/Vehicle";

const JmcTouring: VehicleDocument = new Vehicle({
  brand: "JMC",
  vehicleModel: "Touring",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "6MT GETRAG",
  sold: false,
  used: false,
  horsePower: 141,
  type: "Van 15 Pasajeros",
  motor: "2.0 GTDI Turbo Diesel",
  typeOfOil: "Diesel",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JMCTOURING+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JMCTOURING+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JMCTOURING+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JMCTOURING+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JMCTOURING+5", alt: "Vista interio Blanca" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
  ]
});