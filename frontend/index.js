const headerCurrentUserLabelContainer = document.getElementById("headerCurrentUserLabelContainer");
const loginPageWrapper = document.getElementById("loginPageWrapper");
const registrationPageWrapper = document.getElementById("registrationPageWrapper");
const homePageWrapper = document.getElementById("homePageWrapper");
const settingsPageWrapper = document.getElementById("settingsPageWrapper");
const studyReposPageWrapper = document.getElementById("studyReposPageWrapper");
const createStudyRepoPageWrapper = document.getElementById("createStudyRepoPageWrapper");

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
const openStudyReposBtn = document.getElementById("openStudyReposBtn");
const openCreateStudyRepoBtn = document.getElementById("openCreateStudyRepoBtn");

const settingBackBtn = document.getElementById("settingBackBtn");
const studyReposBackBtn = document.getElementById("studyReposBackBtn");
const createStudyRepoBackBtn = document.getElementById("createStudyRepoBackBtn");

const loginPageMessageBox = document.getElementById("loginPageMessageBox");
const registerPageMessageBox = document.getElementById("registerPageMessageBox");

const createRepoNameInput = document.getElementById("createRepoNameInput");
const createRepoDescriptionInput = document.getElementById("createRepoDescriptionInput");
const saveRepoBtn = document.getElementById("saveRepoBtn");
const cancelRepoBtn = document.getElementById("cancelRepoBtn");
const createRepoPageMessageBox = document.getElementById("createRepoPageMessageBox");

const studyRepoCardsContainer = document.getElementById("studyRepoCardsContainer");

const placeholderMessage = document.getElementById("placeholderMessage");
const placeholderMessageCon = document.getElementById("placeholderMessageCon");

class createStudyRepoCards {
    constructor(repoName, repoDescription) {
        this.repoName = repoName;
        this.repoDescription = repoDescription;

        this.repoCard = document.createElement("div");
        this.repoCardLabelCon = document.createElement("div");
        this.repoCardTitleCon = document.createElement("div");
        this.repoCardDescriptionCon = document.createElement("div");

        this.repoCardLabel = document.createElement("p");
        this.repoCardTitle = document.createElement("h1");
        this.repoCardDescriptionLabel = document.createElement("p");
        this.repoCardDescription = document.createElement("p");

        this.repoCardLabel.textContent = "STUDYREPO";
        this.repoCardTitle.textContent = this.repoName;

        if (this.repoDescription === "") {
            this.repoCardDescription.textContent = "This StudyRepo does not have a description";
        } else {
            this.repoCardDescription.textContent = this.repoDescription
        }

        this.repoCard.classList.add("Study-Repo-Card");
        this.repoCardLabelCon.classList.add("Sumary-Container-Label");
        this.repoCardTitleCon.classList.add("Study-Repo-Card-Name-Container");
        this.repoCardDescriptionCon.classList.add("Study-Repo-Card-Des-Container");

        this.repoCardLabelCon.appendChild(this.repoCardLabel);
        this.repoCardTitleCon.appendChild(this.repoCardTitle);
        this.repoCardDescriptionCon.appendChild(this.repoCardDescription);

        this.repoCard.appendChild(this.repoCardLabelCon);
        this.repoCard.appendChild(this.repoCardTitleCon);
        this.repoCard.appendChild(this.repoCardDescriptionCon);

        studyRepoCardsContainer.appendChild(this.repoCard);
    }
}

goToRegisterBtn.addEventListener("click", async () => {
    setCurrentPage("registerPage");
    await showCurrentPage()
});

goToLoginBtn.addEventListener("click", async () => {
    setCurrentPage("loginPage");
    await showCurrentPage();
});

logoutBtn.addEventListener("click", async () => {
    await logout();
    location.reload();
})

openSettingsBtn.addEventListener("click", async () => {
    setCurrentPage("settingsPage");
    await showCurrentPage();
})

openStudyReposBtn.addEventListener("click", async () => {
    setCurrentPage("studyReposPage");
    await showCurrentPage();
})

