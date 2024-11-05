import { myApp } from "../../main.js";
import { buildHomePage } from "../../main.js";
import { getSongs } from "../songs/getSongs.js";

export function buildHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
  <div><img src="assets/images/Svg/logo.svg" alt="logo" id="logo-link"></div
        <nav>
            <ul>
                <li><a id="home-link" href="#">HOME</a></li>
                <li><a id="song-click" href="#">SONGS</a></li>
                <li><a href="#">ARTISTS</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
    `;
  myApp.appendChild(header);

  document.getElementById("home-link").addEventListener("click", (event) => {
    event.preventDefault();
    buildHomePage();
  });
  document.getElementById("logo-link").addEventListener("click", (event) => {
    event.preventDefault();
    buildHomePage();
  });
  document.getElementById("song-click").addEventListener("click", (event) => {
    event.preventDefault();
    getSongs();
  });
}
