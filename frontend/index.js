const headerCurrentUserLabelContainer = document.getElementById("headerCurrentUserLabelContainer");
const loginPageWrapper = document.getElementById("loginPageWrapper");
const registrationPageWrapper = document.getElementById("registrationPageWrapper");
const goToRegisterBtn = document.getElementById("goToRegisterBtn");
const goToLoginBtn = document.getElementById("goToLoginBtn");

let currentUser = "Harry990";

goToRegisterBtn.addEventListener("click", () => {
    loginPageWrapper.classList.add("Hide");
    registrationPageWrapper.classList.remove("Hide");
})

goToLoginBtn.addEventListener("click", () => {
    registrationPageWrapper.classList.add("hide");
    loginPageWrapper.classList.remove("Hide");
})

function showCurrentUser(currentUser) {
    let currentUserBtn = document.createElement("button");
    currentUserBtn.textContent = currentUser;
    currentUserBtn.classList.add("Header-Label-Btn");
    headerCurrentUserLabelContainer.appendChild(currentUserBtn);
}

showCurrentUser(currentUser);