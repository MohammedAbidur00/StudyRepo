import { getNoteContent } from "./noteEditor";

const headerCurrentUserLabelContainer = document.getElementById("headerCurrentUserLabelContainer");
const loginPageWrapper = document.getElementById("loginPageWrapper");
const registrationPageWrapper = document.getElementById("registrationPageWrapper");
const homePageWrapper = document.getElementById("homePageWrapper");
const settingsPageWrapper = document.getElementById("settingsPageWrapper");
const studyReposPageWrapper = document.getElementById("studyReposPageWrapper");
const createStudyRepoPageWrapper = document.getElementById("createStudyRepoPageWrapper");
const studyRepoPageWrapper = document.getElementById("studyRepoPageWrapper");
const studyRepoNotePageWrapper = document.getElementById("studyRepoNotePageWrapper");
const studyRepoFolderPageWrapper = document.getElementById("studyRepoFolderPageWrapper");

const goToRegisterBtn = document.getElementById("goToRegisterBtn");
const goToLoginBtn = document.getElementById("goToLoginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const titlebtn = document.getElementById("titlebtn");
const addNoteBtn = document.getElementById("addNoteBtn");

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
const studyRepoBackBtn = document.getElementById("studyRepoBackBtn");
const studyRepoNoteBackBtn = document.getElementById("studyRepoNoteBackBtn");
const studyRepoFolderBackBtn = document.getElementById("studyRepoFolderBackBtn");

const loginPageMessageBox = document.getElementById("loginPageMessageBox");
const registerPageMessageBox = document.getElementById("registerPageMessageBox");
const settingsUsernameMessageBox = document.getElementById("settingsUsernameMessageBox");

const createRepoNameInput = document.getElementById("createRepoNameInput");
const createRepoDescriptionInput = document.getElementById("createRepoDescriptionInput");
const saveRepoBtn = document.getElementById("saveRepoBtn");
const cancelRepoBtn = document.getElementById("cancelRepoBtn");
const createRepoPageMessageBox = document.getElementById("createRepoPageMessageBox");

const studyRepoCardsContainer = document.getElementById("studyRepoCardsContainer");

const placeholderMessage = document.getElementById("placeholderMessage");
const placeholderMessageCon = document.getElementById("placeholderMessageCon");

const studyRepoName = document.getElementById("studyRepoName");

const showChangeUsernameInput = document.getElementById("showChangeUsernameInput");
const showChangeUsernameInputCon = document.getElementById("showChangeUsernameInputCon")
const changeUsernameCancelBtn = document.getElementById("changeUsernameCancelBtn");
const changeUsernameUpdateBtn = document.getElementById("changeUsernameUpdateBtn");
const studyRepoContentContainer = document.getElementById("studyRepoContentContainer")
const folderContentContainer = document.getElementById("folderContentContainer");
const editReposBtn = document.getElementById("editReposBtn");
const editStudyReposBtnsContainer = document.getElementById("editStudyReposBtnsContainer");
const cancelReposEditBtn = document.getElementById("cancelReposEditBtn");
const selectReposBtn = document.getElementById("selectReposBtn");
const dialogWrapper = document.getElementById("dialogWrapper");
const dialogBox = document.getElementById("dialogBox");
const deleteReposBtn = document.getElementById("deleteReposBtn");
const addFolderBtn = document.getElementById("addFolderBtn");
const studyRepoFolderName = document.getElementById("studyRepoFolderName");

let repoToDelete = "";
let isMultiSelect = false;
let reposToDelete = [];

class createStudyRepoCards {
    constructor(repoId, repoName, repoDescription) {
        this.repoId = repoId;
        this.repoName = repoName;
        this.repoDescription = repoDescription;
        this.selected = false;

        this.repoCard = document.createElement("div");
        this.repoCardLabelCon = document.createElement("div");
        this.repoCardTitleCon = document.createElement("div");
        this.repoCardDescriptionCon = document.createElement("div");

        this.repoCardLabel = document.createElement("p");
        this.repoCardTitle = document.createElement("h1");
        this.repoCardDescriptionLabel = document.createElement("p");
        this.repoCardDescription = document.createElement("p");

        this.repoCardEnterBtnCon = document.createElement("div");
        this.repoCardEnterBtnCon.classList.add("Study-Repo-Card-Enter-Container");
        this.repoCardEnterBtn = document.createElement("button");
        this.repoCardEnterBtn.textContent = "ENTER";
        this.repoCardEnterBtn.classList.add("Enter-Repo-Btn")
        this.repoCardEnterBtnCon.appendChild(this.repoCardEnterBtn);

        this.repoRemoveButton = document.createElement("button")
        this.repoRemoveButton.classList.add("removeBtn")
        this.repoRemoveButton.textContent = "×";
        this.repoRemoveButton.classList.add("Hide");

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
        this.repoCard.appendChild(this.repoRemoveButton);
        this.repoCard.appendChild(this.repoCardEnterBtnCon);

        studyRepoCardsContainer.appendChild(this.repoCard);

        this.repoCard.addEventListener("click", () => {
            if (this.isSelected()) {
                this.selected = !this.selected
                if (this.selected) {
                    this.Selected(this.selected);
                } else {
                    this.Selected(this.selected);
                }
            }
        })

        this.repoCardEnterBtn.addEventListener("click", async () => {
            setCurrentPage("studyRepoPage");
            localStorage.setItem("currentRepo", this.repoId);
            await showCurrentPage();
        });

        this.repoRemoveButton.addEventListener("click", () => {
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            repoToDelete = this.repoId;
            const dialogText = "Are you sure you want to delete this study repo?, If so it will be deleted permanently and you won't be able to get it back."
            const btnsArr = [
                {
                    btnId: "comfirmDeleteBtn",
                    btnText: "Delete",
                },
                {
                    btnId: "confirmCancelBtn",
                    btnText: "Cancel"
                }
            ]
            new createDialog(dialogText, btnsArr)
        })
    }

    isSelected() {
        return isMultiSelect;
    }

    Selected(state) {
        if (state) {
            reposToDelete.push(this.repoId);
            const index = reposToDelete.indexOf(this.repoId)
            console.log(reposToDelete);
            this.repoRemoveButton.classList.remove("Hide");
            this.repoRemoveButton.classList.add("removeBtnNum")
            this.repoRemoveButton.textContent = index;
            this.repoCard.classList.remove("Selected-Repos-Style");
        } else {
            const index = reposToDelete.indexOf(this.repoId)
            reposToDelete.splice(index, 1);
            console.log(reposToDelete);
            this.repoRemoveButton.classList.add("Hide");
            this.repoRemoveButton.classList.remove("removeBtnNum")
            this.repoCard.classList.add("Selected-Repos-Style");
        }
    }
}

class buildFolderContent {
    constructor(folderId) {
        this.folderId = folderId

        this.studyRepoFoldersContainer = document.createElement("div");
        this.studyRepoNotesContainer = document.createElement("div");

        this.studyRepoFoldersTitleContainer = document.createElement("div");
        this.studyRepoNotesTitleContainer = document.createElement("div");

        this.studyRepoFoldersElementsContainer = document.createElement("div");
        this.studyRepoNotesElementsContainer = document.createElement("div");

        this.studyRepoFoldersTitle = document.createElement("h2");
        this.studyRepoNotesTitle = document.createElement("h2");

        this.studyRepoFoldersContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoNotesContainer.classList.add("Study-Repo-Content-Container");

        this.studyRepoFoldersTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoNotesTitleContainer.classList.add("Study-Repo-Content-Container-Title");

        this.studyRepoFoldersElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoNotesElementsContainer.classList.add("Study-Repo-Content-Container-Elements");

        this.studyRepoFoldersElementsContainer.id = "studyRepoFoldersContainer";
        this.studyRepoNotesElementsContainer.id = "studyRepoNotesContainer";

        this.studyRepoFoldersTitle.textContent = "FOLDERS";
        this.studyRepoNotesTitle.textContent = "NOTES";

        this.studyRepoFoldersTitleContainer.appendChild(this.studyRepoFoldersTitle);
        this.studyRepoNotesTitleContainer.appendChild(this.studyRepoNotesTitle);

        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersTitleContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesTitleContainer)

        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersElementsContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesElementsContainer);

        folderContentContainer.appendChild(this.studyRepoFoldersContainer);
        folderContentContainer.appendChild(this.studyRepoNotesContainer);

        this.getFolders(this.repoId);
        this.getNotes(this.repoId);
    }

    async getFolders(folderId) {
        await getRepoFolders(folderId);
    }

    async getNotes(folderId) {
        await getRepoNotes(folderId);
    }
}

