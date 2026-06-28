import * as service from "../services/homestay.service.js";

export const getAll = (req, res) => {
  res.status(200).json(service.getAllHomestays());
};

export const getOne = (req, res) => {
  const homestay = service.getHomestayById(req.params.id);

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  res.status(200).json(homestay);
};

export const search = (req, res) => {
  const result = service.searchHomestays(req.query.q || "");

  res.status(200).json(result);
};

export const create = (req, res) => {
  const homestay = service.createHomestay(req.body);

  res.status(201).json(homestay);
};

export const update = (req, res) => {
  const homestay = service.updateHomestay(
    req.params.id,
    req.body
  );

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  res.status(200).json(homestay);
};

export const remove = (req, res) => {
  const deleted = service.deleteHomestay(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  res.status(204).send();
};