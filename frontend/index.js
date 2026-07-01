import { getNoteContent, clearhistory } from "./noteEditor";
import Chart from 'chart.js/auto';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

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
const studyRepoDocumentsPageWrapper = document.getElementById("studyRepoDocumentsPageWrapper");
const goalsPageWrapper = document.getElementById("goalsPageWrapper");
const createGoalPageWrapper = document.getElementById("createGoalPageWrapper");

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
const openDocumentsBtn = document.getElementById("openDocumentsBtn");

const settingBackBtn = document.getElementById("settingBackBtn");
const studyReposBackBtn = document.getElementById("studyReposBackBtn");
const createStudyRepoBackBtn = document.getElementById("createStudyRepoBackBtn");
const studyRepoBackBtn = document.getElementById("studyRepoBackBtn");
const studyRepoNoteBackBtn = document.getElementById("studyRepoNoteBackBtn");
const studyRepoFolderBackBtn = document.getElementById("studyRepoFolderBackBtn");
const addDocumentBackBtn = document.getElementById("addDocumentBackBtn");
const studyRepoDocumentsBackBtn = document.getElementById("studyRepoDocumentsBackBtn");
const createFlashcardBackBtn = document.getElementById("createFlashcardBackBtn");
const goalsBackBtn = document.getElementById("goalsBackBtn");
const createGoalBackBtn = document.getElementById("createGoalBackBtn");

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
const placeholderMessageConDocs = document.getElementById("placeholderMessageConDocs");
const placeholderMessageDocs = document.getElementById("placeholderMessageDocs");
const documentContentContainer = document.getElementById("documentContentContainer");
const recentDocumentsSummary = document.getElementById("recentDocumentsSummary");
const recentStudyReposSummary = document.getElementById("recentStudyReposSummary");
const fileFullViewerWrapper = document.getElementById("fileFullViewerWrapper");
const fileFullViewerBackBtn = document.getElementById("fileFullViewerBackBtn");
const documentName = document.getElementById("documentName");
const viewerDocumentContentContainer = document.getElementById("viewerDocumentContentContainer");
const recentAnalyticsSummary = document.getElementById("recentAnalyticsSummary");
const addDocumentPageMessageBox = document.getElementById("addDocumentPageMessageBox");
const createFlashcardPageWrapper = document.getElementById("createFlashcardPageWrapper");
const addFlashcardBtn = document.getElementById("addFlashcardBtn");
const addGoalBtn = document.getElementById("addGoalBtn");
const editGoalsBtn = document.getElementById("editGoalsBtn");
const openStudyGoals = document.getElementById("openStudyGoals");

const createFlashcardTitleInput = document.getElementById("createFlashcardTitleInput");
const createFlashcardAnswerInput = document.getElementById("createFlashcardAnswerInput");
const saveFlashcardBtn = document.getElementById("saveFlashcardBtn");
const cancelFlashcardBtn = document.getElementById("cancelFlashcardBtn");
const createFlashcardPageMessageBox = document.getElementById("createFlashcardPageMessageBox");
const flashcardViewerWrapper = document.getElementById("flashcardViewerWrapper");
const studyGoalsContentContainer = document.getElementById("studyGoalsContentContainer");

const dailyGoalBtn = document.getElementById("dailyGoalBtn");
const weeklyGoalBtn = document.getElementById("weeklyGoalBtn");
const monthlyGoalBtn = document.getElementById("monthlyGoalBtn");
const yearlyGoalBtn = document.getElementById("yearlyGoalBtn");
const customGoalBtn = document.getElementById("customGoalBtn");
const datePickerContainer = document.getElementById("datePickerContainer");

const studyTimeGoal = document.getElementById("studyTimeGoal");
const notesToReviewGoal = document.getElementById("notesToReviewGoal");
const flashcardsToReviewGoal = document.getElementById("flashcardsToReviewGoal");
const saveGoalBtn = document.getElementById("saveGoalBtn");
const cancelGoalBtn = document.getElementById("cancelGoalBtn");

const studyDurationContainer = document.getElementById("studyDurationContainer");
const numNotesContainer = document.getElementById("numNotesContainer");
const numFlashcardsContainer = document.getElementById("numFlashcardsContainer");

const recentGoalsSummary = document.getElementById("recentGoalsSummary");

const goalDurationOrNumConLabel = document.getElementById("goalDurationOrNumConLabel")
const setStreakConditionBtn = document.getElementById("setStreakConditionBtn");
const cancelStreakConditionBtn = document.getElementById("cancelStreakConditionBtn");
const confirmStreakConditionBtn = document.getElementById("confirmStreakConditionBtn");

let repoToDelete = "";
let isMultiSelect = false;
let reposToDelete = [];

let hours = 0
let minutes = 30;
let noteCount = 5;
let cardCount = 20;

const editStudyRepoBtn = document.getElementById("editStudyRepoBtn");
let studyRepoEditMode = false;

let folderToDelete = "";
let noteToDelete = "";
let documentToDelete = "";

let showCalendar = false;
let timeframeOption = "";
let goalTypeOption = "study_time";
let endTime = "";

let chartInstance = null;

let goalSelectionMode = false;
let goalsSelected = [];

const notesViewed = [];
const flashcardsViewed = [];

document.querySelectorAll('.stepper button').forEach(btn => {
    btn.onclick = () => {
      const amt = Number(btn.dataset.amount);
      if (btn.dataset.target === 'hours') {
        hours = Math.max(0, Math.min(23, hours + amt));
        document.getElementById('hours').textContent = hours;
      } else {
        minutes = Math.max(0, Math.min(55, minutes + amt));
        document.getElementById('minutes').textContent = minutes;
      }
    };
});

document.getElementById('inc-notes').onclick = () => {
    noteCount += 1;
    document.getElementById('notes-value').textContent = noteCount;
};
document.getElementById('dec-notes').onclick = () => {
    noteCount = Math.max(1, noteCount - 1);
    document.getElementById('notes-value').textContent = noteCount;
};

