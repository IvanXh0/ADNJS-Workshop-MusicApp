import { Router } from "express";
import SongsController from "../controllers/songs.controller.js";
const router = Router();

router.get("/", SongsController.getAllSongs);
router.get("/songName", SongsController.getSongByName);
router.get("/genre", SongsController.getSongsByGenre);
router.get("/artist", SongsController.getSongByArtist);
router.post("/", SongsController.addNewSong);

export default router;
