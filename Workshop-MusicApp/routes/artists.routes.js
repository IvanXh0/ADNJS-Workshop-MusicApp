import { Router } from "express";
import ArtistsController from "../controllers/artists.controller.js";

const router = Router();

router.get("/", ArtistsController.getAllArtists);
router.get("/artistName", ArtistsController.getArtistByName);
router.post("/", ArtistsController.addNewArtist);

export default router;
