import Song from "../models/song.model.js";

export default class SongsService {
  static async getAllSongs() {
    let songs = await Song.find({}).populate("artist");

    return songs;
  }

  static async getSongByName(name) {
    const song = await Song.find({ name: name });
    return song;
  }

  static async getSongsByGenre(genre) {
    const song = await Song.find({ genre: genre });

    return song;
  }

  static async getSongByArtist(artist) {
    const songs = await Song.find({ artist: artist });

    return songs;
  }

  static async addNewSong(body) {
    const newSong = new Song(body);
    const response = newSong.save();

    return response;
  }
}