class buildStudyRepoContent {
    constructor(repoId) {
        this.repoId = repoId

        this.studyRepoDocumentsContainer = document.createElement("div");
        this.studyRepoFoldersContainer = document.createElement("div");
        this.studyRepoNotesContainer = document.createElement("div");

        this.studyRepoDocumentsTitleContainer = document.createElement("div");
        this.studyRepoFoldersTitleContainer = document.createElement("div");
        this.studyRepoNotesTitleContainer = document.createElement("div");

        this.studyRepoDocumentsElementsContainer = document.createElement("div");
        this.studyRepoFoldersElementsContainer = document.createElement("div");
        this.studyRepoNotesElementsContainer = document.createElement("div");

        this.studyRepoDocumentsTitle = document.createElement("h2");
        this.studyRepoFoldersTitle = document.createElement("h2");
        this.studyRepoNotesTitle = document.createElement("h2");

        this.studyRepoDocumentsContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoFoldersContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoNotesContainer.classList.add("Study-Repo-Content-Container");

        this.studyRepoDocumentsTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoFoldersTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoNotesTitleContainer.classList.add("Study-Repo-Content-Container-Title");

        this.studyRepoDocumentsElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoFoldersElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoNotesElementsContainer.classList.add("Study-Repo-Content-Container-Elements");

        this.studyRepoFoldersElementsContainer.id = "studyRepoFoldersContainer";
        this.studyRepoNotesElementsContainer.id = "studyRepoNotesContainer";

        this.studyRepoDocumentsTitle.textContent = "DOCUMENTS";
        this.studyRepoFoldersTitle.textContent = "FOLDERS";
        this.studyRepoNotesTitle.textContent = "NOTES";

        this.studyRepoDocumentsTitleContainer.appendChild(this.studyRepoDocumentsTitle);
        this.studyRepoFoldersTitleContainer.appendChild(this.studyRepoFoldersTitle);
        this.studyRepoNotesTitleContainer.appendChild(this.studyRepoNotesTitle);

        this.studyRepoDocumentsContainer.appendChild(this.studyRepoDocumentsTitleContainer);
        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersTitleContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesTitleContainer)

