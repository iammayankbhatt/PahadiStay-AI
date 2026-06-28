import express from "express";

import * as controller from "../controllers/homestay.controller.js";

const router = express.Router();

router.get("/", controller.getAll);

router.get("/search", controller.search);

router.get("/:id", controller.getOne);

router.post("/", controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.remove);

export default router;