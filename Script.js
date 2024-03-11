function saveNote(){
    // textINput represents whats in the text box
    let textInput = document.getElementById("textInput").value 
    let newNote = document.createElement("div")
    // newNote is creating empty <p></p>
let noteText = document.createElement("p")
let deleteButton = document.createElement("button")
   // This is taking the text and putting it into the <p></p> tag
   // <p> Text Input Text </P>
noteText.innerHTML = textInput
deleteButton.innerHTML = "delete";
 deleteButton.addEventListener("click", function() {
     newNote.remove();
       
 });
 // This is what displays it on the page
 //These put the <p> and <button> in the <div>
 newNote.appendChild(noteText);
newNote.appendChild(deleteButton);
document.body.appendChild(newNote);
// Clearing the text box after I print text
document.getElementById("textInput").value = "";
    
}