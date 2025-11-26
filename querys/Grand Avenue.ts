import { Vehicle, VehicleDocument } from "../models/Vehicle";

const GrandAvenue: VehicleDocument = new Vehicle({
  brand: "JMC",
  vehicleModel: "Grand Avenue",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "4x4 8 velocidades Automática",
  sold: false,
  used: false,
  horsePower: 250,
  type: "Pick-up Doble Cabina",
  motor: "Ford Puma 2.3L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+GrandAvenue+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+GrandAvenue+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+GrandAvenue+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+GrandAvenue+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+GrandAvenue+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Gris",
      code: "rgb(33, 37, 41)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+GrandAvenue+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+GrandAvenue+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+GrandAvenue+3", alt: "Vista izquierda Gris"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+GrandAvenue+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+GrandAvenue+5", alt: "Vista interio   Gris" },
      ]
    },{
      name: "Negro",
      code: "rgba(0, 0, 0, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+GrandAvenue+1", alt: "Vista frontal   Negra" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+GrandAvenue+2", alt: "Vista derecha   Negra" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+GrandAvenue+3", alt: "Vista izquierda Negra"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+GrandAvenue+4", alt: "Vista trasera   Negra" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+GrandAvenue+5", alt: "Vista interio   Negra" },
      ]
    },
  ],
  features:[
    "Capacidad de carga 1000 Kg",
    "Incluye placa",
  ]
});