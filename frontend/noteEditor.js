import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { updateRepoNote } from './index'

// Extra extensions
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Placeholder from '@tiptap/extension-placeholder'

let saveTimeout = null;
let lastSaved = '';

const studyRepoNoteName = document.getElementById("studyRepoNoteName");

const openEditorTextFormattingBtn = document.getElementById("openEditorTextFormattingBtn");
const openEditorHeadingsBtn = document.getElementById("openEditorHeadingsBtn");
const openEditorListsBtn = document.getElementById("openEditorListsBtn");
const openEditorBlocksBtn = document.getElementById("openEditorBlocksBtn");
const openEditorAlignBtn = document.getElementById("openEditorAlignBtn");
const openEditorClearBtn = document.getElementById("openEditorClearBtn");

const editorTextFormattingBtns = document.getElementById("editorTextFormattingBtns");
const editorHeadingsBtns = document.getElementById("editorHeadingsBtns");
const editorListsBtns = document.getElementById("editorListsBtns");
const editorBlocksBtns = document.getElementById("editorBlocksBtns");
const editorAlignBtns = document.getElementById("editorAlignBtns");
const editorClearBtns = document.getElementById("editorClearBtns");

let isTextFormatOpen = false;
let isHeadingsOpen = false;
let isListsOpen = false;
let isBlocksOpen = false;
let isAlignOpen = false;
let isClearOpen = false;

const editor = new Editor({
    element: document.querySelector('#editor'),
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight,
      Subscript,
      Superscript,
      TaskList,
      TaskItem.configure({ nested: true }),
      Placeholder.configure({
        placeholder: 'Start typing...',
      })
    ],
    content: '',

    onUpdate({ editor }) {
        const content = editor.getHTML();
        localStorage.setItem("noteContent", content);

        clearTimeout(saveTimeout)
        saveTimeout = setTimeout( async () => {
            if (content !== lastSaved) {
                await updateRepoNote(localStorage.getItem("currentRepo"), localStorage.getItem("noteId"), localStorage.getItem("noteName"), localStorage.getItem("noteContent"));
                lastSaved = content
            }
        }, 2000)
    }
})

function setNoteName() {
    const savedName = localStorage.getItem("noteName");
    if (savedName) {
        studyRepoNoteName.textContent = savedName;
    }
}

function showNoteContent() {
    const saved = localStorage.getItem("noteContent");
    if (saved) {
        editor.commands.setContent(saved);
    }
}

function saveToLocalStorage(noteContent, noteName, noteId) {
    localStorage.setItem("noteName", noteName);
    localStorage.setItem("noteContent", noteContent);
    localStorage.setItem("noteId", noteId);
}

export function getNoteContent(noteContent, noteName, noteId) {
    saveToLocalStorage(noteContent, noteName, noteId);
    setNoteName()
    showNoteContent();
}

openEditorTextFormattingBtn.addEventListener("click", () => {
    isTextFormatOpen = !isTextFormatOpen
    if (isTextFormatOpen) {
        openEditorTextFormattingBtn.classList.add("selectedToolStyle");
        editorTextFormattingBtns.classList.remove("Hide");
    } else {
        openEditorTextFormattingBtn.classList.remove("selectedToolStyle");
        editorTextFormattingBtns.classList.add("Hide");
    }
})

openEditorHeadingsBtn.addEventListener("click", () => {
    isHeadingsOpen = !isHeadingsOpen
    if (isHeadingsOpen) {
        openEditorHeadingsBtn.classList.add("selectedToolStyle");
        editorHeadingsBtns.classList.remove("Hide");
    } else {
        openEditorHeadingsBtn.classList.remove("selectedToolStyle");
        editorHeadingsBtns.classList.add("Hide");
    }
})

openEditorListsBtn.addEventListener("click", () => {
    isListsOpen = !isListsOpen;
    if (isListsOpen) {
        openEditorListsBtn.classList.add("selectedToolStyle");
        editorListsBtns.classList.remove("Hide");
    } else {
        openEditorListsBtn.classList.remove("selectedToolStyle");
        editorListsBtns.classList.add("Hide");
    }
})

openEditorBlocksBtn.addEventListener("click", () => {
    isBlocksOpen = !isBlocksOpen;
    if (isBlocksOpen) {
        openEditorBlocksBtn.classList.add("selectedToolStyle");
        editorBlocksBtns.classList.remove("Hide");
    } else {
        openEditorBlocksBtn.classList.remove("selectedToolStyle");
        editorBlocksBtns.classList.add("Hide");
    }
})

