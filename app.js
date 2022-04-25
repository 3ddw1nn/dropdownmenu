const dropDownButtons = document.querySelectorAll("#dropDown");
console.log(dropDownButtons);
function menuDrop(a) {
  a.parentNode
    .getElementsByClassName("dropdown-content")[0]
    .classList.toggle("show");
}

window.onclick = (e) => {
  if (!e.target.matches(".dropButton")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