        this.studyRepoDocumentsContainer.appendChild(this.studyRepoDocumentsElementsContainer);
        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersElementsContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesElementsContainer);

        studyRepoContentContainer.appendChild(this.studyRepoDocumentsContainer);
        studyRepoContentContainer.appendChild(this.studyRepoFoldersContainer);
        studyRepoContentContainer.appendChild(this.studyRepoNotesContainer);

        this.getFolders(this.repoId);
        this.getNotes(this.repoId);
    }

    async getFolders(repoId) {
        await getRepoFolders(repoId);
    }

    async getNotes(repoId) {
        await getRepoNotes(repoId);
    }
}

class createFolderCards {
    constructor(folderId, folderName) {
        this.folderId = folderId;
        this.folderName = folderName;

        this.folderCard = document.createElement("div");
        this.folderCardIconCon = document.createElement("div");
        this.folderCardInfoCon = document.createElement("div");
        this.folderCardNameCon = document.createElement("div");
        this.folderCardStatsCon = document.createElement("div");
        this.folderCardActionCon = document.createElement("div");

        this.folderCardIconSpan = document.createElement("span");
        this.folderCardIconSpan.classList.add("material-icons");
        this.folderCardIconSpan.classList.add("folder-icon-size");
        this.folderCardIconSpan.textContent = "folder";
        this.folderCardIconCon.appendChild(this.folderCardIconSpan);

        this.folderCardActionSpan = document.createElement("span");
        this.folderCardActionSpan.classList.add("material-icons");
        this.folderCardActionSpan.textContent = "chevron_right";
        this.folderCardActionCon.appendChild(this.folderCardActionSpan );

        this.folderCardName = document.createElement("p");
        this.folderCardName.textContent = this.folderName;
        this.folderCardNameCon.appendChild(this.folderCardName)

        this.folderCardStats = document.createElement("p");
        this.folderCardStats.textContent = "currently none";
        this.folderCardStatsCon.appendChild(this.folderCardStats);

        this.folderCard.appendChild(this.folderCardIconCon);
        this.folderCard.appendChild(this.folderCardInfoCon);
        this.folderCardInfoCon.appendChild(this.folderCardNameCon);
        this.folderCardInfoCon.appendChild(this.folderCardStatsCon);
        this.folderCard.appendChild(this.folderCardActionCon);

        this.folderCard.classList.add("Folder-Card");
        this.folderCardIconCon.classList.add("Folder-Card-Icon-Con");
        this.folderCardActionCon.classList.add("Folder-Card-Action-Con");
        this.folderCardInfoCon.classList.add("Folder-Card-Info-Con");
        this.folderCardName.classList.add("Folder-Card-Name");
        this.folderCardStats.classList.add("Folder-Card-Stats");

        const studyRepoFoldersContainer = document.getElementById("studyRepoFoldersContainer");
        studyRepoFoldersContainer.appendChild(this.folderCard);

        this.folderCard.addEventListener("click", async () => {
            localStorage.setItem("currentFolder", this.folderName)
            setCurrentPage("folderPage");
            await showCurrentPage();
            new buildFolderContent(this.folderId)
        })
    }
}

