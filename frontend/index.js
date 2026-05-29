const headerCurrentUserLabelContainer = document.getElementById("headerCurrentUserLabelContainer");
const loginPageWrapper = document.getElementById("loginPageWrapper");
const registrationPageWrapper = document.getElementById("registrationPageWrapper");
const homePageWrapper = document.getElementById("homePageWrapper");
const settingsPageWrapper = document.getElementById("settingsPageWrapper");

const goToRegisterBtn = document.getElementById("goToRegisterBtn");
const goToLoginBtn = document.getElementById("goToLoginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const titlebtn = document.getElementById("titlebtn");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const newUsername = document.getElementById("newUsername");
const newEmail = document.getElementById("newEmail");
const newPassword = document.getElementById("newPassword");
const newPaswordVerify = document.getElementById('newPaswordVerify');

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const openSettingsBtn = document.getElementById("openSettingsBtn");

const settingBackBtn = document.getElementById("settingBackBtn");

const loginPageMessageBox = document.getElementById("loginPageMessageBox");
const registerPageMessageBox = document.getElementById("registerPageMessageBox");

goToRegisterBtn.addEventListener("click", () => {
    setCurrentPage("registerPage");
    showCurrentPage()
});

goToLoginBtn.addEventListener("click", () => {
    setCurrentPage("loginPage");
    showCurrentPage();
});

logoutBtn.addEventListener("click", async () => {
    await logout();
    location.reload();
})

openSettingsBtn.addEventListener("click", () => {
    setCurrentPage("settingsPage");
    showCurrentPage();
})

settingBackBtn.addEventListener("click", () => {
    setCurrentPage("homePage");
    showCurrentPage();
})

titlebtn.addEventListener("click", () => {
    location.reload();
})

loginButton.addEventListener("click", async () => {
    if (emailInput.value === "" || passwordInput.value === "") {
        showMessageBox(loginPageMessageBox, "Make sure all fields are complete");
    } else {
        const res = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            })
        })
        const data = await res.json()

        if (res.ok) {
            setCurrentPage("homePage");
            showCurrentPage();
            await showCurrentUser();
        } else {
            showMessageBox(loginPageMessageBox, "Invalid credentials")
        }
    }
});

registerButton.addEventListener("click", async () => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (newUsername.value === "" || newPassword.value === "" || newPaswordVerify.value === "" || newEmail.value === "") {
        showMessageBox(registerPageMessageBox, "Make sure all fields are complete");
    } else if (newPassword.value !== newPaswordVerify.value) {
        showMessageBox(registerPageMessageBox, "Passwords must match");
    } else if (regex.test(newEmail.value) === false) {
        showMessageBox(registerPageMessageBox, "Enter a valid email address");
    } else {
        const payload = {
            username: newUsername.value,
            email: newEmail.value,
            password: newPassword.value
        }
        
        const res = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(payload)
        })
        const data = await res.json()

        if (res.ok) {
            showMessageBox(registerPageMessageBox, "Account created! Going Home.")
            setCurrentPage("homePage");
            showCurrentPage();
            await showCurrentUser();
        } else {
            showMessageBox(registerPageMessageBox, data.error || "Something went wrong")
        }
    }
})

async function logout() {
    await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include'
    })
    setCurrentPage('loginPage');
}

async function getCurrentuser() {
    const res = await fetch('http://localhost:3000/auth/me', {
        credentials: 'include'
    })

    if (res.ok) {
        const data = await res.json();
        const username = data.username
        return username
    }
}

async function showCurrentUser() {
    const user = await getCurrentuser();
    let currentUserBtn = document.createElement("button");
    currentUserBtn.textContent = user;
    currentUserBtn.classList.add("Header-Label-Btn");
    headerCurrentUserLabelContainer.appendChild(currentUserBtn);
}

function showMessageBox(messageBoxEl, message) {
    messageBoxEl.classList.remove("Hide");
    let messageEl = document.createElement("p");
    messageEl.textContent = message;
    messageBoxEl.appendChild(messageEl);

    setTimeout(() => {
        messageBoxEl.innerHTML = "";
        messageBoxEl.classList.add("Hide");
    }, 2500)
}

function hideAllPages() {
    const Pages = [loginPageWrapper, registrationPageWrapper, homePageWrapper, settingsPageWrapper];
    Pages.forEach(page => {
        page.classList.add("Hide");
    })
}

//used to set the current page the user is on
function setCurrentPage(currentPage) {
    const setPage = localStorage.setItem("currentPage", currentPage);
    return setPage;
}

//used to get the current page the user is on
function getCurrentPage() {
    const getPage = localStorage.getItem("currentPage");
    return getPage
}

//shows the surrent page the user is on by using getCurrentPage() then checking the returned value
function showCurrentPage() {
    const currentPage = getCurrentPage()

    hideAllPages();

    if (currentPage === "loginPage") {
        loginPageWrapper.classList.remove("Hide");
    } else if (currentPage === "registerPage") {
        registrationPageWrapper.classList.remove("Hide");
    } else if (currentPage === "homePage") {
        homePageWrapper.classList.remove("Hide");
    } else if (currentPage === "settingsPage") {
        settingsPageWrapper.classList.remove("Hide");
    } else {
        loginPageWrapper.classList.remove("Hide");
    }
}

async function init() {
    showCurrentPage();
    await showCurrentUser();
}

init();