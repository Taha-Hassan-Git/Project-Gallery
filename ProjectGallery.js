function myFunction(button) {
    var text = button.name;
    var myDiv = document.getElementById(text);
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }
}