class createNoteCards {
    constructor(noteId, noteName, noteContent) {
        this.noteId = noteId;
        this.noteName = noteName;
        this.noteContent = noteContent;

        console.log(this.noteId)

        console.log(typeof(this.noteContent))

        this.noteCard = document.createElement("div");
        this.noteCardIconCon = document.createElement("div");
        this.noteCardInfoCon = document.createElement("div");
        this.noteCardNameCon = document.createElement("div");
        this.noteCardStatsCon = document.createElement("div");

        this.noteCardIconSpan = document.createElement("span");
        this.noteCardIconSpan.classList.add("material-icons");
        this.noteCardIconSpan.classList.add("note-icon-size");
        this.noteCardIconSpan.textContent = "notes";
        this.noteCardIconCon.appendChild(this.noteCardIconSpan);

        this.noteCardName = document.createElement("p");
        this.noteCardName.textContent = this.noteName;
        this.noteCardNameCon.appendChild(this.noteCardName)

        this.noteCardStats = document.createElement("p");
        this.noteCardStats.textContent = "currently none";
        this.noteCardStatsCon.appendChild(this.noteCardStats);

        this.noteCard.appendChild(this.noteCardIconCon);
        this.noteCard.appendChild(this.noteCardInfoCon);
        this.noteCardInfoCon.appendChild(this.noteCardNameCon);
        this.noteCardInfoCon.appendChild(this.noteCardStatsCon);

        this.noteCard.classList.add("Folder-Card");
        this.noteCardIconCon.classList.add("Folder-Card-Icon-Con");
        this.noteCardInfoCon.classList.add("Folder-Card-Info-Con");
        this.noteCardName.classList.add("Folder-Card-Name");
        this.noteCardStats.classList.add("Folder-Card-Stats");

        const studyReponotesContainer = document.getElementById("studyRepoNotesContainer");
        studyReponotesContainer.appendChild(this.noteCard);

        this.noteCard.addEventListener("click", async () => {
            setCurrentPage("noteEditorPage");
            await showCurrentPage();
            if (this.noteContent === null) {
                getNoteContent(' ', this.noteName, this.noteId);
            } else {
                getNoteContent(this.noteContent, this.noteName, this.noteId);
            }
        })
    }
}

