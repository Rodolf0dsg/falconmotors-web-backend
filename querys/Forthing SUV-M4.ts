import { Vehicle, VehicleDocument } from "../models/Vehicle";

const ForthingSuvM4: VehicleDocument = new Vehicle({
  brand: "Forthing",
  vehicleModel: "M4 Yacht",
  year: 2025,
  mileage: 0,
  price: 0,
  transmission: "ZF Automatica",
  sold: false,
  used: false,
  horsePower: 195,
  type: "SUV",
  motor: "Mitsubishi Mivec 1.5L",
  typeOfOil: "Gasolina",
  colors: [
    {
      name: "Blanco",
      code: "rgba(255, 255, 255, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingSuvM4+1", alt: "Vista frontal Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingSuvM4+2", alt: "Vista derecha Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingSuvM4+3", alt: "Vista izquierda Blanca"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingSuvM4+4", alt: "Vista trasera Blanca" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Blanco+ForthingSuvM4+5", alt: "Vista interio Blanca" },
      ]
    },
    {
      name: "Negro",
      code: "rgba(0, 0, 0, 1)",
      images: [
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingSuvM4+1", alt: "Vista frontal   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingSuvM4+2", alt: "Vista derecha   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingSuvM4+3", alt: "Vista izquierda Negro"},
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingSuvM4+4", alt: "Vista trasera   Negro" },
        { url: "https://placehold.co/800x600/000000/FFFFFF?text=Negro+ForthingSuvM4+5", alt: "Vista interio   Negro" },
      ]
    },
  ],
  features:[    
    "Incluye placa",
  ]
});