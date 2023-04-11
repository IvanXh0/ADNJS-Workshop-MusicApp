import { Router } from "express";
import songsRoutes from "./routes/songs.routes.js";
import artistsRouter from "./routes/artists.routes.js";
import albumsRouter from "./routes/albums.routes.js";

const router = Router();

router.use("/songs", songsRoutes);
router.use("/artists", artistsRouter);
router.use("/albums", albumsRouter);

export default router;
