import type { HydratedDocument } from "mongoose";
import { Schema, model, type InferSchemaType } from "mongoose";

interface IImage {
  url: string;
  alt: string;
}

// Subdocumento para opciones de color
interface IColorOption {
  name: string;
  code: string;
  images: IImage[];
  _id: boolean;
}

const ColorOptionSchema = new Schema<IColorOption>({
  name: { type: String, required: true },
  code: { type: String, required: true },
  images: [{ url: String, alt: String, _id: false }],
  _id: false,
});

const VehicleSchema = new Schema({
  brand: { 
    type: String, 
    required: true, 
    enum: ["JMC", "Isuzu", "Forthing", "Suzuki", "JIM"],
  },
  vehicleModel:        { type: String, required: true },
  year:         { type: Number, required: true },
  mileage:      { type: Number, required: true, min: 0 },
  price:        { type: Number, required: true, min: 0 },
  transmission: { type: String, required: true },
  sold:         { type: Boolean, default: false },
  used:         { type: Boolean, default: false },
  horsePower:   { type: Number },
  type:         { type: String },
  motor:        { type: String },
  typeOfOil:    { type: String },

  // Galería organizada por color
  colors: [ColorOptionSchema],
  features: { type: [String], default: [] },
  description: { type: String }
}, { timestamps: true });

export type VehicleType = InferSchemaType<typeof VehicleSchema>;

export type VehicleDocument = HydratedDocument<VehicleType>;


VehicleSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

export const Vehicle = model<VehicleType>("Vehicle", VehicleSchema);