import { Vehicle, VehicleDocument } from "../models/Vehicle";

const AllNewVigusPro: VehicleDocument = new Vehicle({
  brand: "JMC",
  vehicleModel: "All New Vigus Pro",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "MT 6 + R",
  sold: false,
  used: false,
  horsePower: 180,
  type: "Pick-up Doble Cabina",
  motor: "Ford Puma 1.8L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+AllNewVigusPro+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+AllNewVigusPro+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+AllNewVigusPro+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+AllNewVigusPro+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+AllNewVigusPro+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Gris Claro",
      code: "rgba(128, 132, 136, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+GrandAvenue+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+GrandAvenue+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+GrandAvenue+3", alt: "Vista izquierda Gris"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+GrandAvenue+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+GrandAvenue+5", alt: "Vista interio   Gris" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
  ]
});