import { mainContainer } from "../../homePage/welcomeToSing/welcomeToSingView.js";

export async function buildArtistsView(artists) {
  console.log(artists);
  mainContainer.innerHTML = "";
  const artistsContainer = document.createElement("div");
  artistsContainer.classList.add("artistsContainer");
  artistsContainer.innerHTML = `
  <div class="artist">
    <header><h2>Artists: ${artists[0].name}</h2></header>
  <figure>
  <img src="${artists[0].image}" alt="image of ${artists[0].name}">
  <figcaption><article><p>${artists[0].description}</p></article></figcaption>
  </figure>
  </div>
    <div class="albumContainer">
    <h3>Albums</h3>
    <div class="album">
      <figure>
  <img src="${artists[0].albums_id.image}" alt="image of ${artists[0].name}">
  <figcaption><article>
  <p><span>${artists[0].albums_id.title}<span></p>
  <p>${artists[0].albums_id.description}</p>
  </article></figcaption>
  </figure>
    </div>
    </div>
  `;

  mainContainer.appendChild(artistsContainer);
}
