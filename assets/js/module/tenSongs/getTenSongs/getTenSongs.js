import { songmodel } from "../../songModel.js/song.model.js";

const song = new songmodel();

// Function to get the first 10 songs from the database
export async function getTenSongs() {
  const songs = await song.list();

  // slice out ten songs from the list
  const tenSongs = songs.slice(0, 10);
  // console.log(tenSongs);
  return tenSongs;
}
