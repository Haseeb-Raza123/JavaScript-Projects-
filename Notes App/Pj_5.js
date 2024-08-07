const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    inputBox.appendChild(img); // Append the image to the inputBox first
    notesContainer.appendChild(inputBox); // Then append the inputBox to the notesContainer
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P" && e.target.classList.contains("input-box")) {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            };
        });
    }
});

// Load notes from localStorage when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onkeyup = function() {
            updateStorage();
        };
    });
});
