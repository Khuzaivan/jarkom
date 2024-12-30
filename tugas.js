document.getElementById("tugas-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const tugasInput = document.getElementById("tugas-input");
  const tugasList = document.getElementById("tugas-list");

  const tugasItem = document.createElement("li");
  tugasItem.textContent = tugasInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.onclick = function () {
    tugasItem.style.opacity = 0;
    tugasItem.style.transform = "translateX(-20px)";
    setTimeout(() => tugasList.removeChild(tugasItem), 300);
  };
  tugasItem.appendChild(deleteButton);

  tugasList.appendChild(tugasItem);

  tugasInput.value = "";
});
