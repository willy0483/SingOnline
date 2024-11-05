import { songmodel } from "../../songModel.js/song.model.js";

const song = new songmodel();

export async function getTenSongs() {
  const songs = await song.list();

  // slice out ten songs from the list
  const tenSongs = songs.slice(0, 10);
  // console.log(tenSongs);
  return tenSongs;
}