document.getElementById('inc-cards').onclick = () => {
    cardCount += 5;
    document.getElementById('cards-value').textContent = cardCount;
};
document.getElementById('dec-cards').onclick = () => {
    cardCount = Math.max(5, cardCount - 5);
    document.getElementById('cards-value').textContent = cardCount;
};

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
            await startRepoSession();
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
        this.studyRepoFlashcardsContainer = document.createElement("div");

        this.studyRepoFoldersTitleContainer = document.createElement("div");
        this.studyRepoNotesTitleContainer = document.createElement("div");
        this.studyRepoFlashcardsTitleContainer = document.createElement("div");

        this.studyRepoFoldersElementsContainer = document.createElement("div");
        this.studyRepoNotesElementsContainer = document.createElement("div");
        this.studyRepoFlashcardsElementsContainer = document.createElement("div");

        this.studyRepoFoldersTitle = document.createElement("h2");
        this.studyRepoNotesTitle = document.createElement("h2");
        this.studyRepoFlashcardsTitle = document.createElement("h2");

        this.studyRepoFoldersContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoNotesContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoFlashcardsContainer.classList.add("Study-Repo-Content-Container");

        this.studyRepoFoldersTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoNotesTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoFlashcardsTitleContainer.classList.add("Study-Repo-Content-Container-Title");

        this.studyRepoFoldersElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoNotesElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoFlashcardsElementsContainer.classList.add("Study-Repo-Content-Container-Elements");

        this.studyRepoFoldersElementsContainer.id = "folderOfFoldersContainer";
        this.studyRepoNotesElementsContainer.id = "notesOfFolderContainer";
        this.studyRepoFlashcardsElementsContainer.id = "flashcardsOfFolderContainer";

        this.studyRepoFoldersTitle.textContent = "FOLDERS";
        this.studyRepoNotesTitle.textContent = "NOTES";
        this.studyRepoFlashcardsTitle.textContent = "FLASHCARDS";

        this.studyRepoFoldersTitleContainer.appendChild(this.studyRepoFoldersTitle);
        this.studyRepoNotesTitleContainer.appendChild(this.studyRepoNotesTitle);
        this.studyRepoFlashcardsTitleContainer.appendChild(this.studyRepoFlashcardsTitle);

        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersTitleContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesTitleContainer)
        this.studyRepoFlashcardsContainer.appendChild(this.studyRepoFlashcardsTitleContainer)

        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersElementsContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesElementsContainer);
        this.studyRepoFlashcardsContainer.appendChild(this.studyRepoFlashcardsElementsContainer);

        folderContentContainer.appendChild(this.studyRepoFlashcardsContainer);
        folderContentContainer.appendChild(this.studyRepoFoldersContainer);
        folderContentContainer.appendChild(this.studyRepoNotesContainer);

        this.getFolders(this.folderId);
        this.getNotes(this.folderId);
        this.getFlashcards(this.folderId);
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

    async getFlashcards(folderId) {
        const currentRepo = localStorage.getItem("currentRepo")
        await getRepoFlashcards(currentRepo, folderId);
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
        this.studyRepoFlashcardsContainer = document.createElement("div");

        this.studyRepoDocumentsTitleContainer = document.createElement("div");
        this.studyRepoFoldersTitleContainer = document.createElement("div");
        this.studyRepoNotesTitleContainer = document.createElement("div");
        this.studyRepoFlashcardsTitleContainer = document.createElement("div");

        this.studyRepoDocumentsElementsContainer = document.createElement("div");
        this.studyRepoFoldersElementsContainer = document.createElement("div");
        this.studyRepoNotesElementsContainer = document.createElement("div");
        this.studyRepoFlashcardsElementsContainer = document.createElement("div");

        this.studyRepoDocumentsTitle = document.createElement("h2");
        this.studyRepoFoldersTitle = document.createElement("h2");
        this.studyRepoNotesTitle = document.createElement("h2");
        this.studyRepoFlashcardsTitle = document.createElement("h2");

        this.studyRepoDocumentsContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoFoldersContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoNotesContainer.classList.add("Study-Repo-Content-Container");
        this.studyRepoFlashcardsContainer.classList.add("Study-Repo-Content-Container");

        this.studyRepoDocumentsTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoFoldersTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoNotesTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyRepoFlashcardsTitleContainer.classList.add("Study-Repo-Content-Container-Title");

        this.studyRepoDocumentsElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoFoldersElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoNotesElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoFlashcardsElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyRepoFlashcardsElementsContainer.classList.add("flashcardsCon");

        this.studyRepoDocumentsElementsContainer.id = "studyRepoDocumentsContainer"
        this.studyRepoFoldersElementsContainer.id = "studyRepoFoldersContainer";
        this.studyRepoNotesElementsContainer.id = "studyRepoNotesContainer";
        this.studyRepoFlashcardsElementsContainer.id = "studyRepoFlashcardsContainer";

        this.studyRepoDocumentsTitle.textContent = "DOCUMENTS";
        this.studyRepoFoldersTitle.textContent = "FOLDERS";
        this.studyRepoNotesTitle.textContent = "NOTES";
        this.studyRepoFlashcardsTitle.textContent = "FLASHCARDS";

        this.studyRepoDocumentsTitleContainer.appendChild(this.studyRepoDocumentsTitle);
        this.studyRepoFoldersTitleContainer.appendChild(this.studyRepoFoldersTitle);
        this.studyRepoNotesTitleContainer.appendChild(this.studyRepoNotesTitle);
        this.studyRepoFlashcardsTitleContainer.appendChild(this.studyRepoFlashcardsTitle);

        this.studyRepoDocumentsContainer.appendChild(this.studyRepoDocumentsTitleContainer);
        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersTitleContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesTitleContainer)
        this.studyRepoFlashcardsContainer.appendChild(this.studyRepoFlashcardsTitleContainer)

        this.studyRepoDocumentsContainer.appendChild(this.studyRepoDocumentsElementsContainer);
        this.studyRepoFoldersContainer.appendChild(this.studyRepoFoldersElementsContainer);
        this.studyRepoNotesContainer.appendChild(this.studyRepoNotesElementsContainer);
        this.studyRepoFlashcardsContainer.appendChild(this.studyRepoFlashcardsElementsContainer);

        studyRepoContentContainer.appendChild(this.studyRepoDocumentsContainer);
        studyRepoContentContainer.appendChild(this.studyRepoFlashcardsContainer);
        studyRepoContentContainer.appendChild(this.studyRepoFoldersContainer);
        studyRepoContentContainer.appendChild(this.studyRepoNotesContainer);

        this.getFolders(this.repoId);
        this.getNotes(this.repoId);
        this.getDocuments();
        this.getFlashcards(this.repoId);
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

    async getFlashcards(repo_id) {
        await getRepoFlashcards(repo_id)
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
            if (!notesViewed.includes(this.noteId)) {
                notesViewed.push(this.noteId)
            }
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

class createRecentDocumentCards {
    constructor(fileId, fileName, fileUrl, fileType, fileSize, fileCreation) {
        this.fileId = fileId;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileCreation = fileCreation;

        const timestamp = this.fileCreation;

        const [date, timePart] = timestamp.split("T");
        const time = timePart.split(".")[0];

        this.card = document.createElement("div");
        this.card.classList.add("recentDocumentCard");

        this.cardDesCon = document.createElement("div");
        this.cardDesConName = document.createElement("div");
        this.cardDesConCreation = document.createElement("div");

        this.cardFileCon = document.createElement("div");
        this.cardFile = document.createElement("img");
        this.cardFile.classList.add("overlayFile")
        this.cardFile.src = this.fileUrl

        this.cardFileCon.appendChild(this.cardFile);

        this.fileSizeCon = document.createElement("div");
        this.fileSizeInfo = document.createElement("p");
        this.fileSizeInfo.textContent = this.formatBytes(this.fileSize);

        this.viewBtnCon = document.createElement("div");
        this.viewBtnCon.classList.add("overlayViewBtnCon")
        this.viewBtn = document.createElement("button");
        this.viewBtn.textContent = "View File"
        this.viewBtnCon.appendChild(this.viewBtn)

        this.fileSizeCon.appendChild(this.fileSizeInfo);

        this.topContainer = document.createElement("div");
        this.topContainer.classList.add("overlayTopCon")
        this.topContainer.appendChild(this.cardFileCon);
        this.topContainer.appendChild(this.fileSizeCon);

        this.overlayCon = document.createElement("div");
        this.overlayCon.classList.add("moreInfoOverlay");
        this.overlayCon.classList.add("Hide");

        this.overlayCon.appendChild(this.topContainer);
        this.overlayCon.appendChild(this.viewBtnCon);

        this.cardDesName = document.createElement("p");
        this.cardDesName.classList.add("makeBold");
        this.cardDesCreation = document.createElement("p");

        this.cardDesName.textContent = this.fileName;
        this.cardDesCreation.textContent = `Date created: ${date} at ${time}`;

        this.cardDesConName.appendChild(this.cardDesName);
        this.cardDesConCreation.appendChild(this.cardDesCreation);

        this.cardDesCon.appendChild(this.cardDesConName);
        this.cardDesCon.appendChild(this.cardDesConCreation);

        this.card.appendChild(this.cardDesCon);

        this.card.appendChild(this.overlayCon)

        recentDocumentsSummary.appendChild(this.card);

        this.card.addEventListener("mouseenter", () => {
            this.overlayCon.classList.remove("Hide");
        })

        this.card.addEventListener("mouseleave", () => {
            this.overlayCon.classList.add("Hide");
        })

        this.viewBtn.addEventListener("click", () => {
            fileFullViewerWrapper.classList.remove("Hide");
            viewerDocumentContentContainer.innerHTML = "";
            documentName.textContent = this.fileName;
            if (this.fileType.startsWith("image/")) {
                const fullImgCon = document.createElement("div");
                const fullImg = document.createElement("img");
                fullImg.classList.add("fullImgStyle")
                fullImg.src = this.fileUrl;
                fullImgCon.appendChild(fullImg)
                viewerDocumentContentContainer.appendChild(fullImgCon)
            }
        })
    }

    formatBytes(bytes) {
        if (bytes < 1024) {
            return `${bytes} B`;
        }
    
        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} KB`;
        }
    
        if (bytes < 1024 * 1024 * 1024) {
            return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
        }
    
        return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    }
}

class createDocumentCards {
    constructor(fileId, fileName, fileUrl, fileType, fileSize, container) {
        this.fileId = fileId;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.container = container;

        this.fileContainer = document.createElement("div");
        if (this.container == documentContentContainer) {
            this.container.classList.add("Document-Container-Main");
        } else {
            this.container.classList.add("Document-Container");
        }
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

        this.container.appendChild(this.fileContainer);

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

        this.fileContainer.addEventListener("click", () => {
            fileFullViewerWrapper.classList.remove("Hide");
            viewerDocumentContentContainer.innerHTML = "";
            documentName.textContent = this.fileName;
            if (this.fileType.startsWith("image/")) {
                const fullImgCon = document.createElement("div");
                const fullImg = document.createElement("img");
                fullImg.classList.add("fullImgStyle")
                fullImg.src = this.fileUrl;
                fullImgCon.appendChild(fullImg)
                viewerDocumentContentContainer.appendChild(fullImgCon)
            }
        })
    }
}

class createFlashcardCards {
    constructor(flashcardId, front, back, flashcardCon) {
        this.flashcardId = flashcardId;
        this.front = front;
        this.back = back;
        this.flashcardCon = flashcardCon;
        
        let switchSide = false;

        this.flashcardCard = document.createElement("div");
        this.flashcardCard.classList.add("flashcardCard")
        this.flashcardText = document.createElement("p");

        this.flashcardCard.appendChild(this.flashcardText);

        this.flashcardText.textContent = this.front;

        this.flashcardCon.appendChild(this.flashcardCard)

        this.flashcardCardFull = document.createElement("div");

        this.closeFullViewBtn = document.createElement("button")
        this.closeFullViewBtn.textContent = "Close";
        this.closeFullViewBtn.classList.add("closeFullViewBtn");

        this.flashcardCardFull.appendChild(this.closeFullViewBtn)

        this.flashcardCard.addEventListener("click", () => {
            if (!flashcardsViewed.includes(this.flashcardId)) {
                flashcardsViewed.push(this.flashcardId)
            }
            flashcardViewerWrapper.classList.remove("Hide")
            document.body.style.overflow = "hidden";
            this.flashcardCardFull.classList.add("flashcardCardFull");
            this.flashcardTextFull = document.createElement("p");
            this.flashcardTextFull.textContent = this.front;
            this.flashcardCardFull.appendChild(this.flashcardTextFull);
            flashcardViewerWrapper.appendChild(this.flashcardCardFull);
        })

        this.flashcardCardFull.addEventListener("click", () => {
            switchSide = !switchSide;
            if (switchSide) {
                this.flashcardTextFull.textContent = this.back;
            } else {
                this.flashcardTextFull.textContent = this.front;
            }
        })

        this.closeFullViewBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            this.flashcardCardFull.removeChild(this.flashcardTextFull);
            flashcardViewerWrapper.classList.add("Hide")
            document.body.style.overflow = "scroll";
            flashcardViewerWrapper.innerHTML = "";
            switchSide = false;
        })
    }
}

class createRecentReposCards {
    constructor(repoId, repoName, lastAccessed) {
        this.repoId = repoId;
        this.repoName = repoName;
        this.lastAccessed = lastAccessed;

        const dateObj = new Date(this.lastAccessed);

        const date = dateObj.toLocaleDateString("en-GB");
        const time = dateObj.toLocaleTimeString("en-GB", {
            hour12: false
        });

        this.card = document.createElement("div");
        this.card.classList.add("recentDocumentCard");

        this.cardDesCon = document.createElement("div");
        this.cardDesConName = document.createElement("div");
        this.cardDesConCreation = document.createElement("div");

        this.cardDesName = document.createElement("p");
        this.cardDesName.classList.add("makeBold");
        this.cardDesCreation = document.createElement("p");

        this.cardDesName.textContent = this.repoName;
        this.cardDesCreation.textContent = `last accessed at: ${date} at ${time}`;

        this.cardDesConName.appendChild(this.cardDesName);
        this.cardDesConCreation.appendChild(this.cardDesCreation);

        this.cardDesCon.appendChild(this.cardDesConName);
        this.cardDesCon.appendChild(this.cardDesConCreation);

        this.card.appendChild(this.cardDesCon);

        recentStudyReposSummary.appendChild(this.card);
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

class createStudyGoalContent {
    constructor(userId) {
        this.userId = userId

        studyGoalsContentContainer.innerHTML = "";

        this.studyGoalsLimitedContainer = document.createElement("div");
        this.studyGoalsUnlimitedContainer = document.createElement("div");
        this.studyGoalsCompletedContainer = document.createElement("div");
        this.studyGoalsUncompletedContainer = document.createElement("div");

        this.studyGoalsLimitedTitleContainer = document.createElement("div");
        this.studyGoalsUnlimitedTitleContainer = document.createElement("div");
        this.studyGoalsCompletedTitleContainer = document.createElement("div");
        this.studyGoalsUncompletedTitleContainer = document.createElement("div");

        this.studyGoalsLimitedElementsContainer = document.createElement("div");
        this.studyGoalsUnlimitedElementsContainer = document.createElement("div");
        this.studyGoalsCompletedElementsContainer = document.createElement("div");
        this.studyGoalsUncompletedElementsContainer = document.createElement("div");

        this.studyGoalsLimitedTitle = document.createElement("h2");
        this.studyGoalsUnlimitedTitle = document.createElement("h2");
        this.studyGoalsCompletedTitle = document.createElement("h2");
        this.studyGoalsUncompletedTitle = document.createElement("h2");

        this.studyGoalsLimitedContainer.classList.add("Study-Repo-Content-Container");
        this.studyGoalsUnlimitedContainer.classList.add("Study-Repo-Content-Container");
        this.studyGoalsCompletedContainer.classList.add("Study-Repo-Content-Container");
        this.studyGoalsUncompletedContainer.classList.add("Study-Repo-Content-Container");

        this.studyGoalsLimitedTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyGoalsUnlimitedTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyGoalsCompletedTitleContainer.classList.add("Study-Repo-Content-Container-Title");
        this.studyGoalsUncompletedTitleContainer.classList.add("Study-Repo-Content-Container-Title");

        this.studyGoalsLimitedElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyGoalsUnlimitedElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyGoalsCompletedElementsContainer.classList.add("Study-Repo-Content-Container-Elements");
        this.studyGoalsUncompletedElementsContainer.classList.add("Study-Repo-Content-Container-Elements");

        this.studyGoalsLimitedElementsContainer.id = "studyGoalsLimitedContainer"
        this.studyGoalsUnlimitedElementsContainer.id = "studyGoalsUnlimitedContainer";
        this.studyGoalsCompletedElementsContainer.id = "studyGoalsCompletedContainer";
        this.studyGoalsUncompletedElementsContainer.id = "studyGoalsUncompletedContainer";

        this.studyGoalsCompletedElementsContainer.classList.add("noSelectCon");
        this.studyGoalsUncompletedElementsContainer.classList.add("noSelectCon");

        this.studyGoalsLimitedTitle.textContent = "LIMITED GOALS";
        this.studyGoalsUnlimitedTitle.textContent = "UNLIMITED GOALS";
        this.studyGoalsCompletedTitle.textContent = "COMPLETED GOALS";
        this.studyGoalsUncompletedTitle.textContent = "UNCOMPLETED GOALS";

        this.studyGoalsLimitedTitleContainer.appendChild(this.studyGoalsLimitedTitle);
        this.studyGoalsUnlimitedTitleContainer.appendChild(this.studyGoalsUnlimitedTitle);
        this.studyGoalsCompletedTitleContainer.appendChild(this.studyGoalsCompletedTitle);
        this.studyGoalsUncompletedTitleContainer.appendChild(this.studyGoalsUncompletedTitle);

        this.studyGoalsLimitedContainer.appendChild(this.studyGoalsLimitedTitleContainer);
        this.studyGoalsUnlimitedContainer.appendChild(this.studyGoalsUnlimitedTitleContainer);
        this.studyGoalsCompletedContainer.appendChild(this.studyGoalsCompletedTitleContainer)
        this.studyGoalsUncompletedContainer.appendChild(this.studyGoalsUncompletedTitleContainer)

        this.studyGoalsLimitedContainer.appendChild(this.studyGoalsLimitedElementsContainer);
        this.studyGoalsUnlimitedContainer.appendChild(this.studyGoalsUnlimitedElementsContainer);
        this.studyGoalsCompletedContainer.appendChild(this.studyGoalsCompletedElementsContainer);
        this.studyGoalsUncompletedContainer.appendChild(this.studyGoalsUncompletedElementsContainer);

        studyGoalsContentContainer.appendChild(this.studyGoalsLimitedContainer);
        studyGoalsContentContainer.appendChild(this.studyGoalsUnlimitedContainer);
        studyGoalsContentContainer.appendChild(this.studyGoalsCompletedContainer);
        studyGoalsContentContainer.appendChild(this.studyGoalsUncompletedContainer);
    }
}

class createGoalCard {
    constructor(goalId, goalTimeframe, goalType, goalStartedAt, goalWillEndAt, goalLength, goalContainer) {
        this.goalId = goalId;
        this.goalTimeframe = goalTimeframe;
        this.goalType = goalType;
        this.goalStartedAt = goalStartedAt;
        this.goalWillEndAt = goalWillEndAt;
        this.goalLength = goalLength;
        this.goalContainer = goalContainer;
        this.selected = false;

        const [startedAtDate, startedAtTime] = this.normaliseTime(this.goalStartedAt);
        const [willEndAtDate, willEndAtTime] = this.normaliseTime(this.goalWillEndAt);

        this.goalCard = document.createElement("div");
        this.goalCard.classList.add("Goal-Card-Container");

        this.goalCardTypeCon = document.createElement("div");
        this.goalCard.classList.add("Goal-Card-Type-Container")
        this.goalCardType = document.createElement("p");
        if (this.goalType === "study_time") {
            this.goalCardType.textContent = "Study Time";
            this.goalCardLength = document.createElement("p");
            this.goalCardLength.textContent = `Duration: ${this.workOutAppropriateDuration(Number(this.goalLength))}`;
        } else if (this.goalType === "notes_to_review") {
            this.goalCardType.textContent = "Notes To Review";
            this.goalCardLength = document.createElement("p");
            this.goalCardLength.textContent = `Number: ${this.goalLength} notes`;
        } else if (this.goalType === "flashcards_to_review") {
            this.goalCardType.textContent = "Flashcards To Review";
            this.goalCardLength = document.createElement("p");
            this.goalCardLength.textContent = `Number: ${this.goalLength} cards`;
        }
        this.goalCardTypeCon.appendChild(this.goalCardType)

        this.goalCardMoreInfoCon = document.createElement("div");
        this.goalCardMoreInfoCon.classList.add("Goal-Card-More-Info-Container")
        this.goalCardTimeframeCon = document.createElement("div");
        this.goalStartedAtCon = document.createElement("div");
        this.goalWillEndAtCon = document.createElement("div");
        this.goalLengthCon = document.createElement("div")

        this.goalCardTimeframe = document.createElement("p");
        this.goalCardTimeframe.textContent = `timeframe: ${this.goalTimeframe}`;
        this.goalCardTimeframeCon.appendChild(this.goalCardTimeframe)
        this.goalStartedAtTime = document.createElement("p");
        this.goalStartedAtTime.textContent = `start: ${startedAtDate} at ${startedAtTime}`;
        this.goalStartedAtCon.appendChild(this.goalStartedAtTime)
        this.goalWillEndAtTime = document.createElement("p");
        this.goalWillEndAtTime.textContent = `end: ${willEndAtDate} at ${willEndAtTime}`;
        this.goalWillEndAtCon.appendChild(this.goalWillEndAtTime)
        
        this.goalLengthCon.appendChild(this.goalCardLength)

        this.goalCardMoreInfoCon.appendChild(this.goalCardTimeframeCon);
        this.goalCardMoreInfoCon.appendChild(this.goalStartedAtCon);
        this.goalCardMoreInfoCon.appendChild(this.goalWillEndAtCon);
        this.goalCardMoreInfoCon.appendChild(this.goalLengthCon);

        this.goalCard.appendChild(this.goalCardTypeCon)
        this.goalCard.appendChild(this.goalCardMoreInfoCon)

        this.goalContainer.appendChild(this.goalCard);

        this.goalCard.addEventListener("click", () => {
            if (goalSelectionMode && !(this.goalCard.parentElement.classList.contains("noSelectCon"))) {
                this.selected = !this.selected;
                if (this.selected) {
                    goalsSelected.push(this.goalId);
                    this.goalCard.classList.remove("Selected-Goal-Card-Style")
                } else {
                    const index = goalsSelected.indexOf(this.goalId)
                    goalsSelected.splice(index, 1);
                    this.goalCard.classList.add("Selected-Goal-Card-Style")
                }
            }
            if (goalsSelected.length > 0) {
                confirmStreakConditionBtn.classList.remove("Hide");
            } else {
                confirmStreakConditionBtn.classList.add("Hide");
            }
            console.log(goalsSelected);
        })
    }

    normaliseTime(dateAndTime) {
        const dateObj = new Date(dateAndTime);

        const date = dateObj.toLocaleDateString("en-GB");
        const time = dateObj.toLocaleTimeString("en-GB", {
            hour12: false
        });

        return [date, time];
    }

    workOutAppropriateDuration(durationInMins) {
        console.log(durationInMins);
        if (durationInMins % 60 === durationInMins) {
            return durationInMins + "m";
        } else {
            let minutes = durationInMins % 60
            let hours = (durationInMins - minutes) / 60
            return `${hours}h and ${minutes}m`
        }
    }
}

class createGoalsReminderCards {
    constructor(goalId, goalEndTime, goalCompleted, goalLength, goalType) {
        this.goalId = goalId;
        this.goalEndTime = goalEndTime;
        this.goalCompleted = goalCompleted;
        this.goalLength = goalLength;
        this.goalType = goalType;

        const dateObj = new Date(this.goalEndTime);

        const date = dateObj.toLocaleDateString("en-GB");
        const time = dateObj.toLocaleTimeString("en-GB", {
            hour12: false
        });

        this.card = document.createElement("div");
        this.card.classList.add("recentGoalCard");

        this.cardTypeCon = document.createElement("div");
        this.cardTypeCon.classList.add("Goal-Card-Summary-Type-Container")
        this.cardType = document.createElement("p");
        this.cardType.classList.add("summaryGoalType");
        this.cardType.textContent = this.goalType;
        if (this.goalType === "study_time") {
            this.cardType.textContent = "Study";
        } else if (this.goalType === "notes_to_review") {
            this.cardType.textContent = "Notes";
        } else if (this.goalType === "flashcards_to_review") {
            this.cardType.textContent = "Flashcards";
        }
        this.cardTypeCon.appendChild(this.cardType);

        this.moreInfoCon = document.createElement("div");
        this.moreInfoCon.classList.add("Goal-Card-Summary-More-Info-Container")

        this.endTimeCon = document.createElement("div");
        this.endTime = document.createElement("p");
        this.endTime.textContent = `ends on ${date} at ${time}`;
        this.endTimeCon.appendChild(this.endTime);

        this.lengthCon = document.createElement("div");
        this.length = document.createElement("p");
        if (this.goalType === "study_time") {
            this.length.textContent = this.workOutAppropriateDuration(this.goalLength);
        } else if (this.goalType === "notes_to_review") {
            this.length.textContent = `${this.goalLength} notes`;
        } else if (this.goalType === "flashcards_to_review") {
            this.length.textContent = `${this.goalLength} cards`;
        }
        this.lengthCon.appendChild(this.length);

        this.completedCon = document.createElement("div");
        this.completed = document.createElement("p");
        this.completed.textContent = `you have until ${date} at ${time}`;
        this.completedCon.appendChild(this.completed);

        this.moreInfoCon.appendChild(this.endTimeCon);
        this.moreInfoCon.appendChild(this.lengthCon);
        this.moreInfoCon.appendChild(this.completedCon);

        this.card.appendChild(this.cardTypeCon);
        this.card.appendChild(this.moreInfoCon);

        recentGoalsSummary.appendChild(this.card);
    }

    workOutAppropriateDuration(durationInMins) {
        console.log(durationInMins);
        if (durationInMins % 60 === durationInMins) {
            return durationInMins + "m";
        } else {
            let minutes = durationInMins % 60
            let hours = (durationInMins - minutes) / 60
            return `${hours}h and ${minutes}m`
        }
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

openDocumentsBtn.addEventListener("click", async () => {
    setCurrentPage("documentsPage");
    await showCurrentPage();
})

studyRepoBackBtn.addEventListener("click", async () => {
    await endRepoSession(notesViewed.length, flashcardsViewed.length);
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
    location.reload();
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

fileFullViewerBackBtn.addEventListener("click", () => {
    fileFullViewerWrapper.classList.add("Hide");
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

studyRepoDocumentsBackBtn.addEventListener("click", async () => {
    setCurrentPage("homePage");
    await showCurrentPage();
})

createFlashcardBackBtn.addEventListener("click", async () => {
    setCurrentPage("studyRepoPage");
    await showCurrentPage();
})

goalsBackBtn.addEventListener("click", async () => {
    setCurrentPage("homePage");
    await showCurrentPage();
})

createGoalBackBtn.addEventListener("click", async () => {
    setCurrentPage("goalsPage");
    await showCurrentPage();
})

openStudyGoals.addEventListener("click", async () => {
    setCurrentPage("goalsPage");
    await showCurrentPage();
})

addGoalBtn.addEventListener("click", async () => {
    setCurrentPage("createGoalPage");
    await showCurrentPage();
})

addFlashcardBtn.addEventListener("click", async () => {
    setCurrentPage("addFlashcardPage");
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

setStreakConditionBtn.addEventListener("click", async () => {
    dialogWrapper.classList.remove("Hide")
    dialogWrapper.innerHTML = "";
    document.body.style.overflow = "hidden";
    const dialogText = "You will now select goals which you will ccomplete to contribute to your current streak. Click start below to continue."
    const btnsArr = [
        {
            btnId: "comfirmStartGoalSelectionBtn",
            btnText: "Start",
        },
        {
            btnId: "confirmCancelGoalSelectionBtn",
            btnText: "Cancel"
        }
    ]
    new createDialog(dialogText, btnsArr)
})

cancelStreakConditionBtn.addEventListener("click", () => {
    goalsSelected = [];
    cancelStreakConditionBtn.classList.add("Hide");
    setStreakConditionBtn.classList.remove("Hide");
    removeSelectionStyle();
})

confirmStreakConditionBtn.addEventListener("click", async () => {
    const resultArr = [];
    for (const goalId of goalsSelected) {
        const result = await updateGoalStreakStatus(goalId, true);
        resultArr.push(result)
    }
    if (resultArr.every(value => value === true)) {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        const dialogText = "Goals have been added to the streak, complete them daily to increase it."
        const btnsArr = [
            {
                btnId: "streakMadeOkayBtn",
                btnText: "Okay",
            }
        ]
        new createDialog(dialogText, btnsArr)
    } else {
        dialogWrapper.classList.remove("Hide")
        dialogWrapper.innerHTML = "";
        document.body.style.overflow = "hidden";
        const dialogText = "Adding goals to streak was unsuccessful, try again later."
        const btnsArr = [
            {
                btnId: "streakNotMadeOkayBtn",
                btnText: "Okay",
            }
        ]
        new createDialog(dialogText, btnsArr)
    }
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

async function updateGoalStreakStatus(goalId, status) {
    const payload = {
        inStreak: status
    }
    const res = await fetch(`http://localhost:3000/users/${goalId}/streak`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        return true;
    } else {
        return false
    }
}

