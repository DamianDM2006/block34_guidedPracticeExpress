import express from "express";
const app = express();
export default app;

import playlist from "#db/playlist";

app.get("/", (req, res) => {
  res.send("You've reached the Playlist API!");
});

app.get("/playlist", (req, res) => {
  res.send(playlist);
});

app.get("/playlist/:index", (req, res) => {
  const { index } = req.params;
  const song = playlist[index];

  if (!song)
    return res.status(404).send("That song does not exist in the playlist.");

  res.send(song);
});