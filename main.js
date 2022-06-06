setInterval(() => {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == ""
  ) {
    document.getElementById("submit").setAttribute("disabled", "");
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
});

function check(form) {
  if (form.name.value && form.email.value) {
    var username = document.getElementById("name").value;
  } else {
    alert("Error please input email or names");
  }
}

document.getElementById("submit").onclick = function () {
  window.location.href = "./index.html";
  var name = document.getElementById("name").value;

  alert(
    name.charAt(0).toUpperCase() +
      name.substring(1) +
      ", " +
      "Thank you for reaching out to me, lets schedule a coffee meet."
  );
};