async function uploadDocuments() {
    const currentRepo = parseInt(localStorage.getItem("currentRepo"));
    const userId = await getCurrentUserId();
    const formData = new FormData();
    selectedFiles.forEach(({ file }) => formData.append('files', file))
    formData.append('repoId', currentRepo)
    formData.append('userId', userId)

    const res = await fetch('http://localhost:3000/files/upload', {
        method: 'POST',
        credentials: 'include',
        body: formData
    })

    const data = await res.json();

    if (res.ok) {
        addDocumentBackBtn.classList.add("Hide");
        showMessageBox(addDocumentPageMessageBox, "add Document successfully, going back to studyrepo...");
        setCurrentPage("studyRepoPage");
        setTimeout(async () => await showCurrentPage(), 1000);
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
                new createDocumentCards(obj.id, obj.filename, obj.url, obj.file_type, obj.file_size, studyRepoDocumentsContainer)
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
            await addStats(await getCurrentUserId());
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

cancelRepoBtn.addEventListener("click", () => {
    createRepoNameInput.value = "";
    createRepoDescriptionInput.value = "";
})

saveFlashcardBtn.addEventListener("click", async () => {
    if (createFlashcardTitleInput.value === "" || createFlashcardAnswerInput.value === "") {
        showMessageBox(createFlashcardPageMessageBox, "Make sure both fields are completed");
    } else {
        await createRepoFlashcard(createFlashcardTitleInput.value, createFlashcardAnswerInput.value)
    }
})

cancelFlashcardBtn.addEventListener("click", () => {
    createFlashcardTitleInput.value = "";
    createFlashcardAnswerInput.value = "";
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
    } else if (event.target.id === "confirmCancelGoalSelectionBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
    } else if (event.target.id === "comfirmStartGoalSelectionBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        setStreakConditionBtn.classList.add("Hide");
        cancelStreakConditionBtn.classList.remove("Hide");
        addSelectionStyle();
    } else if (event.target.id === "streakMadeOkayBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        leaveStreakSet();
        location.reload();
    } else if (event.target.id === "streakNotMadeOkayBtn") {
        dialogWrapper.classList.add("Hide")
        document.body.style.overflowY = "scroll";
        leaveStreakSet();
        location.reload();
    }
})

function leaveStreakSet() {
    goalsSelected = [];
    addGoalBtn.disabled = false;
    editGoalsBtn.disabled = false;
    document.querySelectorAll(".Goal-Card-Container").forEach(card => {
        card.classList.remove("Selected-Goal-Card-Style");
    })
}

function addSelectionStyle() {
    goalSelectionMode = true;
    addGoalBtn.disabled = true;
    editGoalsBtn.disabled = true;
    document.querySelectorAll(".Goal-Card-Container").forEach(card => {
        if (!(card.parentElement.classList.contains("noSelectCon"))) {
            card.classList.add("Selected-Goal-Card-Style");
        }
    })
}

function removeSelectionStyle() {
    goalSelectionMode = false;
    addGoalBtn.disabled = false;
    editGoalsBtn.disabled = false;
    document.querySelectorAll(".Goal-Card-Container").forEach(card => {
        card.classList.remove("Selected-Goal-Card-Style");
    })
}

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

dailyGoalBtn.addEventListener("click", () => {
    timeframeOption = "daily";
})

weeklyGoalBtn.addEventListener("click", () => {
    timeframeOption = "weekly";
})

monthlyGoalBtn.addEventListener("click", () => {
    timeframeOption = "monthly";
})

yearlyGoalBtn.addEventListener("click", () => {
    timeframeOption = "yearly";
})

customGoalBtn.addEventListener("click", () => {
    timeframeOption = "custom"
    showCalendar = !showCalendar;
    if (showCalendar) {
        datePickerContainer.classList.remove("Hide");
        customGoalDatePicker();
    } else {
        datePickerContainer.classList.add("Hide");
    }
})

studyTimeGoal.addEventListener("click", () => {
    goalTypeOption = "study_time"
    showSelectedGoalTypeStyle();
})

notesToReviewGoal.addEventListener("click", () => {
    goalTypeOption = "notes_to_review"
    showSelectedGoalTypeStyle();
})

flashcardsToReviewGoal.addEventListener("click", () => {
    goalTypeOption = "flashcards_to_review"
    showSelectedGoalTypeStyle();
})

async function getAllUserDocuments() {
    const userId = await getCurrentUserId();
    const res = await fetch(`http://localhost:3000/files/${userId}/files`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        if (data.length === 0) {
            placeholderMessageConDocs.classList.remove("Hide");
            placeholderMessageConDocs.classList.add("placeholderMessageRepoCon");
            placeholderMessageDocs.textContent = "No documents yet"
        } else {
            documentContentContainer.innerHTML = "";
            for (const obj of data) {
                new createDocumentCards(obj.id, obj.filename, obj.url, obj.file_type, obj.file_size, documentContentContainer)
            }
        }
    } else {
        placeholderMessageConDocs.classList.remove("Hide");
        placeholderMessageDocs.textContent = data.error || "Something went wrong"
    }
}

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
        if (data.length === 0) {
            placeholderMessageCon.classList.remove("Hide");
            placeholderMessageCon.classList.add("placeholderMessageRepoCon");
            placeholderMessage.textContent = "No repos yet"
        } else {
            studyRepoCardsContainer.innerHTML = "";
            data.forEach(repo => {
                new createStudyRepoCards(repo.id, repo.reponame, repo.repodescription);
            })
        }
    } else {
        placeholderMessageCon.classList.remove("Hide");
        placeholderMessage.textContent = data.error || "Something went wrong"
    }
}

