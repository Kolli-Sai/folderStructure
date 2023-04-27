const express = require("express");
const router = express.Router();

const {
  createTask,
  deleteTask,
  updateTask,
  getAllTasks,
  getTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

router.get("/:id", getTask);

module.exports = router;