class createDialog {
    constructor(dialogText, dialogBtns, dialogType = "regular") {
        this.dialogText = dialogText;
        this.dialogBtns = dialogBtns;
        this.dialogType = dialogType;

        this.dialogInfoBox = document.createElement("div");
        this.dialogBoxTitleCon = document.createElement("div");
        this.dialogBoxInfoCon = document.createElement("div");
        this.dialogBoxBtnsCon = document.createElement("div");

        this.dialogBoxTitle = document.createElement("p");
        this.dialogBoxTitle.textContent = "Dialog Box";
        this.dialogBoxTitleCon.appendChild(this.dialogBoxTitle);

        this.dialogBoxInfo = document.createElement("p");
        this.dialogBoxInfo.textContent = this.dialogText;
        this.dialogBoxInfoCon.appendChild(this.dialogBoxInfo)

        this.dialogInfoBox.classList.add("Dialog-Info-Box");
        this.dialogBoxTitleCon.classList.add("dialogBoxTitle");
        this.dialogBoxInfoCon.classList.add("dialogBoxInfo");
        this.dialogBoxBtnsCon.classList.add("dialogBoxBtns");

        dialogBtns.forEach(btn => {
            this.dialogBtn = document.createElement("button");
            this.dialogBtn.id = btn.btnId;
            this.dialogBtn.textContent = btn.btnText;
            this.dialogBoxBtnsCon.appendChild(this.dialogBtn);
        })

        this.dialogInfoBox.appendChild(this.dialogBoxTitleCon);
        this.dialogInfoBox.appendChild(this.dialogBoxInfoCon);
        if (this.dialogType === "folderNameInput") {
            this.dialogBoxInputCon = document.createElement("div");
            this.dialogBoxInputCon.classList.add("dialogBoxInputCon");
            this.dialogBoxInput = document.createElement("input");
            this.dialogBoxInput.id = "folderNameInput";
            this.dialogBoxInput.placeholder = "Enter a foldername"
            this.dialogBoxInputCon.appendChild(this.dialogBoxInput);
            this.dialogInfoBox.appendChild(this.dialogBoxInputCon);
        }
        if (this.dialogType === "noteNameInput") {
            this.dialogBoxInputCon = document.createElement("div");
            this.dialogBoxInputCon.classList.add("dialogBoxInputCon");
            this.dialogBoxInput = document.createElement("input");
            this.dialogBoxInput.id = "noteNameInput";
            this.dialogBoxInput.placeholder = "Enter a note name"
            this.dialogBoxInputCon.appendChild(this.dialogBoxInput);
            this.dialogInfoBox.appendChild(this.dialogBoxInputCon);
        }
        this.dialogInfoBox.appendChild(this.dialogBoxBtnsCon);

        dialogWrapper.appendChild(this.dialogInfoBox);
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

studyRepoBackBtn.addEventListener("click", async () => {
    setCurrentPage("studyReposPage");
    await showCurrentPage();
})

settingBackBtn.addEventListener("click", async () => {
    setCurrentPage("homePage");
    settingElementsHide()
    await showCurrentPage();
    location.reload();
})

studyReposBackBtn.addEventListener("click", async () => {
    setCurrentPage("homePage");
    await showCurrentPage();
})

createStudyRepoBackBtn.addEventListener("click", async () => {
    setCurrentPage("studyReposPage");
    await showCurrentPage();
})

studyRepoNoteBackBtn.addEventListener("click", async () => {
    localStorage.removeItem("noteId");
    localStorage.removeItem("noteName");
    localStorage.removeItem("noteContent");
    setCurrentPage("studyRepoPage");
    await showCurrentPage();
})

studyRepoFolderBackBtn.addEventListener("click", async () => {
    setCurrentPage("studyRepoPage");
    await showCurrentPage();
})

titlebtn.addEventListener("click", () => {
    location.reload();
})

editReposBtn.addEventListener("click", async () => {
    await getStudyRepos()
    editReposBtn.classList.add("Hide");
    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.classList.remove("Hide");
    })
    document.querySelectorAll(".Enter-Repo-Btn").forEach(btn => {
        btn.classList.add("Disbaled-Btn-Style");
        btn.disabled = true
    })
    openCreateStudyRepoBtn.disabled = true;
    cancelReposEditBtn.classList.remove("Hide");
    selectReposBtn.classList.remove("Hide");
})

cancelReposEditBtn.addEventListener("click", () => {
    leaveEditMode();
})

selectReposBtn.addEventListener("click", () => {
    document.querySelectorAll(".Study-Repo-Card").forEach(card => {
        card.classList.add("Selected-Repos-Style");
    })
    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.classList.add("Hide");
    })
    isMultiSelect = true;
})