openCreateStudyRepoBtn.addEventListener("click", async () => {
    setCurrentPage("createStudyRepoPage");
    await showCurrentPage();
})

settingBackBtn.addEventListener("click", async () => {
    setCurrentPage("homePage");
    await showCurrentPage();
})

studyReposBackBtn.addEventListener("click", async () => {
    setCurrentPage("homePage");
    await showCurrentPage();
})

createStudyRepoBackBtn.addEventListener("click", async () => {
    setCurrentPage("studyReposPage");
    await showCurrentPage();
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
            await showCurrentPage();
            await showCurrentUser();
        } else {
            showMessageBox(loginPageMessageBox, data.error || "Invalid credentials");
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
            await showCurrentPage();
            await showCurrentUser();
        } else {
            showMessageBox(registerPageMessageBox, data.error || "Something went wrong")
        }
    }
})

saveRepoBtn.addEventListener("click", async () => {
    if (createRepoNameInput.value === "") {
        showMessageBox(createRepoPageMessageBox, "you must enter a studyrepo name");
    } else {
        await createStudyRepo(createRepoNameInput, createRepoDescriptionInput);
    }
})

async function createStudyRepo(name, description) {
    const payload = {
        reponame: name.value,
        repodescription: description.value
    }

    const res = await fetch('http://localhost:3000/repos/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        showMessageBox(createRepoPageMessageBox, "created study repo successfully, going back to studyrepos...");
        name.value = "";
        description.value = "";
        setCurrentPage('studyReposPage')
        setTimeout(async () => await showCurrentPage(), 1500);
    } else {
        showMessageBox(createRepoPageMessageBox, data.error || "Something went wrong")
    }
}

async function getStudyRepos() {
    const res = await fetch('http://localhost:3000/repos/', {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        console.log(data)
        studyRepoCardsContainer.innerHTML = "";
        data.forEach(repo => {
            new createStudyRepoCards(repo.reponame, repo.repodescription);
        })
    } else {
        placeholderMessageCon.classList.remove("Hide");
        placeholderMessage.textContent = data.error || "Something went wrong"
    }
}

async function getReposSummary() {
    const res = await fetch('http://localhost:3000/repos/', {
        credentials: 'include'
    })

    const data = await res.json();
    const recentStudyReposSummary = document.getElementById("recentStudyReposSummary");

    if (res.ok) {
        recentStudyReposSummary.innerHTML = "";
        data.forEach(repo => {
            let recentReponame = document.createElement("p");
            recentReponame.textContent = repo.reponame;
            recentStudyReposSummary.appendChild(recentReponame)
        })
    } else {
        placeholderMessageCon.classList.remove("Hide");
        placeholderMessage.textContent = data.error || "Something went wrong"
    }
}

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
    headerCurrentUserLabelContainer.innerHTML = "";
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
    const Pages = [loginPageWrapper, registrationPageWrapper, homePageWrapper, settingsPageWrapper, studyReposPageWrapper, createStudyRepoPageWrapper];
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
async function showCurrentPage() {
    const currentPage = getCurrentPage()

    hideAllPages();

    if (currentPage === "loginPage") {
        loginPageWrapper.classList.remove("Hide");
    } else if (currentPage === "registerPage") {
        registrationPageWrapper.classList.remove("Hide");
    } else if (currentPage === "homePage") {
        homePageWrapper.classList.remove("Hide");
        await getReposSummary() 
    } else if (currentPage === "settingsPage") {
        settingsPageWrapper.classList.remove("Hide");
    } else if (currentPage === "studyReposPage") {
        studyReposPageWrapper.classList.remove("Hide");
        await getStudyRepos()
    } else if (currentPage === "createStudyRepoPage") {
        createStudyRepoPageWrapper.classList.remove("Hide");
    } else {
        loginPageWrapper.classList.remove("Hide");
    }
}

async function init() {
    await showCurrentPage();
    await showCurrentUser();
}

init();