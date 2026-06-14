import { locales } from "zod";
import { getNoteContent, clearhistory } from "./noteEditor";

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
const addDocumentPageWrapper = document.getElementById("addDocumentPageWrapper");

const goToRegisterBtn = document.getElementById("goToRegisterBtn");
const goToLoginBtn = document.getElementById("goToLoginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const titlebtn = document.getElementById("titlebtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const addDocumentBtn = document.getElementById("addDocumentBtn");

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
const addDocumentBackBtn = document.getElementById("addDocumentBackBtn");

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
const folderAddFolderBtn = document.getElementById("folderAddFolderBtn");
const folderAddNoteBtn = document.getElementById("folderAddNoteBtn");
const documentInput = document.getElementById("documentInput");
const container = document.getElementById("documentPreviewContainer");
const saveDocumentBtn = document.getElementById("saveDocumentBtn");
const cancelDocumentBtn = document.getElementById("cancelDocumentBtn");
const editStudyRepoCancelBtn = document.getElementById("editStudyRepoCancelBtn");
const studyRepoEditBtns = document.getElementById("studyRepoEditBtns");

const addDocumentPageMessageBox = document.getElementById("addDocumentPageMessageBox");

let repoToDelete = "";
let isMultiSelect = false;
let reposToDelete = [];

const editStudyRepoBtn = document.getElementById("editStudyRepoBtn");
let studyRepoEditMode = false;

let folderToDelete = "";
let noteToDelete = "";
let documentToDelete = "";

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
            this.repoRemoveButton.classList.remove("Hide");
            this.repoRemoveButton.classList.add("removeBtnNum")
            this.repoRemoveButton.textContent = index;
            this.repoCard.classList.remove("Selected-Repos-Style");
        } else {
            const index = reposToDelete.indexOf(this.repoId)
            reposToDelete.splice(index, 1);
            this.repoRemoveButton.classList.add("Hide");
            this.repoRemoveButton.classList.remove("removeBtnNum")
            this.repoCard.classList.add("Selected-Repos-Style");
        }
    }
}

class buildFolderContent {
    constructor(folderId, folderName, folderParent) {
        this.folderId = folderId
        this.folderName = folderName
        this.folderParent = folderParent

        localStorage.setItem("previousFolder", this.folderParent)

        folderContentContainer.innerHTML = "";

        studyRepoFolderName.textContent = this.folderName;

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

        this.studyRepoFoldersElementsContainer.id = "folderOfFoldersContainer";
        this.studyRepoNotesElementsContainer.id = "notesOfFolderContainer";

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

        this.getFolders(this.folderId);
        this.getNotes(this.folderId);
        this.checkDepth();
    }

    async getFolders(folderId) {
        const currentRepo = localStorage.getItem("currentRepo")
        //const currentFolder = localStorage.getItem("currentFolder")
        await getRepoFolders(currentRepo, folderId);
    }

    async getNotes(folderId) {
        const currentRepo = localStorage.getItem("currentRepo")
        await getRepoNotes(currentRepo, folderId);
    }

    checkDepth() {
        let currentDepth = parseInt(localStorage.getItem("folderDepth")) || 0;
        if (currentDepth > 10) {
            folderAddFolderBtn.classList.add("Hide");
            this.studyRepoFoldersContainer.classList.add("Hide");
        } else {
            folderAddFolderBtn.classList.remove("Hide");
            this.studyRepoFoldersContainer.classList.remove("Hide");
        }
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

        this.studyRepoDocumentsElementsContainer.id = "studyRepoDocumentsContainer"
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
        this.getDocuments();
    }

    async getFolders(repoId) {
        await getRepoFolders(repoId);
    }

    async getNotes(repoId) {
        await getRepoNotes(repoId);
    }

    async getDocuments() {
        await getDocuments();
    }
}