deleteReposBtn.addEventListener("click", async () => {
    dialogWrapper.classList.remove("Hide")
    dialogWrapper.innerHTML = "";
    document.body.style.overflow = "hidden";
    repoToDelete = this.repoId;
    const dialogText = "Are you sure you want to delete these StudyRepos?, If so they will be deleted permanently and you won't be able to get them back."
    const btnsArr = [
        {
            btnId: "comfirmReposDeleteBtn",
            btnText: "Delete",
        },
        {
            btnId: "confirmReposCancelBtn",
            btnText: "Cancel"
        }
    ]
    new createDialog(dialogText, btnsArr)
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

function leaveEditMode() {
    isMultiSelect = false;
    reposToDelete = [];
    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.classList.add("Hide");
    })
    document.querySelectorAll(".Enter-Repo-Btn").forEach(btn => {
        btn.classList.remove("Disbaled-Btn-Style");
        btn.disabled = false
    })
    document.querySelectorAll(".Study-Repo-Card").forEach(card => {
        card.classList.remove("Selected-Repos-Style");
    })
    openCreateStudyRepoBtn.disabled = false;
    cancelReposEditBtn.classList.add("Hide");
    selectReposBtn.classList.add("Hide");
    editReposBtn.classList.remove("Hide");
    deleteReposBtn.classList.add("Hide");
}

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

showChangeUsernameInput.addEventListener("input", async () => {
    const getUsername = await getCurrentuser();
    if (showChangeUsernameInput.value !== getUsername) {
        changeUsernameCancelBtn.classList.remove("Hide")
    } else {
        changeUsernameCancelBtn.classList.add("Hide")
    }
})

changeUsernameCancelBtn.addEventListener("click", async () => {
    const getUsername = await getCurrentuser();
    showChangeUsernameInput.value = getUsername
    changeUsernameCancelBtn.classList.add("Hide")
})

function settingElementsHide() {
    changeUsernameCancelBtn.classList.add("Hide")
}

document.addEventListener("click", async (event) => {
    if (event.target.id === "confirmCancelBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "dialogOkayBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        leaveEditMode();
        location.reload();
    } else if (event.target.id === "comfirmDeleteBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        leaveEditMode();
        const isRepoDeleted = await deleteStudyRepo(repoToDelete);
        if (isRepoDeleted.deleted) {
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = isRepoDeleted.message
            const btnArr = [
                {
                    btnId: "dialogOkayBtn",
                    btnText: "Okay"
                }
            ]
            new createDialog(dialogText, btnArr);
        } else {
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = isRepoDeleted.error || "Something went wrong";
            const btnArr = [
                {
                    btnId: "dialogOkayBtn",
                    btnText: "Okay"
                }
            ]
            new createDialog(dialogText, btnArr);
        }
    } else if (event.target.id === "comfirmReposDeleteBtn") {
        const functionReturns = [];

        for (const repo of reposToDelete) {
            const isRepoDeleted = await deleteStudyRepo(repo);
            functionReturns.push(isRepoDeleted.deleted);
        }

        const isAllSuccess = functionReturns.every(value => value === true);

        if (isAllSuccess) {
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = "StudyRepos successfully deleted."
            const btnArr = [
                {
                    btnId: "dialogOkayBtn",
                    btnText: "Okay"
                }
            ]
            new createDialog(dialogText, btnArr);
        } else {
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = "Something went wrong";
            const btnArr = [
                {
                    btnId: "dialogOkayBtn",
                    btnText: "Okay"
                }
            ]
            new createDialog(dialogText, btnArr);
        }
    } else if (event.target.id === "confirmReposCancelBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "confirmCancelFolderBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "comfirmFolderNameBtn") {
        const currentRepo = localStorage.getItem("currentRepo");
        await createRepoFolder(currentRepo, folderNameInput.value);
    } else if (event.target.id === "confirmNoteNameBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        const currentRepo = localStorage.getItem("currentRepo");
        console.log(currentRepo)
        await createRepoNote(currentRepo, noteNameInput.value)
    } else if (event.target.id === "confirmCancelNoteBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    }
})

studyRepoCardsContainer.addEventListener("click", (event) => {
    if (isMultiSelect) {
        const card = event.target.closest(".Selected-Repos-Style");
        if (!card) {
            selectReposBtn.classList.add("Hide");
            deleteReposBtn.classList.remove("Hide");
        }
    }
})

changeUsernameUpdateBtn.addEventListener("click", async () => {
    const getUsername = await getCurrentuser();
    const getEmail = await getCurrentUserEmail();
    if (showChangeUsernameInput.value === getUsername) {
        showMessageBox(settingsUsernameMessageBox, "Nothing to update here")
    } else {
        const payload = {
            username: showChangeUsernameInput.value,
            email: getEmail
        }
        const id = await getCurrentUserId();
        const res = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok) {
            changeUsernameCancelBtn.classList.add("Hide")
            showMessageBox(settingsUsernameMessageBox, "Username updated successfully");
        } else {
            console.log(data.error)
            showMessageBox(settingsUsernameMessageBox, data.error || "Something went wrong");
        }
    }
})