async function addStats(id) {
    const res = await fetch(`http://localhost:3000/users/${id}/stats`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    })

    const data = await res.json();

    if (!res.ok) {
        console.log(data.error)
    }
}

async function populateSettingsInfo() {
    const currentUser = await getCurrentuser();

    showChangeUsernameInput.value = currentUser;
}

async function getStudyGoals() {
    const userId = await getCurrentUserId();
    const res = await fetch(`http://localhost:3000/users/${userId}/goals`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        new createStudyGoalContent(data.user_id)
        const studyGoalsLimitedContainer = document.getElementById("studyGoalsLimitedContainer")
        const studyGoalsUnlimitedContainer = document.getElementById("studyGoalsUnlimitedContainer")
        const studyGoalsCompletedContainer = document.getElementById("studyGoalsCompletedContainer")
        const studyGoalsUncompletedContainer = document.getElementById("studyGoalsUncompletedContainer");

        for (const goals of data) {
            if (goals.goal_restart === false) {
                new createGoalCard(goals.id, goals.goal_timeframe, goals.goal_type, goals.start_time, goals.end_time, goals.goal_length, studyGoalsLimitedContainer)
            }
        }

        for (const goals of data) {
            if (goals.goal_restart === true) {
                new createGoalCard(goals.id, goals.goal_timeframe, goals.goal_type, goals.start_time, goals.end_time, goals.goal_length, studyGoalsUnlimitedContainer)
            }
        }

        for (const goals of data) {

            if (goals.completed === true) {
                new createGoalCard(goals.id, goals.goal_timeframe, goals.goal_type, goals.start_time, goals.end_time, goals.goal_length, studyGoalsCompletedContainer)
            }
        }

        for (const goals of data) {
            if (goals.completed === false) {
                new createGoalCard(goals.id, goals.goal_timeframe, goals.goal_type, goals.start_time, goals.end_time, goals.goal_length, studyGoalsUncompletedContainer);
            }
        }

        if (studyGoalsLimitedContainer.children.length <= 0) {
            populateGoalsPlaceholderMessages(studyGoalsLimitedContainer, "No limited goals yet")
        }

        if (studyGoalsUnlimitedContainer.children.length <= 0) {
            populateGoalsPlaceholderMessages(studyGoalsUnlimitedContainer, "No unlimited goals yet")
        }

        if (studyGoalsCompletedContainer.children.length <= 0) {
            populateGoalsPlaceholderMessages(studyGoalsCompletedContainer, "No completed goals yet")
        }

        if (studyGoalsUncompletedContainer.children.length <= 0) {
            populateGoalsPlaceholderMessages(studyGoalsUncompletedContainer, "No uncompleted goals yet")
        }
    }
}