class createFolderCards {
    constructor(folderId, folderName, folderCon) {
        this.folderId = folderId;
        this.folderName = folderName;
        this.folderCon = folderCon;

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

        this.folderCard.classList.add("Folder-Card");
        this.folderCardIconCon.classList.add("Folder-Card-Icon-Con");
        this.folderCardActionCon.classList.add("Folder-Card-Action-Con");
        this.folderCardInfoCon.classList.add("Folder-Card-Info-Con");
        this.folderCardName.classList.add("Folder-Card-Name");
        this.folderCardStats.classList.add("Folder-Card-Stats");

        this.folderRemoveBtnCon = document.createElement("div");
        this.folderRemoveBtnCon.classList.add("noteRemoveBtnCon")

        this.folderRemoveBtn = document.createElement("button");
        this.folderRemoveBtn.classList.add("studyRepoElementremoveBtn")
        this.folderRemoveBtn.classList.add("Hide");
        this.folderRemoveBtn.textContent = "×";

        this.folderRemoveBtnCon.appendChild(this.folderRemoveBtn);

        this.folderCard.appendChild(this.folderRemoveBtnCon)

        this.folderCard.appendChild(this.folderCardActionCon);

        this.folderCon.appendChild(this.folderCard);

        this.folderCard.addEventListener("click", async () => {
            folderContentContainer.innerHTML = "";
            let currentFolderDepth = localStorage.getItem("folderDepth");
            localStorage.setItem("folderDepth", ++currentFolderDepth);
            const currentRepo = localStorage.getItem("currentRepo")
            localStorage.setItem("currentFolder", this.folderId);
            setCurrentPage("folderPage");
            await showCurrentPage();
            await getRepoFolder();
            await getRepoFolders(currentRepo, this.folderId);
        })

        this.folderRemoveBtn.addEventListener("click", async (event) => {
            event.stopPropagation();
            folderToDelete = this.folderId;
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = "Are you sure you want to delete this folder?, If so it will be deleted permanently and you won't be able to get it back."
            const btnsArr = [
                {
                    btnId: "comfirmFolderDeleteBtn",
                    btnText: "Delete",
                },
                {
                    btnId: "confirmFolderCancelBtn",
                    btnText: "Cancel"
                }
            ]
            new createDialog(dialogText, btnsArr)
        })
    }
}

class createNoteCards {
    constructor(noteId, noteName, noteContent, noteCon) {
        this.noteId = noteId;
        this.noteName = noteName;
        this.noteContent = noteContent;

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

        this.noteRemoveBtnCon = document.createElement("div");
        this.noteRemoveBtnCon.classList.add("noteRemoveBtnCon")

        this.noteRemoveBtn = document.createElement("button");
        this.noteRemoveBtn.classList.add("studyRepoElementremoveBtn")
        this.noteRemoveBtn.classList.add("Hide");
        this.noteRemoveBtn.textContent = "×";

        this.noteRemoveBtnCon.appendChild(this.noteRemoveBtn);

        this.noteCard.appendChild(this.noteRemoveBtnCon)

        noteCon.appendChild(this.noteCard);

        this.noteCard.addEventListener("click", async () => {
            setCurrentPage("noteEditorPage");
            await showCurrentPage();
            if (this.noteContent === null) {
                getNoteContent(' ', this.noteName, this.noteId);
            } else {
                getNoteContent(this.noteContent, this.noteName, this.noteId);
            }
        })

        this.noteRemoveBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            noteToDelete = this.noteId;
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = "Are you sure you want to delete this note?, If so it will be deleted permanently and you won't be able to get it back."
            const btnsArr = [
                {
                    btnId: "comfirmNoteDeleteBtn",
                    btnText: "Delete",
                },
                {
                    btnId: "confirmNoteCancelBtn",
                    btnText: "Cancel"
                }
            ]
            new createDialog(dialogText, btnsArr)
        })
    }
}

