import { Vehicle, VehicleDocument } from "../models/Vehicle";

const IsuzuGiga6x2Vc61: VehicleDocument = new Vehicle({
  brand: "Isuzu",
  vehicleModel: "GIGA 6x4 VC61",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Manual 8 Velocidades",
  sold: false,
  used: false,
  horsePower: 460,
  type: "Gandola",
  motor: "Isuzu 6WG1-TCG52",
  typeOfOil: "Diesel",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+IsuzuGiga6x2Vc61+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+IsuzuGiga6x2Vc61+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+IsuzuGiga6x2Vc61+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+IsuzuGiga6x2Vc61+5", alt: "Vista interio Blanca" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
    "Capacidad de carga 40000 Kg",
    "Tanque de combustible 400 L",
  ]
});