async function getStudyGoalsSummary() {
    const userId = await getCurrentUserId();
    const res = await fetch(`http://localhost:3000/users/${userId}/goals`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        recentGoalsSummary.innerHTML = "";
        if (data.length === 0) {
            let recentGoalName = document.createElement("p");
            recentGoalName.textContent = "No goals"
            recentGoalsSummary.appendChild(recentGoalName)
        } else {
            recentGoalsSummary.innerHTML = "";
            for (const obj of data) {
                if (obj.in_streak === true) {
                    new createGoalsReminderCards(obj.id, obj.end_time, obj.completed, obj.goal_length, obj.goal_type)
                }
            }
        }
    }
}

cancelGoalBtn.addEventListener("click", () => {
    timeframeOption = "";
    goalTypeOption = "";
    endTime = "";
})

saveGoalBtn.addEventListener("click", async () => {
    const createGoalPageMessageBox = document.getElementById("createGoalPageMessageBox");
    const startTime = new Date();

    if (endTime === "" && timeframeOption !== "custom") {
        if (timeframeOption === "daily") {
            endTime = addToDate(startTime, 'daily');
        } else if (timeframeOption === "weekly") {
            endTime = addToDate(startTime, 'weekly');
        } else if (timeframeOption === "monthly") {
            endTime = addToDate(startTime, 'monthly');
        } else if (timeframeOption === "yearly") {
            endTime = addToDate(startTime, 'yearly');
        }
    }

    if (timeframeOption === "" || goalTypeOption === "" || endTime === "") {
        showMessageBox(createGoalPageMessageBox, "all selections must be completed");
    } else {
        await createStudyGoal();
    }
})

