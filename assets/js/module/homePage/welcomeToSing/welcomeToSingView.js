import { myApp } from "../../../main.js";
import { buildTenSongs } from "../../tenSongs/tenSongsView/tenSongsView.js";

export const toSing = document.createElement("section");
toSing.classList.add("WelcomeToSing");

export function buildWelcomeToSing() {
  toSing.innerHTML = `
  <section class="WelcomeToSingHeader">
    <header><h1>Velkommen til SingOnline</h1></header>
    <article>
      <p>Søg i vores store bibliotek af sange og kunstnere, og find præcis det, du leder efter. Uanset om du er nybegynder på guitaren, erfaren musiker eller bare vil synge med på dine yndlingssange, har vi alt, hvad du behøver. Klar til at dykke ned i musikkens verden?</p>
      <footer><span>Start din musikalske rejse nu</span> – søg efter din favoritkunstner eller sang!</footer>
    </article>
    </section>
  `;

  buildTenSongs();
  myApp.appendChild(toSing);
}
