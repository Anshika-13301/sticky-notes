let notesContainer = document.getElementById("notesContainer");
let addNoteBtn = document.getElementById("addNoteBtn");
let noteCount = 0;

addNoteBtn.addEventListener("click", () => {
  let note = document.createElement("div");
  note.className = "note";
  note.contentEditable = true;
  note.innerText = "New Note";
  note.style.top = `${Math.random() * 300}px`;
  note.style.left = `${Math.random() * 300}px`;
  makeDraggable(note);
  notesContainer.appendChild(note);
});

function makeDraggable(el) {
  let isDragging = false;
  let offsetX, offsetY;

  el.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    el.style.zIndex = 1000;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    el.style.zIndex = "";
    addNoteBtn.addEventListener("click", () => {
        let note = document.createElement("div");
        note.className = "note";
        note.contentEditable = false;
      
        // Inner HTML with delete button
        note.innerHTML = `
          <button class="delete-btn">&times;</button>
          <div class="note-content" contenteditable="true">New Note</div>
        `;
      
        note.style.top = `${Math.random() * 300}px`;
        note.style.left = `${Math.random() * 300}px`;
      
        // Add delete functionality
        note.querySelector(".delete-btn").addEventListener("click", () => {
          note.remove();
        });
      
        makeDraggable(note);
        notesContainer.appendChild(note);
      });
      
  });
}
