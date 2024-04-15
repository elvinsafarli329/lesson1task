const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
let allow = true;

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    [(row.querySelector("td").textContent = key + 1)];
  });
};

const saveData = (e) => {
  const inputs = [...document.querySelectorAll("input")];
  inputs.map((input) => {
    input.parentElement.textContent = input.value;
  });
  e.target.textContent = "Düzəliş et";
  e.target.removeEventListener("click", saveData);
  e.target.addEventListener("click", EditData);

  e.target.nextElementSibling.textContent = "sil"
  e.target.removeEventListener("click", cancelData);
  e.target.addEventListener("click", removeData);

  allow = true;
};

const EditData = (e) => {
  const row = e.target.closest("tr");
  const cells = row.querySelectorAll("td");
  cells.forEach((cell, index) => {
    if (index !== 0 && index !== cells.length - 1) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = cell.textContent;
      cell.textContent = "";
      cell.appendChild(input);
    }
  });

  e.target.textContent = "Yadda saxla";
  e.target.removeEventListener("click", EditData);
  e.target.addEventListener("click", saveData);

  e.target.nextElementSibling.textContent = "levg et"
  e.target.removeEventListener("click", removeData);
  e.target.addEventListener("click", cancelData);
};

const removeData = (e) => {
  const row = e.target.closest("tr");
  row.remove();
  orderRow();
  allow = true;
};

const cancelData = (e) => {

};


addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Öncəki xanani doldurun pls...");
    return;
  }

  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn");
  saveBtn.addEventListener("click", saveData);
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Sil";
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.addEventListener("click", removeData)
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});