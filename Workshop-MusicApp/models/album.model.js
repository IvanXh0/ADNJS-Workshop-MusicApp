import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
});

const Album = model("Album", albumSchema);

export default Album;
