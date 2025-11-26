import { Vehicle, VehicleDocument } from "../models/Vehicle";

const ForthingS60: VehicleDocument = new Vehicle({
  brand: "Forthing",
  vehicleModel: "S60 Joyear",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Manual 5+R ",
  sold: false,
  used: false,
  horsePower: 122,
  type: "Sedan",
  motor: "Mitsubishi Mivec 1.6L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingS60+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingS60+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingS60+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingS60+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingS60+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Negro",
      code: "rgba(0, 0, 0, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingS60+1", alt: "Vista frontal   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingS60+2", alt: "Vista derecha   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingS60+3", alt: "Vista izquierda Negro"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingS60+4", alt: "Vista trasera   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingS60+5", alt: "Vista interio   Negro" },
      ]
    },
    {
      name: "Gris Oscuro",
      code: "rgba(78, 76, 76, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingS60+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingS60+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingS60+3", alt: "Vista izquierda Gris"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingS60+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris+ForthingS60+5", alt: "Vista interio   Gris" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
  ]
});