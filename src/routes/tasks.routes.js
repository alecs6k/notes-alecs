const { Router } = require("express");
const { getAllTasks,
        createTask,
        updateTask,
        deleteTask,
        getTask,
        inicio
} = require('../controllers/tasks.controllers');

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

router.get("/", inicio);


module.exports = router;
