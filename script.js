const button = document.getElementById("button");
const table = document.getElementById("table");
// button.onclick = function() {
//     alert("đã bấm");
// }

button.addEventListener('click', () => table.classList.toggle('show'));