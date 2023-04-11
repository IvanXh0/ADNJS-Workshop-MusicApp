import ArtistsService from "../services/artist.service.js";

export default class ArtistsController {
  static async getAllArtists(req, res) {
    try {
      const artists = await ArtistsService.getAllArtists();
      res.status(200).send(artists);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getArtistByName(req, res) {
    try {
      const artistName = req.query.name;
      const artist = await ArtistsService.getArtistByName(artistName);
      res.status(200).send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewArtist(req, res) {
    try {
      const newArtist = await ArtistsService.addNewArtist(req.body);
      res.status(200).send(newArtist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
