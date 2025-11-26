import { Vehicle, VehicleDocument } from "../models/Vehicle";

const SuzukiSpresso: VehicleDocument = new Vehicle({
  brand: "Suzuki",
  vehicleModel: "S-presso",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Automatica",
  sold: false,
  used: false,
  horsePower: 65.7,
  type: "Crossover",
  motor: "3 Cilindros 1.0L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiSpresso+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiSpresso+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiSpresso+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiSpresso+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+SuzukiSpresso+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Gris Claro",
      code: "rgba(128, 132, 136, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+SuzukiSpresso+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+SuzukiSpresso+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+SuzukiSpresso+3", alt: "Vista izquierda Gris"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+SuzukiSpresso+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_claro+SuzukiSpresso+5", alt: "Vista interio   Gris" },
      ]
    },
    {
      name: "Gris Oscuro",
      code: "rgba(86, 87, 87, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_oscuro+SuzukiSpresso+1", alt: "Vista frontal   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_oscuro+SuzukiSpresso+2", alt: "Vista derecha   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_oscuro+SuzukiSpresso+3", alt: "Vista izquierda Gris"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_oscuro+SuzukiSpresso+4", alt: "Vista trasera   Gris" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Gris_oscuro+SuzukiSpresso+5", alt: "Vista interio   Gris" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
  ]
});