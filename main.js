
const content = document.getElementById("message");
function saveText() {
    let text = content.value;
    console.log(text);
}


// Or we can use the code below after removing onclick="saveText()"
// from the element <input id="kontaktBtn" ....> 

// const content = document.getElementById("message");
// const sendBtn = document.getElementById("kontaktBtn");
// sendBtn.addEventListener("click", function() {
//     let text = content.value;
//     console.log(text);
// });

