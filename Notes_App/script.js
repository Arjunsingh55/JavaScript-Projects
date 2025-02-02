const Notes = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn")

createBtn.addEventListener("click", () => {

    let note = document.createElement("p");
    note.className = ("input-box");
    note.setAttribute("contenteditable", "true")
    let img = document.createElement("img");
    img.src = "/assets/icons8-delete-100.png"
    Notes.appendChild(note).appendChild(img)
})

Notes.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateData()
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((i) => {
            i.onkeyup = function () {
                updateData();
            }
        })
    }
})

function showNotes() {
    Notes.innerHTML = localStorage.getItem("notes")

}
showNotes()

function updateData() {
    localStorage.setItem("notes", Notes.innerHTML)

}