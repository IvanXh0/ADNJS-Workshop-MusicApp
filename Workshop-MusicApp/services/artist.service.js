import Artist from "../models/artist.model.js";

export default class ArtistsService {
  static async getAllArtists() {
    let artists = await Artist.find({}).populate("songs");

    // if (query?.artistName) {
    //   const queryArtistName = query.artistName.toLowerCase();

    //   artists = artists.filter((a) =>
    //     a.name.toLowerCase().includes(queryArtistName)
    //   );
    // }

    return artists;
  }

  static async getArtistByName(name) {
    let artist = await Artist.find({ name: name });

    return artist;
  }
  static async addNewArtist(body) {
    const newArtist = new Artist(body);
    const response = newArtist.save();

    return response;
  }
}
