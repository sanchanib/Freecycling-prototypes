
/**
 * code modified from
 * https://www.w3schools.com/howto/howto_css_modals.asp
 */

var signUpModal = document.getElementById("myModal");
var btn = document.getElementById("trigger-modal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    signUpModal.style.display = "block";
}
span.onclick = function() {
    signUpModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
}
