import SongsService from "../services/song.service.js";

export default class SongsController {
  static async getAllSongs(req, res) {
    try {
      const songs = await SongsService.getAllSongs();
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getSongByName(req, res) {
    try {
      const songName = req.query.name;
      const song = await SongsService.getSongByName(songName);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getSongsByGenre(req, res) {
    try {
      const songGenre = req.query.genre;
      const song = await SongsService.getSongsByGenre(songGenre);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getSongByArtist(req, res) {
    try {
      const songsByArtist = req.query.artist;
      const songs = await SongsService.getSongByArtist(songsByArtist);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addNewSong(req, res) {
    try {
      const newSong = await SongsService.addNewSong(req.body);
      res.status(200).send(newSong);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