openEditorAlignBtn.addEventListener("click", () => {
    isAlignOpen = !isAlignOpen;
    if (isAlignOpen) {
        openEditorAlignBtn.classList.add("selectedToolStyle");
        editorAlignBtns.classList.remove("Hide");
    } else {
        openEditorAlignBtn.classList.remove("selectedToolStyle");
        editorAlignBtns.classList.add("Hide");
    }
})

openEditorClearBtn.addEventListener("click", () => {
    isClearOpen = !isClearOpen;
    if (isClearOpen) {
        openEditorClearBtn.classList.add("selectedToolStyle");
        editorClearBtns.classList.remove("Hide");
    } else {
        openEditorClearBtn.classList.remove("selectedToolStyle");
        editorClearBtns.classList.add("Hide");
    }
})

document.getElementById("editorUndoBtn").addEventListener("click", () => {
    editor.chain().focus().undo().run();
})

document.getElementById("editorRedoBtn").addEventListener("click", () => {
    editor.chain().focus().redo().run();
})

document.getElementById("editorBoldBtn").addEventListener("click", () => {
    editor.chain().focus().toggleBold().run();
})

document.getElementById("editorItalicBtn").addEventListener("click", () => {
    editor.chain().focus().toggleItalic().run();
})

document.getElementById("editorUnderlineBtn").addEventListener("click", () => {
    editor.chain().focus().toggleUnderline().run();
})

document.getElementById("editorStrikeBtn").addEventListener("click", () => {
    editor.chain().focus().toggleStrike().run();
})

document.getElementById("editorH1Btn").addEventListener("click", () => {
    editor.chain().focus().setHeading({ level: 1 }).run();
})

document.getElementById("editorH2Btn").addEventListener("click", () => {
    editor.chain().focus().setHeading({ level: 2 }).run();
})

document.getElementById("editorH3Btn").addEventListener("click", () => {
    editor.chain().focus().setHeading({ level: 3 }).run();
})

document.getElementById("editorH4Btn").addEventListener("click", () => {
    editor.chain().focus().setHeading({ level: 4 }).run();
})

document.getElementById("editorH5Btn").addEventListener("click", () => {
    editor.chain().focus().setHeading({ level: 5 }).run();
})

document.getElementById("editorH6Btn").addEventListener("click", () => {
    editor.chain().focus().setHeading({ level: 6 }).run();
})

document.getElementById("editorParagraphBtn").addEventListener("click", () => {
    editor.chain().focus().setParagraph().run();
})

document.getElementById("editorBulletListBtn").addEventListener("click", () => {
    editor.chain().focus().toggleBulletList().run();
})

document.getElementById("editorOrderedListBtn").addEventListener("click", () => {
    editor.chain().focus().toggleOrderedList().run();
})

document.getElementById("editorCheckboxListBtn").addEventListener("click", () => {
    editor.chain().focus().toggleTaskList().run();
})

document.getElementById("editorBlockquoteBtn").addEventListener("click", () => {
    editor.chain().focus().toggleBlockquote().run();
})

document.getElementById("editorCodeBlockBtn").addEventListener("click", () => {
    editor.chain().focus().toggleCodeBlock().run();
})

document.getElementById("editorHorizontalLineBtn").addEventListener("click", () => {
    editor.chain().focus().setHorizontalRule().run();
})

document.getElementById("editorCodeBtn").addEventListener("click", () => {
    editor.chain().focus().toggleCode().run();
})

document.getElementById("editorHighlightBtn").addEventListener("click", () => {
    editor.chain().focus().toggleHighlight().run();
})

document.getElementById("editorSubscriptBtn").addEventListener("click", () => {
    editor.chain().focus().toggleSubscript().run();
})

document.getElementById("editorSuperscriptBtn").addEventListener("click", () => {
    editor.chain().focus().toggleSuperscript().run();
})

document.getElementById("editorAlignLeftBtn").addEventListener("click", () => {
    editor.chain().focus().setTextAlign('left').run();
})

document.getElementById("editorAlignCenterBtn").addEventListener("click", () => {
    editor.chain().focus().setTextAlign('center').run();
})

document.getElementById("editorAlignRightBtn").addEventListener("click", () => {
    editor.chain().focus().setTextAlign('right').run();
})

document.getElementById("editorAlignJustifyBtn").addEventListener("click", () => {
    editor.chain().focus().setTextAlign('justify').run();
})

document.getElementById("editorClearFormattingBtn").addEventListener("click", () => {
    editor.chain().focus().unsetAllMarks().run();
})

document.getElementById("editorClearBlocksBtn").addEventListener("click", () => {
    editor.chain().focus().clearNodes().run();
})

function checkIsActive() {
    const tools = ['bold', 'italic', 'underline', 'strike', '']
}
setNoteName();
showNoteContent();