function addToDate(date, timeframe) {
    const result = new Date(date); // clone so we don't mutate the original
  
    switch (timeframe) {
      case 'daily':
        result.setDate(result.getDate() + 1);
        break;
      case 'weekly':
        result.setDate(result.getDate() + 7);
        break;
      case 'monthly':
        result.setMonth(result.getMonth() + 1);
        break;
      case 'yearly':
        result.setFullYear(result.getFullYear() + 1);
        break;
      default:
        throw new Error(`Unknown timeframe: ${timeframe}`);
    }
  
    return result;
  }

async function createStudyGoal() {
    let goal_length = (hours * 60) + minutes;
    if (goalTypeOption === "notes_to_review") {
        goal_length = noteCount;
    } else if (goalTypeOption === "flashcards_to_review") {
        goal_length = cardCount;
    }
    const userId = await getCurrentUserId()
    const payload = {
        goalTimeframe: timeframeOption,
        goalType: goalTypeOption,
        endTime: endTime,
        goalLength: goal_length
    }

    const res = await fetch(`http://localhost:3000/users/${userId}/goals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    const createGoalPageMessageBox = document.getElementById("createGoalPageMessageBox");

    const data = await res.json();

    if (res.ok) { 
        createStudyRepoBackBtn.classList.add("Hide");
        showMessageBox(createGoalPageMessageBox, "created goal successfully, going back to home...");
        timeframeOption = "";
        goalTypeOption = "";
        endTime = "";
        setCurrentPage('goalsPage')
        setTimeout(async () => await showCurrentPage(), 1000);
    } else {
        console.log(data.error)
        showMessageBox(createGoalPageMessageBox, data.error || "Something went wrong");
    }
}

function populateGoalsPlaceholderMessages(container, message) {
    const placeholderMessageCon = document.createElement("div")
    const placeholderMessage = document.createElement("p")
    placeholderMessage.classList.add("placeholderMessageElements");
    placeholderMessage.textContent = message;
    placeholderMessageCon.appendChild(placeholderMessage)
    container.appendChild(placeholderMessageCon)
}

function customGoalDatePicker () {
    flatpickr("#end-date-picker", {
        minDate: "today",        // can't pick a date before today
        dateFormat: "Y-m-d",     // matches Postgres-friendly format
        onChange: function(selectedDates, dateStr) {
          endTime = dateStr;
        }
    });
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

    if (res.ok) {
        recentStudyReposSummary.innerHTML = "";
        if (data.length === 0) {
            let recentReponame = document.createElement("p");
            recentReponame.textContent = "No recent StudyRepos"
            recentStudyReposSummary.appendChild(recentReponame)
        } else {
            data.forEach(repo => {
                new createRecentReposCards(repo.id, repo.reponame, repo.last_accessed_at)
            })
        }
    }
}

async function getDocumentsSummary() {
    const userId = await getCurrentUserId();
    const res = await fetch(`http://localhost:3000/files/${userId}/files`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        recentDocumentsSummary.innerHTML = "";
        if (data.length === 0) {
            let recentDocumentName = document.createElement("p");
            recentDocumentName.textContent = "No recent documents"
            recentDocumentsSummary.appendChild(recentDocumentName)
        } else {
            recentDocumentsSummary.innerHTML = "";
            for (const obj of data) {
                new createRecentDocumentCards(obj.id, obj.filename, obj.url, obj.file_type, obj.file_size, obj.uploaded_at)
            }
        }
    }
}

