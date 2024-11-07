import { myApp } from "../../main.js";

// Function to build a footer
export function buildFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("mainFooter");
  footer.innerHTML = `
  <section>
  <p>© 2024 Sing Online, Inc. All Rights Reserved.</p>
  <p>SingOnline</p>
  <p>Terms • Privacy • Cookies • Copyright • Acknowledgments</p>
  </section>
    `;
  myApp.appendChild(footer);
}