addFolderBtn.addEventListener("click", () => {
    dialogWrapper.classList.remove("Hide")
    dialogWrapper.innerHTML = "";
    document.body.style.overflow = "hidden";
    repoToDelete = this.repoId;
    const dialogText = "Enter a name for your folder into the input box below."
    const btnsArr = [
        {
            btnId: "comfirmFolderNameBtn",
            btnText: "Done",
        },
        {
            btnId: "confirmCancelFolderBtn",
            btnText: "Cancel"
        }
    ]
    new createDialog(dialogText, btnsArr, "folderNameInput")
})

addNoteBtn.addEventListener("click", async () => {
    dialogWrapper.classList.remove("Hide")
    dialogWrapper.innerHTML = "";
    document.body.style.overflow = "hidden";
    const dialogText = "Enter a name for your note into the input box below."
    const btnsArr = [
        {
            btnId: "confirmNoteNameBtn",
            btnText: "Done",
        },
        {
            btnId: "confirmCancelNoteBtn",
            btnText: "Cancel"
        }
    ]
    new createDialog(dialogText, btnsArr, "noteNameInput")
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
        createStudyRepoBackBtn.classList.add("Hide");
        showMessageBox(createRepoPageMessageBox, "created study repo successfully, going back to studyrepos...");
        name.value = "";
        description.value = "";
        setCurrentPage('studyReposPage')
        setTimeout(async () => await showCurrentPage(), 1000);
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
        studyRepoCardsContainer.innerHTML = "";
        data.forEach(repo => {
            new createStudyRepoCards(repo.id, repo.reponame, repo.repodescription);
        })
    } else {
        placeholderMessageCon.classList.remove("Hide");
        placeholderMessage.textContent = data.error || "Something went wrong"
    }
}

async function populateSettingsInfo() {
    const currentUser = await getCurrentuser();

    showChangeUsernameInput.value = currentUser;
}

async function getStudyRepo() {
    const repoId = localStorage.getItem("currentRepo")
    console.log(repoId)
    const res = await fetch(`http://localhost:3000/repos/${repoId}`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        console.log(data)
        studyRepoName.textContent = data[0].reponame.toUpperCase();
        studyRepoContentContainer.innerHTML = "";
        new buildStudyRepoContent(data[0].id);
    } else {
        setCurrentPage("studyReposPage");
        await showCurrentPage()
    }
}

