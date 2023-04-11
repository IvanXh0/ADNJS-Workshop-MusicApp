import Album from "../models/album.model.js";
import AlbumsService from "../services/album.service.js";

export default class AlbumsController {
  static async getAllAlbums(req, res) {
    try {
      const albums = await AlbumsService.getAllAlbums();
      res.status(200).send(albums);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewAlbum(req, res) {
    try {
      const newAlbum = await AlbumsService.addNewAlbum(req.body);
      res.status(200).send(newAlbum);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getAllSongsByAlbum(req, res) {
    try {
      const album = req.query.name;
      const songs = await AlbumsService.getAllSongsByAlbum(album);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
