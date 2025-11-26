import { Vehicle, VehicleDocument } from "../models/Vehicle";

const JimReMax: VehicleDocument = new Vehicle({
  brand: "JIM",
  vehicleModel: "Re-MAX",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "Manual 5 velocidades + R 4x4",
  sold: false,
  used: false,
  horsePower: 180,
  type: "Pick-up Doble Cabina",
  motor: "Mitsubishi GTDI 1.8L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JimReMax+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JimReMax+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JimReMax+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JimReMax+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+JimReMax+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Azul Oscuro",
      code: "rgba(1, 26, 165, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=azul_ocuro+JimReMax+1", alt: "Vista frontal   Azul oscuro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=azul_ocuro+JimReMax+2", alt: "Vista derecha   Azul oscuro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=azul_ocuro+JimReMax+3", alt: "Vista izquierda Azul oscuro"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=azul_ocuro+JimReMax+4", alt: "Vista trasera   Azul oscuro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=azul_ocuro+JimReMax+5", alt: "Vista interio   Azul oscuro" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
    "Capacidad de carga 800 Kg",
  ]
});