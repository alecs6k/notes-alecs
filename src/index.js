const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// configurar cabeceras http
app.use((req, res, next) => {
    res.header("*");
    res.header("GET", "PUT", "POST", "DELETE");
    res.header("Accept", "application/json");
    res.header("Content-Type", "application/json");
    res.header('Access-Control-Allow-Origin', '*');
 
    next();
});


app.use(taskRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log("Server on port", PORT);
});

