export const myApp = document.getElementById("app");

// build a main container
import { mainContainer } from "./module/homePage/welcomeToSing/welcomeToSingView.js";

// build a header with nav
import { buildHeader } from "./module/buildHeader/buildHeaderView.js";
// buildHeader();

// build a welcome section to homepage
import { buildWelcomeToSing } from "./module/homePage/welcomeToSing/welcomeToSingView.js";
// buildWelcomeToSing();

// build a footer a the buttom
import { buildFooter } from "./module/buildFooter/buildFooterView.js";
// buildFooter();

// build a home page
export function buildHomePage() {
  mainContainer.innerHTML = "";
  myApp.innerHTML = "";
  buildHeader();
  buildWelcomeToSing();
  buildFooter();
  //   console.log("Home Page");
}

buildHomePage();
