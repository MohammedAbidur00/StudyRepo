const headerCurrentUserLabelContainer = document.getElementById("headerCurrentUserLabelContainer");

let currentUser = "Harry990";

function showCurrentUser(currentUser) {
    let currentUserBtn = document.createElement("button");
    currentUserBtn.textContent = `USER: ${currentUser}`;
    currentUserBtn.classList.add("Header-Label-Btn");
    headerCurrentUserLabelContainer.appendChild(currentUserBtn);
}

showCurrentUser(currentUser);