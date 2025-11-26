import { Request, Response } from "express";
import { Vehicle } from "../models/Vehicle";
import vehicleSeedData from "../data/vehicles.json";

export const getVehicles = async( req: Request, res: Response ) => {

  const limitRaw = Number(req.query.limit);
  const offsetRaw = Number(req.query.offset);

  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 50) : 9;
  const offset = Number.isFinite(offsetRaw) && offsetRaw >= 0 ? offsetRaw : 0;

  const query: Record<string, any> = {};
  // const sort = { createdAt: -1 }; //TODO: implementar si necesario recientes primero

  try {

    const [total, vehicles, brands, types] = await Promise.all([
      Vehicle.countDocuments(query),
      Vehicle.find(query).skip(offset).limit(limit).lean().select("-__v"),
      Vehicle.distinct("brand"),
      Vehicle.distinct("type"),
    ]);

    const cleanVehicles = vehicles.map(v => {
      return {
        ...v,
        colors: v.colors.map(c => ({
          ...c,
          _id: undefined,
          images: c.images.map(img => ({ url: img.url, alt: img.alt }))
        }))
      };
    });


    return res.json({
      total: total,
      data: cleanVehicles,
      brands: brands,
      types: types,
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al obtener vehículos" });
  };
};


export const getVehicleById = async( req: Request, res: Response ) => {
  
  const { id } = req.params;

  try {
    const vehicle = await Vehicle.findById(id).lean().select("-__v");

    if (!vehicle) {
      return res.status(404).json({ msg: "Vehículo no encontrado" });
    }

    return res.json({vehicle});
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al obtener vehículos" });
  }
}

export const createVehicle = async( req: Request, res: Response ) => {
  const { body } = req;
  try {
    const vehicle = new Vehicle(body);
    await vehicle.save();
    return res.status(201).json(vehicle);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al crear vehículo" });
  }
}

export const SEED = async( req: Request, res: Response ) => {
  try {
    await Vehicle.deleteMany({});
    await Vehicle.insertMany(vehicleSeedData);

    return res.status(201).json({ msg: "SEED EXECUTED" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al sembrar datos" });
  }
}