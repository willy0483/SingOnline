import { mainContainer } from "../../homePage/welcomeToSing/welcomeToSingView.js";
import { getArtists } from "../../artists/getArtists/getArtists.js";
import { searchItem } from "../searchSongs/searchSongsController.js";

export function buildSongsView(songs) {
  const filteredSongs = songs.slice(0, 5);

  const songsMainContainer = document.createElement("section");
  songsMainContainer.classList.add("songs-main-container");

  const songsContainer = document.createElement("div");
  songsContainer.classList.add("songs-container");
  filteredSongs.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("song-item");
    songElement.innerHTML = `
        <div class="song-info">
          <p>${song.title} - ${song.artist_id.name}</p>
          </div>
      `;
    songsContainer.appendChild(songElement);

    songElement.addEventListener("click", () => {
      // console.log(`Song ID: ${song.id}`);
      getArtists(song.artist_id.id);
    });
  });

  mainContainer.innerHTML = "";

  const songsLength = document.createElement("div");
  songsLength.classList.add("songs-length");
  songsLength.innerHTML = `<p>Fandt <span>${songs.length}</span> resultater</p>`;

  const inputContainer = document.createElement("section");
  inputContainer.classList.add("input-container");

  const image = document.createElement("img");
  image.src = "assets/images/Svg/svgSearchIcon.svg";
  const input = document.createElement("input");
  input.placeholder = "Type Keyword...";

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      searchItem(input.value);
    }
  });

  inputContainer.appendChild(image);
  inputContainer.appendChild(input);

  const songsDescription = document.createElement("article");
  songsDescription.classList.add("songs-description");

  songsDescription.innerHTML = `
  <header><h2>Songs</h2></header>
    <p>Her kan du søge blandt tusindvis af sange og kunstnere. Indtast titlen på en sang eller navnet på en kunstner, og få øjeblikkelig adgang til sangtekster og akkorder. Uanset om du vil lære en ny melodi på guitar, eller blot synge med, har vi det hele!</p>
  <p><span>Søg nu og kom i gang med at spille eller synge dine yndlingssange!</span></p>
    `;

  songsMainContainer.appendChild(songsDescription);
  songsMainContainer.appendChild(inputContainer);
  songsMainContainer.appendChild(songsLength);
  songsMainContainer.appendChild(songsContainer);
  mainContainer.appendChild(songsMainContainer);
}
