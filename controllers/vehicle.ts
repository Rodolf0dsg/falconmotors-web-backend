import { Request, Response } from "express";
import { Vehicle } from "../models/Vehicle";
import vehicleSeedData from "../data/data.json";

function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const getVehicles = async( req: Request, res: Response ) => {

  const limitRaw = Number(req.query.limit);
  const pageRaw = Number(req.query.page);

  // const offsetRaw = Number(req.query.offset);

  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 50) : 6;
  // const offset = Number.isFinite(offsetRaw) && offsetRaw >= 0 ? offsetRaw : 0;
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
  const offset = (page - 1) * limit;


  const brand = typeof req.query.brand === "string" && req.query.brand.trim() !== ""
    ? req.query.brand.trim()
    : undefined;

  const type = typeof req.query.type === "string" && req.query.type.trim() !== ""
    ? req.query.type.trim()
    : undefined;

  // const search = typeof req.query.search === "string" && req.query.search.trim() !== ""
  //   ? req.query.search.trim()
  //   : undefined;

  const searchRaw = typeof req.query.search === "string" ? req.query.search.trim() : "";
  const search = searchRaw !== "" ? escapeRegex(searchRaw) : undefined;
  const searchIsNumber = searchRaw !== "" && !isNaN(Number(searchRaw)) ? Number(searchRaw) : undefined;

  const query: Record<string, any> = {};
  if (req.query.brand) {
    query.brand = req.query.brand;
  }
  if (req.query.type) {
    query.type = req.query.type;
  }

  if (search || typeof searchIsNumber === "number") {
    const orClauses: any[] = [];

    if (search) {
      orClauses.push(
        { brand:        { $regex: search, $options: "i" } },
        { vehicleModel: { $regex: search, $options: "i" } },
        { type:         { $regex: search, $options: "i" } },
        { motor:        { $regex: search, $options: "i" } },
        { transmission: { $regex: search, $options: "i" } },
        { features:     { $regex: search, $options: "i" } }
      );
    }

    if (typeof searchIsNumber === "number") {
      orClauses.push({ year: searchIsNumber });
    }

    if (orClauses.length > 0) {
      query.$or = orClauses;
    }
  }

//  if (search) {
//     const regex = new RegExp(search, "i"); // insensible a mayúsculas/minúsculas

//     query.$or = [
//       { brand: regex },
//       { vehicleModel: regex },
//       { type: regex },
//       { year: !isNaN(Number(search)) ? Number(search) : undefined }
//     ].filter(Boolean);
//   }

  // const sort = { createdAt: -1 }; //TODO: implementar si necesario recientes primero

  try {
    const [total, vehicles, brands, types] = await Promise.all([
      Vehicle.countDocuments(query),
      Vehicle.find(query).skip(offset).limit(limit).lean().select("-__v"),
      Vehicle.distinct("brand"),
      Vehicle.distinct("type"),
    ]);

    return res.json({
      total: total,
      data: vehicles,
      brands: brands,
      types: types,
      pages: Math.ceil(total / limit)
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