async function getUserStats() {
    const id = await getCurrentUserId();
    const res = await fetch(`http://localhost:3000/users/${id}/stats`, {
        credentials: 'include'
    })

    const currentStreak = document.getElementById("currentStreak");
    const totalHours = document.getElementById("totalHours");
    const totalToday = document.getElementById("totalToday");
    const notesViewedToday = document.getElementById("notesViewedToday");
    const flashcardsViewedToday = document.getElementById("flashcardsViewedToday");

    const currentStreakLabel = document.createElement("span");
    const totalHoursLabel = document.createElement("span");
    const totalTodayLabel = document.createElement("span");
    currentStreakLabel.textContent = "Current Streak"
    totalHoursLabel.textContent = "Total Studied"
    totalTodayLabel.textContent = "Total Today"

    const currentStreakValue = document.createElement("p");
    const totalHoursValue = document.createElement("p");
    const totalTodayValue = document.createElement("p");

    const data = await res.json();

    console.log(data)

    if (res.ok) {
        notesViewedToday.textContent = data.main.notes_today;
        flashcardsViewedToday.textContent = data.main.flashcards_today;
        currentStreak.innerHTML = "";
        totalHours.innerHTML = "";
        totalToday.innerHTML = "";
        currentStreakValue.textContent = `${data.other.current_streak} days`;
        const hours = data.main.total_seconds / 3600;
        const todayHours = data.main.seconds_today / 3600
        console.log(hours, todayHours)
        totalHoursValue.textContent = hours < 0.1 ? `${Math.round(data.main.total_seconds)}s` : hours.toFixed(1) + 'h';
        totalTodayValue.textContent = todayHours < 0.1 ? `${Math.round(data.main.seconds_today)}s` : hours.toFixed(1) + 'h';
        currentStreak.appendChild(currentStreakLabel)
        currentStreak.appendChild(currentStreakValue)
        totalHours.appendChild(totalHoursLabel)
        totalHours.appendChild(totalHoursValue)
        totalToday.appendChild(totalTodayLabel)
        totalToday.appendChild(totalTodayValue)
    } else {
        console.log(data.error);
    }
}

async function getUserAnalytics() {
    const currentUserId = await getCurrentUserId();
    const res = await fetch(`http://localhost:3000/users/${currentUserId}/analytics`, {
        credentials: 'include'
    })

    const data = await res.json();

    if (res.ok) {
        displayData(data);
    } else {
        console.log(data.error)
    }
}

function buildWeekData(rows) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, ...
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysSinceMonday);
    monday.setHours(0, 0, 0, 0);
  
    const result = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
  
      const match = rows.find(r => new Date(r.day).toISOString().split('T')[0] === dateStr);
      result.push({
        day: days[i],
        hours: match ? parseFloat(match.hours) : 0
      });
    }
    console.log(result)
    return result;
}

