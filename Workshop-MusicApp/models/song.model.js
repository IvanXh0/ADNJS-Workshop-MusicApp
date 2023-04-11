import { Schema, model } from "mongoose";

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  genre: {
    type: String,
    required: true,
    minLength: 3,
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album",
  },
});

const Song = model("Song", songSchema);

export default Song;
