tohide = document.getElementsByClassName("tohide");

for (i in tohide){
  tohide[i].style.display = "none";
}

function myFunction(button) {
    var text = button.name;
    var myDiv = document.getElementById(text);
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
      button.innerHTML = "Hide"
    } else {
      myDiv.style.display = "none";
      button.innerHTML = "Show"
    }
}