//MVC Architecture
//Model - View - Controller
//Model - Represents the data and business logic (iteractions with a database)
//Controller - Handles logic for processing requests and orchestrating flow
//View - is responsible for formatting the output - For this REST api, that will be json.
const PORT = 3000;
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");
const app = express();

const gameRoutes = require("./routes/gamesRoutes");
//const platfomrRoutes = require("./routes/platformRoutes")

app.use("/api/games", gameRoutes);

const platformRoutes = require("./routes/platformsRoutes");
app.use("/api/platforms", platformRoutes);

const screenshotRoutes = require("./routes/screenshotsRoutes");
app.use("/api/screenshots", screenshotRoutes);

const characterRoutes = require("./routes/charactersRoutes");
app.use("/api/characters", characterRoutes);

const genreRoutes = require("./routes/genresRoutes");
app.use("/api/genres", genreRoutes);

const gamemodeRoutes = require("./routes/gamemodesRoutes");
app.use("/api/gamemodes", gamemodeRoutes);

const websitesRoutes = require("./routes/websitesRoutes");
app.use("/api/websites", websitesRoutes);
//app.use("/api/platforms", platformRoutes);

const similarRoutes = require("./routes/similarsRoutes");
app.use("/api/similar", similarRoutes);

const coverRoutes = require("./routes/game_coversRoutes");
app.use("/api/game_covers", coverRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
