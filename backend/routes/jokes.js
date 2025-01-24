const express = require("express");
const router = express.Router();
const Joke = require("../models/Joke");

/**
 * @swagger
 * name: Blagues
 * description: API pour les blagues de Carambar
 */

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Texte de la blague
 *                 example: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?"
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 text:
 *                   type: string
 *       400:
 *         description: Erreur lors de l'ajout de la blague.
 */

// Ajouter une blague
router.post("/", async (req, res) => {
  try {
    const joke = await Joke.create({ text: req.body.text });
    res.status(201).json(joke);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Récupérer toutes les blagues

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Les blagues ont été récupérées
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   text:
 *                     type: string
 */

router.get("/", async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (err) {
    res.status(500).json({ error: "Impossible de récupérer les blagues" });
  }
});

// Récuperer une blague par son id

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Récupérer une blague par son id
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: id de la blague à récupérer
 *     responses:
 *       200:
 *         description: La blague a été récupérée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 text:
 *                   type: string
 *       404:
 *         description: La blague n'a pas été trouvée
 */

router.get("/:id", async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: "Blague non trouvée" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Récuperer une blague aléatoire

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Blague aléatoire.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 text:
 *                   type: string
 */

router.get("/random", async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    const randomJoke = Math.floor(Math.random() * jokes.length);
    res.status(200).json(jokes[randomJoke]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;

