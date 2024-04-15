const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
let allow = true;
let storeddata = {};

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.forEach((row, i) => {
    row.querySelector("td").textContent = i + 1;
  });
};

const saveData = (e) => {
  const row = e.target.closest("tr");
  const inputs = row.querySelectorAll("input");
  inputs.forEach((input, i) => {
    storeddata[i] = input.value;
    input.parentElement.textContent = input.value;
  });

  e.target.textContent = "Düzəliş et";
  e.target.removeEventListener("click", saveData);
  e.target.addEventListener("click", EditData);

  const cancelBtn = e.target.nextElementSibling;
  cancelBtn.textContent = "sil";
  cancelBtn.removeEventListener("click", cancelData);
  cancelBtn.addEventListener("click", removeData);

  allow = true;
};

const EditData = (e) => {
  const row = e.target.closest("tr");
  const edits = row.querySelectorAll("td");
  const originalData = new Map(); 

  edits.forEach((box, i) => {
    if (i !== 0 && i !== edits.length - 1) {
      const inputValue = box.textContent.trim();
      originalData.set(i, inputValue); 
      const input = document.createElement("input");
      input.type = "text";
      input.value = inputValue;
      box.textContent = "";
      box.appendChild(input);
    }
  });

  row.originalData = originalData;

  e.target.textContent = "Yadda saxla";
  e.target.removeEventListener("click", EditData);
  e.target.addEventListener("click", saveData);

  const cancelBtn = e.target.nextElementSibling;
  cancelBtn.textContent = "levg et";
  cancelBtn.removeEventListener("click", removeData);
  cancelBtn.addEventListener("click", cancelData);
};


const removeData = (e) => {
  const row = e.target.closest("tr");
  row.remove();
  orderRow();
  allow = true;
};

const cancelData = (e) => {
  const row = e.target.closest("tr");
  const cancelled = row.querySelectorAll("td");
  const originalData = row.originalData;

  cancelled.forEach((box, i) => {
    if (i !== 0 && i !== cancelled.length - 1) {
      box.textContent = originalData.get(i); 
    }
  });

  e.target.textContent = "sil";
  e.target.removeEventListener("click", cancelData);
  e.target.addEventListener("click", removeData);

  const editBtn = e.target.previousElementSibling;
  editBtn.textContent = "Düzəliş et";
  editBtn.removeEventListener("click", saveData);
  editBtn.addEventListener("click", EditData);

  allow = true;
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
