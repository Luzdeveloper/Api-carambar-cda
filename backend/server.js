const express = require('express');
const app = express();
const sequelize = require("./models")
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const port = 3000;

//midlleware

app.use(express.json());

// Configuration de Swagger

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Carambar Jokes API",
      version: "1.0.0",
      description:"API pour les blagues de Carambar",
    },
  },
  apis: ["./routes/jokes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Importer les routes 

const jokesRoutes = require('./routes/jokes');
app.use('/jokes', jokesRoutes);

//Synchro de la base de données

sequelize
  .sync()
  .then(() => {
    console.log("Base de donnée connectée!");
    app.listen(port, () => console.log("Serveur démarré sur le port 3000"));
  })
  .catch((err) => console.log("Erreur de connexion à la base de données :", err));