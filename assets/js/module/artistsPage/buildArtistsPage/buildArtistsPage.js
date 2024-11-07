import { mainContainer } from "../../homePage/welcomeToSing/welcomeToSingView.js";
import { getArtists } from "../../artists/getArtists/getArtists.js";

// Function to build the artists page
export function buildArtistsPage(artist) {
  mainContainer.innerHTML = "";

  const artistsPageContainer = document.createElement("section");
  artistsPageContainer.classList.add("artistsPageContainer");
  artistsPageContainer.innerHTML = `
  <section class="artist-info">
<header><h2>ARTISTS</h2></header>
  <article>
  <p>Velkommen til vores side for kunstnere! Her kan du dykke ned i en verden af musik og finde information om dine yndlingskunstnere. Uanset om du leder efter den nyeste popstjerne, en legendarisk rockmusiker eller en upcoming indie-artist, har vi samlet et omfattende bibliotek til dig.</p>
  <p><span> Udforsk nu og opdag nye musikalske talenter! </span></p>
  </article></section>
  `;

  artist.forEach((artistElement) => {
    const artistItem = document.createElement("div");
    artistItem.classList.add("artist-item");
    const artistInfo = document.createElement("div");
    artistInfo.classList.add("artist-info");

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = artistElement.image;
    img.alt = artistElement.name;

    const figcaption = document.createElement("figcaption");

    const h3 = document.createElement("h3");
    h3.textContent = artistElement.name;

    const p = document.createElement("p");
    p.textContent = artistElement.description;

    const footer = document.createElement("footer");

    const a = document.createElement("a");
    a.href = "#";
    a.innerText = "Gå til kunstner";

    footer.appendChild(a);
    figcaption.appendChild(h3);
    figcaption.appendChild(p);
    figcaption.appendChild(footer);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    artistInfo.appendChild(figure);
    artistItem.appendChild(artistInfo);
    artistsPageContainer.appendChild(artistItem);

    a.addEventListener("click", (e) => {
      getArtists(artistElement.id);
    });
  });
  mainContainer.appendChild(artistsPageContainer);
}
