import { getTenSongs } from "../getTenSongs/getTenSongs.js";
import { toSing } from "../../homePage/welcomeToSing/welcomeToSingView.js";
import { getArtists } from "../../artists/getArtists/getArtists.js";

export async function buildTenSongs() {
  const songs = await getTenSongs();
  console.log(songs);

  const tenSongsContainer = document.createElement("section");
  tenSongsContainer.classList.add("tenSongsContainer");

  songs.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.innerHTML = `
      <p>${song.title} - ${song.artist_id.name}</p>
    `;
    songElement.addEventListener("click", () => {
      // console.log(`Song ID: ${song.id}`);
      getArtists(song.artist_id.id);
    });
    tenSongsContainer.appendChild(songElement);
  });

  toSing.appendChild(tenSongsContainer);
}
