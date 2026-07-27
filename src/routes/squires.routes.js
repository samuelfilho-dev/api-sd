const express = require("express");
const router = express.Router();
const squireService = require("../services/squire.service");

router.get("/", async (req, res) => {
  const squires = await squireService.getAllSquires();
  res.json(squires);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const squire = await squireService.getSquireById(id); //

  if (!squire) {
    return res.status(404).json({ message: "Escudeiro Nao Encontrado" });
  }
  res.json(squire);
});

router.post("/", async (req, res) => {
  const payload = req.body;
  const newSquire = await squireService.createSquire(payload);
  res.status(201).json(newSquire);
});

router.put("/:id", async (req, res) => {
  const updatedSquire = await squireService.updateSquire(
    req.params.id,
    req.body,
  );

  if (!updatedSquire) {
    return res.status(404).json({ message: "Escudeiro Nao Encontrado" });
  }

  res.json(updatedSquire);
});

router.delete("/:id", async (req, res) => {
  const deletedSquire = await squireService.deleteSquire(req.params.id);

  if (!deletedSquire) {
    return res.status(404).json({ message: "Escudeiro Nao Encontrado" });
  }

  res.status(204).send();
});

module.exports = router;
