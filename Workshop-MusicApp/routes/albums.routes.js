import { Router } from "express";
import AlbumsController from "../controllers/albums.controller.js";

const router = Router();

router.get("/", AlbumsController.getAllAlbums);
router.get("/albumSongs", AlbumsController.getAllSongsByAlbum);
router.post("/", AlbumsController.addNewAlbum);

export default router;
