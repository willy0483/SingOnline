import { mainContainer } from "../../homePage/welcomeToSing/welcomeToSingView.js";

// Function to build the login view
export async function buildLoginView() {
  mainContainer.innerHTML = "";

  const loginContainer = document.createElement("section");
  loginContainer.classList.add("loginContainer");

  mainContainer.appendChild(loginContainer);

  const loginForm = document.createElement("div");
  const header = document.createElement("header");
  header.innerHTML = "<h2>LOGIN</h2>";

  loginContainer.appendChild(loginForm);

  loginForm.appendChild(header);

  const article = document.createElement("article");
  article.innerHTML = `<p>Når du logger ind, kan du redigere eksisterende sange og oprette nye sange. Dette giver dig mulighed for at tilpasse indholdet og dele dine kreative værker med andre</p>`;
  loginForm.appendChild(article);

  const userNameContainer = document.createElement("div");
  userNameContainer.classList.add("userName");

  const userName = document.createElement("label");
  userName.innerHTML = "Brugernavn:";

  const userNameInput = document.createElement("input");

  userNameContainer.appendChild(userName);
  userNameContainer.appendChild(userNameInput);

  const userPasswordContainer = document.createElement("div");
  userPasswordContainer.classList.add("userPassword");

  const userPassword = document.createElement("label");
  userPassword.innerHTML = "Password:";

  const userPasswordInput = document.createElement("input");

  userPasswordContainer.appendChild(userPassword);
  userPasswordContainer.appendChild(userPasswordInput);

  loginForm.appendChild(userNameContainer);
  loginForm.appendChild(userPasswordContainer);

  const loginButton = document.createElement("button");
  loginButton.innerHTML = "Login";

  const passwordNewuserContainer = document.createElement("div");
  passwordNewuserContainer.classList.add("passwordNewuser");

  const newPassword = document.createElement("a");
  newPassword.innerHTML = "Glemt password?";
  newPassword.classList.add("newPassword");
  newPassword.href = "#";

  const createNewUser = document.createElement("a");
  createNewUser.classList.add("createNewUser");
  createNewUser.innerHTML = "Opret bruger";
  createNewUser.href = "#";

  loginForm.appendChild(loginButton);
  passwordNewuserContainer.appendChild(newPassword);
  passwordNewuserContainer.appendChild(createNewUser);
  loginForm.appendChild(passwordNewuserContainer);

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Login Dont Work");
  });
}
