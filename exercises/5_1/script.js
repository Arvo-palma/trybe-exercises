
document.getElementById("header-container").style.background = "lightgreen";

document.querySelector("section").style.background = "pink";

document.querySelector(".no-emergency-tasks").style.background = "yellow";

for (index = 0; index < document.querySelectorAll("section div h3").length - 2; index += 1) {
    document.querySelectorAll("section div h3")[index].style.background = "purple";
}


for (index = 2; index < document.querySelectorAll("section div h3").length; index += 1) {
    document.querySelectorAll("section div h3")[index].style.background = "black";
}

document.getElementsByTagName("footer")[0].style.background = "green";