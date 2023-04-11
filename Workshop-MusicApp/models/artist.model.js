import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Artist = model("Artist", artistSchema);

export default Artist;
