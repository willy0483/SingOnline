export const myApp = document.getElementById("app");

// build a header with nav
import { buildHeader } from "./module/buildHeader/buildHeaderView.js";
// buildHeader();

// build a welcome section to homepage
import { buildWelcomeToSing } from "./module/homePage/welcomeToSing/welcomeToSingView.js";
// buildWelcomeToSing();

// build a footer a the buttom
import { buildFooter } from "./module/buildFooter/buildFooterView.js";
// buildFooter();

export function buildHomePage() {
  myApp.innerHTML = "";
  buildHeader();
  buildWelcomeToSing();
  buildFooter();
  //   console.log("Home Page");
}

buildHomePage();
