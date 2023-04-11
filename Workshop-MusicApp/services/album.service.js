import { response } from "express";
import Album from "../models/album.model.js";

export default class AlbumsService {
  static async getAllAlbums() {
    const albums = await Album.find({}).populate("artist", "songs");
    return albums;
  }
  static async addNewAlbum(body) {
    const newAlbum = new Album(body);
    const response = newAlbum.save();

    return response;
  }

  static async getAllSongsByAlbum(album) {
    const songsByAlbum = await Album.find({ album: album }).populate("songs");

    return songsByAlbum;
  }
}