async function deleteStudyRepo(repoId) {
    const res = await fetch(`http://localhost:3000/repos/${repoId}`, {
        method: 'DELETE',
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        return {
            deleted: true,
            message: data.message
        }
    } else {
        return {
            deleted: false,
            error: data.error
        }
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
        placeholderMessage.textContent = data.error || "Something went wrong";
    }
}

async function getRepoFolders(repoId) {
    const res = await fetch(`http://localhost:3000/repos/${repoId}/folders`, {
        credentials: 'include'
    })

    const folders = await res.json();

    if (res.ok) {
        if (folders.length === 0) {
            const studyRepoFoldersContainer = document.getElementById("studyRepoFoldersContainer");
            const placeholderMessageCon = document.createElement("div")
            const placeholderMessage = document.createElement("p")
            placeholderMessage.textContent = "No folders yet"

            placeholderMessageCon.appendChild(placeholderMessage)

            studyRepoFoldersContainer.appendChild(placeholderMessageCon)
        } else {
            for (const folder of folders) {
                new createFolderCards(folder.id, folder.foldername);
            }
        }
    }
}

async function createRepoFolder(repoId, folderName) {
    const payload = {
        id: repoId,
        folderName: folderName
    }

    const res = await fetch("http://localhost:3000/repos/folders", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    const data = await res.json();

    if (res.ok) {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        const dialogText = "Folder created successfully."
        const btnArr = [
            {
                btnId: "dialogOkayBtn",
                btnText: "Okay"
            }
        ]
        new createDialog(dialogText, btnArr);
    } else {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        console.log(data.error)
        const dialogText = data.error;
        const btnArr = [
            {
                btnId: "dialogOkayBtn",
                btnText: "Okay"
            }
        ]
        new createDialog(dialogText, btnArr);
    }
}

async function getRepoNotes(repoId) {
    const res = await fetch(`http://localhost:3000/repos/${repoId}/notes`, {
        credentials: 'include'
    })

    const notes = await res.json();

    console.log(repoId)

    console.log(notes.length)
    if (res.ok) {
        if (notes.length === 0) {
            const studyRepoNotesContainer = document.getElementById("studyRepoNotesContainer");
            const placeholderMessageCon = document.createElement("div")
            const placeholderMessage = document.createElement("p")
            placeholderMessage.textContent = "No notes yet"

            placeholderMessageCon.appendChild(placeholderMessage)

            studyRepoNotesContainer.appendChild(placeholderMessageCon)
        } else {
            for (const note of notes) {
                console.log(note)
                if (note.folder_id === null) {
                    new createNoteCards(note.id, note.title, note.content);
                }
            }
        }
    }
}

async function createRepoNote(repoId, title, folderId = null, content = null) {
    const payload = {
        id: repoId,
        title: title,
        folderId: folderId,
        content: content
    }
    console.log(payload);

    const res = await fetch("http://localhost:3000/repos/notes", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    const data = await res.json();

    if (res.ok) {
        setCurrentPage("noteEditorPage");
        await showCurrentPage();
    } else {
        console.log(data.error);
    }
}

export async function updateRepoNote(id, noteId, noteName, noteContent) {
    const payload = {
        noteId: noteId,
        noteTitle: noteName,
        noteContent: noteContent
    }
    const res = await fetch(`http://localhost:3000/repos/${id}/notes`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok) {
        console.log("saved")
    } else {
        console.log(data.error)
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

async function getCurrentUserId() {
    const res = await fetch('http://localhost:3000/auth/me', {
        credentials: 'include'
    })

    if (res.ok) {
        const data = await res.json();
        const id = data.id
        return id
    }
}

async function getCurrentUserEmail() {
    const res = await fetch('http://localhost:3000/auth/me', {
        credentials: 'include'
    })

    if (res.ok) {
        const data = await res.json();
        const email = data.email
        return email
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
    const Pages = [loginPageWrapper, registrationPageWrapper, homePageWrapper, settingsPageWrapper, studyReposPageWrapper, createStudyRepoPageWrapper, studyRepoPageWrapper, studyRepoNotePageWrapper, studyRepoFolderPageWrapper];
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
        await populateSettingsInfo()
    } else if (currentPage === "studyReposPage") {
        studyReposPageWrapper.classList.remove("Hide");
        await getStudyRepos()
    } else if (currentPage === "createStudyRepoPage") {
        createStudyRepoPageWrapper.classList.remove("Hide");
    } else if (currentPage === "studyRepoPage") {
        studyRepoPageWrapper.classList.remove("Hide");
        await getStudyRepo();
    } else if (currentPage === "noteEditorPage") {
        studyRepoNotePageWrapper.classList.remove("Hide");
    } else if (currentPage === "folderPage") {
        studyRepoFolderPageWrapper.classList.remove("Hide");
        studyRepoFolderName.textContent = localStorage.getItem("currentFolder");
    } else {
        loginPageWrapper.classList.remove("Hide");
    }
}

async function init() {
    await showCurrentPage();
    await showCurrentUser();
}

init();