class createDocumentCards {
    constructor(fileId, fileName, fileUrl, fileType, fileSize) {
        this.fileId = fileId;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
        this.fileSize = fileSize;

        const studyRepoDocumentsContainer = document.getElementById("studyRepoDocumentsContainer");

        this.fileContainer = document.createElement("div");
        studyRepoDocumentsContainer.classList.add("Document-Container");
        if (this.fileType.startsWith("image/")) {
            this.fileImage = document.createElement("img");
            this.fileImage.src = this.fileUrl;
            this.fileContainer.appendChild(this.fileImage);
        }
        this.removeBtn = document.createElement("button");
        this.removeBtn.classList.add("removeBtn")
        this.removeBtn.classList.add("studyRepoElementremoveBtn")
        this.removeBtn.textContent = "×";
        this.removeBtn.classList.add("Hide");
        this.fileContainer.appendChild(this.removeBtn)

        studyRepoDocumentsContainer.appendChild(this.fileContainer);

        this.removeBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            documentToDelete = this.fileId;
            dialogWrapper.classList.remove("Hide")
            dialogWrapper.innerHTML = "";
            document.body.style.overflow = "hidden";
            const dialogText = "Are you sure you want to delete this document?, If so it will be deleted permanently and you won't be able to get it back."
            const btnsArr = [
                {
                    btnId: "comfirmDocumentDeleteBtn",
                    btnText: "Delete",
                },
                {
                    btnId: "confirmDocumentCancelBtn",
                    btnText: "Cancel"
                }
            ]
            new createDialog(dialogText, btnsArr)
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
        if (this.dialogType === "folderOfFolderNameInput") {
            this.dialogBoxInputCon = document.createElement("div");
            this.dialogBoxInputCon.classList.add("dialogBoxInputCon");
            this.dialogBoxInput = document.createElement("input");
            this.dialogBoxInput.id = "folderOfFolderNameInput";
            this.dialogBoxInput.placeholder = "Enter a folder name"
            this.dialogBoxInputCon.appendChild(this.dialogBoxInput);
            this.dialogInfoBox.appendChild(this.dialogBoxInputCon);
        }
        if (this.dialogType === "noteOfFolderNameInput") {
            this.dialogBoxInputCon = document.createElement("div");
            this.dialogBoxInputCon.classList.add("dialogBoxInputCon");
            this.dialogBoxInput = document.createElement("input");
            this.dialogBoxInput.id = "noteOfFolderNameInput";
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
    clearhistory();
    localStorage.removeItem("noteId");
    localStorage.removeItem("noteName");
    localStorage.removeItem("noteContent");
    setCurrentPage("studyRepoPage");
    await showCurrentPage();
})

studyRepoFolderBackBtn.addEventListener("click", async () => {
    let currentFolderDepth = parseInt(localStorage.getItem("folderDepth")) || 0;
    localStorage.setItem("folderDepth", currentFolderDepth - 1);
    let previousFolder = localStorage.getItem("previousFolder");
    let currentRepo = localStorage.getItem("currentRepo");
    folderContentContainer.innerHTML = "";
    if (previousFolder === "null") {
        setCurrentPage("studyRepoPage");
        await showCurrentPage();
    } else {
        setCurrentPage("folderPage");
        localStorage.setItem("currentFolder", previousFolder);
        await showCurrentPage();
        await getRepoFolder();
        await getRepoFolders(currentRepo, previousFolder);
    }
})

addDocumentBackBtn.addEventListener("click", async () => {
    clearPreviews();
    setCurrentPage("studyRepoPage");
    await showCurrentPage();
})

cancelDocumentBtn.addEventListener("click", () => {
    clearPreviews();
})

saveDocumentBtn.addEventListener("click", async () => {
    await uploadDocuments();
})

titlebtn.addEventListener("click", () => {
    location.reload();
})

editStudyRepoCancelBtn.addEventListener("click", () => {
    studyRepoEditMode = false;
    document.querySelectorAll(".studyRepoElementremoveBtn").forEach(btn => {
        btn.classList.add("Hide");
    })
    document.querySelectorAll(".Folder-Card-Action-Con").forEach(btn => {
        btn.classList.remove("Hide");
    })
    document.querySelectorAll(".Folder-Card").forEach(card => {
        card.style.pointerEvents = "auto";
    })
    editStudyRepoBtn.classList.remove("Hide");
    studyRepoEditBtns.classList.add("Hide");
})

editStudyRepoBtn.addEventListener("click", () => {
    studyRepoEditMode = true;
    document.querySelectorAll(".studyRepoElementremoveBtn").forEach(btn => {
        btn.classList.remove("Hide");
    })
    document.querySelectorAll(".Folder-Card-Action-Con").forEach(btn => {
        btn.classList.add("Hide");
    })
    document.querySelectorAll(".Folder-Card").forEach(card => {
        card.style.pointerEvents = "none";
    })
    editStudyRepoBtn.classList.add("Hide");
    studyRepoEditBtns.classList.remove("Hide");
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

//START OF DOCUMENT INPUT SECTION

let selectedFiles = [];
let objectURLs = [];
let fileIdCounter = 0;

documentInput.addEventListener("change", (e) => {
    const newFiles = Array.from(e.target.files).map(file => ({
        id: fileIdCounter++,  // unique id per file
        file
      }));
    selectedFiles = [...selectedFiles, ...newFiles]
    renderPreviews();
    e.target.value = '';
})

function renderPreviews() {
    container.innerHTML = ''
    container.classList.remove("Hide");
  
    selectedFiles.forEach(({ id, file, objectURL }) => {
      const item = document.createElement('div')
  
      if (file.type.startsWith('image/')) {
        if (!objectURL) {
          objectURL = URL.createObjectURL(file)
          selectedFiles.find(f => f.id === id).objectURL = objectURL
        }
        const img = document.createElement('img')
        img.src = objectURL
        item.appendChild(img)
      } else if (file.type === 'application/pdf') {
        if (!objectURL) {
          objectURL = URL.createObjectURL(file)
          selectedFiles.find(f => f.id === id).objectURL = objectURL
        }
        const iframe = document.createElement('iframe')
        iframe.src = objectURL + '#toolbar=0&navpanes=0'
        item.appendChild(iframe)
      } else {
        const icon = document.createElement('p')
        icon.textContent = file.name
        item.appendChild(icon)
      }
  
      const removeBtn = document.createElement('button')
      removeBtn.classList.add("removeBtn");
      removeBtn.textContent = '×'
      removeBtn.addEventListener('click', () => {
        removeFile(id)
        if (selectedFiles.length === 0) {
            container.classList.add("Hide");
        }
      })
      item.appendChild(removeBtn)
  
      container.appendChild(item)
    })
}

function removeFile(id) {
    // revoke URL for the removed file
    const removed = selectedFiles.find(f => f.id === id)
    if (removed && removed.objectURL) {
      URL.revokeObjectURL(removed.objectURL)
    }
  
    selectedFiles = selectedFiles.filter(f => f.id !== id)
    renderPreviews()
}

function clearPreviews() {
    objectURLs.forEach(url => URL.revokeObjectURL(url))
    objectURLs = []
    selectedFiles = []
    container.innerHTML = "";
    container.classList.add("Hide");
}

async function uploadDocuments() {
    const currentRepo = parseInt(localStorage.getItem("currentRepo"));
    const formData = new FormData();
    selectedFiles.forEach(({ file }) => formData.append('files', file))
    formData.append('repoId', currentRepo)

    const res = await fetch('http://localhost:3000/files/upload', {
        method: 'POST',
        credentials: 'include',
        body: formData
    })

    const data = await res.json();

    if (res.ok) {
        showMessageBox(addDocumentPageMessageBox, "add Document successfully, going back to studyrepo...");
    } else {
        showMessageBox(addDocumentPageMessageBox, data.error || "Something went wrong");
    }
}

async function getDocuments() {
    const currentRepo = parseInt(localStorage.getItem("currentRepo"));
    const res = await fetch(`http://localhost:3000/files/${currentRepo}`, {
        credentials: 'include'
    })

    const studyRepoDocumentsContainer = document.getElementById("studyRepoDocumentsContainer");
    const placeholderMessageCon = document.createElement("div");
    const placeholderMessage = document.createElement("p");
    placeholderMessage.classList.add("placeholderMessageElements");
    placeholderMessage.textContent = "No documents yet";
    placeholderMessageCon.appendChild(placeholderMessage);
    const data = await res.json();

    if (res.ok) {
        if (data.length === 0) {
            studyRepoDocumentsContainer.appendChild(placeholderMessageCon);
        } else {
            for (const obj of data) {
                new createDocumentCards(obj.id, obj.filename, obj.url, obj.file_type, obj.file_size)
            }
        }
    }
}

//END OF DOCUMENT INPUT SECTION

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
        const currentFolder = localStorage.getItem("currentFolder")
        await createRepoNote(currentRepo, noteNameInput.value)
    } else if (event.target.id === "confirmCancelNoteBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "confirmCancelFolderOfFolderBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "comfirmFolderOfFolderNameBtn") {
        const currentFolder = localStorage.getItem("currentFolder");
        const currentRepo = localStorage.getItem("currentRepo");
        await createRepoFolder(currentRepo, folderOfFolderNameInput.value, currentFolder);
    } else if (event.target.id === "confirmCancelNoteOfFolderBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "confirmNoteOfFolderNameBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        const currentRepo = localStorage.getItem("currentRepo");
        const currentFolder = localStorage.getItem("currentFolder")
        await createRepoNote(currentRepo, noteOfFolderNameInput.value, currentFolder);
    } else if (event.target.id === "confirmFolderCancelBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "comfirmFolderDeleteBtn") {
        await deleteRepoFolder(folderToDelete);
    } else if (event.target.id === "confirmNoteCancelBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "comfirmNoteDeleteBtn") {
        await deleteRepoNote(noteToDelete);
    } else if (event.target.id === "confirmDocumentCancelBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "comfirmDocumentDeleteBtn") {
        await deleteRepoDocument(documentToDelete);
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

folderAddFolderBtn.addEventListener("click", () => {
    dialogWrapper.classList.remove("Hide")
    dialogWrapper.innerHTML = "";
    document.body.style.overflow = "hidden";
    const dialogText = "Enter a name for your folder into the input box below."
    const btnsArr = [
        {
            btnId: "comfirmFolderOfFolderNameBtn",
            btnText: "Done",
        },
        {
            btnId: "confirmCancelFolderOfFolderBtn",
            btnText: "Cancel"
        }
    ]
    new createDialog(dialogText, btnsArr, "folderOfFolderNameInput");
})

folderAddNoteBtn.addEventListener("click", () => {
    dialogWrapper.classList.remove("Hide")
    dialogWrapper.innerHTML = "";
    document.body.style.overflow = "hidden";
    const dialogText = "Enter a name for your note into the input box below."
    const btnsArr = [
        {
            btnId: "confirmNoteOfFolderNameBtn",
            btnText: "Done",
        },
        {
            btnId: "confirmCancelNoteOfFolderBtn",
            btnText: "Cancel"
        }
    ]
    new createDialog(dialogText, btnsArr, "noteOfFolderNameInput");
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

addDocumentBtn.addEventListener("click", async () => {
    setCurrentPage("addDocumentPage")
    await showCurrentPage();
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
    const res = await fetch(`http://localhost:3000/repos/${repoId}`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        localStorage.setItem("folderDepth", 0);
        localStorage.setItem("currentFolder", null);
        localStorage.setItem("previousFolder", null);
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

async function getRepoFolders(repoId, folderParent = 0) {
    const res = await fetch(`http://localhost:3000/repos/${repoId}/${folderParent}/folders`, {
        credentials: 'include'
    })

    const folders = await res.json();

    const folderOfFoldersContainer = document.getElementById("folderOfFoldersContainer");
    const studyRepoFoldersContainer = document.getElementById("studyRepoFoldersContainer");
    let foldersCon = studyRepoFoldersContainer

    if (res.ok) {
        if (folders.length === 0) {
            const placeholderMessageCon = document.createElement("div")
            const placeholderMessage = document.createElement("p")
            placeholderMessage.classList.add("placeholderMessageElements");
            placeholderMessage.textContent = "No folders yet"

            placeholderMessageCon.appendChild(placeholderMessage)

            if (folderParent === 0) {
                studyRepoFoldersContainer.appendChild(placeholderMessageCon);
            } else {
                folderOfFoldersContainer.innerHTML = "";
                folderOfFoldersContainer.appendChild(placeholderMessageCon);
            }
        } else {
            if (folderParent === 0) {
                folderParent = null;
            } else {
                folderOfFoldersContainer.innerHTML = "";
                foldersCon = folderOfFoldersContainer
            }
            for (const folder of folders) {
                if (folder.parent_folder_id === folderParent) {
                    new createFolderCards(folder.id, folder.foldername, foldersCon);
                }
            }
        }
    }
}

async function getRepoFolder() {
    const folderId = localStorage.getItem("currentFolder");
    const res = await fetch(`http://localhost:3000/repos/${folderId}/folder`, {
        credentials: 'include'
    })

    const folder = await res.json();

    if (res.ok) {
        new buildFolderContent(folder.id, folder.foldername, folder.parent_folder_id);
    } else {
        return folder.error
    }
}

async function createRepoFolder(repoId, folderName, parent = null) {
    const payload = {
        id: repoId,
        folderName: folderName,
        folderParent: parent
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

async function deleteRepoFolder(folderId) {
    const currentRepo = parseInt(localStorage.getItem("currentRepo"))

    const res = await fetch(`http://localhost:3000/repos/${currentRepo}/${folderId}/folders`, {
        method: 'DELETE',
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        const dialogText = "Folder deleted successfully."
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
        const dialogText = data.error  || "Something went wrong";
        const btnArr = [
            {
                btnId: "dialogOkayBtn",
                btnText: "Okay"
            }
        ]
        new createDialog(dialogText, btnArr);
    }
}

async function getRepoNotes(repoId, parentFolder = 0) {
    const res = await fetch(`http://localhost:3000/repos/${repoId}/${parentFolder}/notes`, {
        credentials: 'include'
    })

    const notes = await res.json();
    const studyRepoNotesContainer = document.getElementById("studyRepoNotesContainer");
    const notesOfFolderContainer = document.getElementById("notesOfFolderContainer");
    let notesCon = studyRepoNotesContainer;

    if (res.ok) {
        if (notes.length === 0) {
            const placeholderMessageCon = document.createElement("div")
            const placeholderMessage = document.createElement("p")
            placeholderMessage.classList.add("placeholderMessageElements");
            placeholderMessage.textContent = "No notes yet"

            placeholderMessageCon.appendChild(placeholderMessage)

            if (parentFolder === 0) {
                studyRepoNotesContainer.appendChild(placeholderMessageCon);
            } else {
                notesOfFolderContainer.innerHTML = "";
                notesOfFolderContainer.appendChild(placeholderMessageCon);
            }
        } else {
            if (parentFolder === 0) {
                parentFolder = null;
            } else {
                notesOfFolderContainer.innerHTML = "";
                notesCon = notesOfFolderContainer;
            }
            for (const note of notes) {
                if (note.folder_id === parentFolder) {
                    new createNoteCards(note.id, note.title, note.content, notesCon);
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

async function deleteRepoNote(noteId) {
    const currentRepo = parseInt(localStorage.getItem("currentRepo"))

    const res = await fetch(`http://localhost:3000/repos/${currentRepo}/${noteId}/notes`, {
        method: 'DELETE',
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        const dialogText = "Note deleted successfully."
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
        const dialogText = data.error || "Something went wrong";
        const btnArr = [
            {
                btnId: "dialogOkayBtn",
                btnText: "Okay"
            }
        ]
        new createDialog(dialogText, btnArr);
    }
}

async function deleteRepoDocument(fileId) {
    const currentRepo = parseInt(localStorage.getItem("currentRepo"))

    const res = await fetch(`http://localhost:3000/files/${currentRepo}/${fileId}`, {
        method: 'DELETE',
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        const dialogText = "Document deleted successfully."
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
        const dialogText = data.error || "Something went wrong";
        const btnArr = [
            {
                btnId: "dialogOkayBtn",
                btnText: "Okay"
            }
        ]
        new createDialog(dialogText, btnArr);
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
    const Pages = [loginPageWrapper, registrationPageWrapper, homePageWrapper, settingsPageWrapper, studyReposPageWrapper, createStudyRepoPageWrapper, studyRepoPageWrapper, studyRepoNotePageWrapper, studyRepoFolderPageWrapper, addDocumentPageWrapper];
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
        studyRepoFolderPageWrapper.classList.remove("Hide")
        await getRepoFolder();
    } else if (currentPage === "addDocumentPage") {
        addDocumentPageWrapper.classList.remove("Hide");
    } else {
        loginPageWrapper.classList.remove("Hide");
    }
}

async function init() {
    await showCurrentPage();
    await showCurrentUser();
}

init();