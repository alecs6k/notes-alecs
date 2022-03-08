const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log("Server on port", PORT);
});

