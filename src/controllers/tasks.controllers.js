const pool = require("../db");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task ORDER BY id");
    res.json(allTasks.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Tarea no econtrada",
      });

    console.log(result);

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
      res.json(result.rows[0]);
    console.log(result);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Tarea no encontrada",
    });
  res.sendStatus(204);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  if (result.rows.length === 0)
    return res.status(404).json({
      message: "TArea no encontrada",
    });

  return res.json(result.rows[0]);
};

const inicio = async (req, res) => {
  res.send("HOLA MUNDO");
}

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
  inicio,
};