function displayData(rows) {
    const ctx = document.getElementById('weeklyHoursChart');

    const weekData = buildWeekData(rows);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: weekData.map(d => d.day),
            datasets: [{
                data: weekData.map(d => d.hours),
                backgroundColor: '#1a1a1a',
                borderRadius: 4,
                borderSkipped: false,
                barPercentage: 0.60,
                categoryPercentage: 0.8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 1,
                    padding: 12,
                    titleFont: { size: 13, weight: 'bold', family: "monospace" },
                    bodyFont: { size: 12, family: "monospace" },
                    cornerRadius: 8,
                    callbacks: { label: (ctx) => `${ctx.parsed.y.toFixed(2)}h` }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    border: { color: '#000' },
                    ticks: { color: '#000', font: { size: 13, family: "monospace", weight: 'bold' } }
                },
                y: {
                    beginAtZero: true,
                    border: { color: '#000' },
                    grid: { color: 'rgba(0,0,0,0.08)' },
                    ticks: { color: '#000', font: { size: 12, family: "monospace", weight: 'bold' }, callback: v => v + 'h' }
                }
            },
            animation: { duration: 500, easing: 'easeOutQuart' }
        }
    });
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

async function startRepoSession() {
    const userId = await getCurrentUserId();
    const payload = {
        repoId: parseInt(localStorage.getItem("currentRepo"))
    }

    const res = await fetch(`http://localhost:3000/repos/${userId}/sessionStart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    const session = await res.json();

    if (res.ok) {
        localStorage.setItem("sessionId", session.id);
    } else {
        console.log(session.error)
    }
}

async function endRepoSession(numNotesReviewed = 0, numFlashcardsReviewed = 0) {
    const sessionId = parseInt(localStorage.getItem("sessionId"));
    const payload = {
        notesReviewed: numNotesReviewed,
        flashcardsReviewed: numFlashcardsReviewed
    }

    const res = await fetch(`http://localhost:3000/repos/${sessionId}/sessionEnd`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    const session = await res.json();

    if (!res.ok) {
        console.log(session.error)
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

async function getRepoFlashcards(repoId, parentFolder = 0) {
    const res = await fetch(`http://localhost:3000/repos/${repoId}/${parentFolder}/flashcards`, {
        credentials: 'include'
    })

    const flashcards = await res.json();
    const studyRepoFlashcardsContainer = document.getElementById("studyRepoFlashcardsContainer");
    const flashcardsOfFolderContainer = document.getElementById("flashcardsOfFolderContainer");
    let flashcardsCon = studyRepoFlashcardsContainer;

    if (res.ok) {
        if (flashcards.length === 0) {
            const placeholderMessageCon = document.createElement("div")
            const placeholderMessage = document.createElement("p")
            placeholderMessage.classList.add("placeholderMessageElements");
            placeholderMessage.textContent = "No flashcards yet"

            placeholderMessageCon.appendChild(placeholderMessage)

            if (parentFolder === 0) {
                studyRepoFlashcardsContainer.appendChild(placeholderMessageCon);
            } else {
                flashcardsOfFolderContainer.innerHTML = "";
                flashcardsOfFolderContainer.appendChild(placeholderMessageCon);
            }
        } else {
            if (parentFolder === 0) {
                parentFolder = null;
            } else {
                flashcardsOfFolderContainer.innerHTML = "";
                flashcardsCon = flashcardsOfFolderContainer;
            }
            for (const flashcard of flashcards) {
                if (flashcard.folder_id === parentFolder) {
                    //new createNoteCards(flashcard.id, flashcard.title, flashcard.content, flashcardsCon);
                    new createFlashcardCards(flashcard.id, flashcard.front, flashcard.back, flashcardsCon);
                }
            }
        }
    }
}

async function createRepoFlashcard(title, answer) {
    const repoId = parseInt(localStorage.getItem("currentRepo"))
    const folderId = parseInt(localStorage.getItem("currentFolder"))
    const payload = {
        repoId: repoId,
        folderId: folderId,
        front: title,
        back: answer
    }

    const res = await fetch('http://localhost:3000/repos/flashcards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        showMessageBox(createFlashcardPageMessageBox, "Flashcard created successfully")
        /*createStudyRepoBackBtn.classList.add("Hide");
        showMessageBox(createRepoPageMessageBox, "Flashcard created successfully, going back to studyrepos...");
        name.value = "";
        description.value = "";
        setCurrentPage('studyReposPage')
        setTimeout(async () => await showCurrentPage(), 1000);*/
    } else {
        showMessageBox(createFlashcardPageMessageBox, data.error || "Something went wrong")
    }
}

async function logout() {
    await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include'
    })
    localStorage.removeItem("dl_option");
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

function showSelectedGoalTypeStyle() { 
    const goalDurationOrNumConLabel = document.getElementById("goalDurationOrNumConLabel");
    const goals = [studyTimeGoal, notesToReviewGoal, flashcardsToReviewGoal];
    const durationOrNum = [studyDurationContainer, numNotesContainer, numFlashcardsContainer];
    goals.forEach(goal => {
        goal.classList.remove("goalSelectedStyle");
    })

    durationOrNum.forEach(con => {
        con.classList.add("Hide");
    })

    if (goalTypeOption === "study_time") {
        goalDurationOrNumConLabel.textContent = "GOAL: STUDY DURATION";
        studyTimeGoal.classList.add("goalSelectedStyle");
        studyDurationContainer.classList.remove("Hide");
    } else if (goalTypeOption === "notes_to_review") {
        goalDurationOrNumConLabel.textContent = "GOAL: NOTES TO REVIEW";
        notesToReviewGoal.classList.add("goalSelectedStyle");
        numNotesContainer.classList.remove("Hide");
    } else if (goalTypeOption === "flashcards_to_review") {
        goalDurationOrNumConLabel.textContent = "GOAL: FLASHCARDS TO REVIEW";
        flashcardsToReviewGoal.classList.add("goalSelectedStyle"); 
        numFlashcardsContainer.classList.remove("Hide");
    }
}

function hideAllPages() {
    const Pages = [loginPageWrapper, registrationPageWrapper, homePageWrapper, settingsPageWrapper, studyReposPageWrapper, createStudyRepoPageWrapper, studyRepoPageWrapper, studyRepoNotePageWrapper, studyRepoFolderPageWrapper, addDocumentPageWrapper, studyRepoDocumentsPageWrapper, createFlashcardPageWrapper, goalsPageWrapper, createGoalPageWrapper];
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
        await getReposSummary();
        await getDocumentsSummary();
        await getUserStats();
        await getUserAnalytics();
        await getStudyGoalsSummary();
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
    } else if (currentPage === "documentsPage") {
        studyRepoDocumentsPageWrapper.classList.remove("Hide");
        await getAllUserDocuments();
    } else if (currentPage === "addFlashcardPage") {
        createFlashcardPageWrapper.classList.remove("Hide");
    } else if (currentPage === "goalsPage") {
        goalsPageWrapper.classList.remove("Hide");
        await getStudyGoals();
    } else if (currentPage === "createGoalPage") {
        createGoalPageWrapper.classList.remove("Hide");
        showSelectedGoalTypeStyle();
    } else {
        loginPageWrapper.classList.remove("Hide");
    }
}

async function init() {
    await showCurrentPage();
    await showCurrentUser();
}

init();