const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");


btn.addEventListener("click", () => {
    const tr = document.createElement("tr");

    const sira = document.createElement("td");
    sira.textContent = tbody.children.length + 1;

    const nametd = document.createElement("td");
    const surnametd = document.createElement("td");
    const agetd = document.createElement("td");
    const buttonstd1 = document.createElement("td");
    const buttonstd2 = document.createElement("td");
    const buttonstd3 = document.createElement("td");

    const name = document.createElement("input");
    name.placeholder = "Adiniz...";
    const surname = document.createElement("input");
    surname.placeholder = "soyadiniz...";
    const age = document.createElement("input");
    age.placeholder = "yasiniz...";
    const buttons1 = document.createElement("button");
    buttons1.textContent = "Yadda saxla";
    buttons1.addEventListener("click", () => {
        const ad = name.value;
        const soyad = surname.value;
        const yas = +age.value;

        name.value = ad;
        name.style.backgroundColor = "white";
        name.style.pointerEvents = "none";
        surname.value = soyad;
        surname.style.backgroundColor = "white";
        surname.style.pointerEvents = "none";
        age.value = yas.toString();
        age.style.backgroundColor = "white";
        age.style.pointerEvents = "none";

        const p1 = document.createElement("p");
        p1.textContent = ad;
        const p2 = document.createElement("p");
        p2.textContent = soyad;
        const p3 = document.createElement("p");
        p3.textContent = yas;
        const update=document.querySelector("#update");
        update.style.display="inline-block";
        buttons1.style.display="none"

        name.remove();
        nametd.append(p1);

        surname.remove();
        surnametd.append(p2);

        age.remove();
        agetd.append(p3);

    });
    const buttons2 = document.createElement("button");
    buttons2.textContent = "Sil";
    
    const buttons3 = document.createElement("button");
    buttons3.id="update";
    buttons3.textContent = "duzelis et";
    buttons3.style.display = "none";

    const siralabel = document.createElement("label");
    const namelabel = document.createElement("label");
    const surnamelabel = document.createElement("label");
    const agelabel = document.createElement("label");

    sira.append(siralabel);
    nametd.append(name, namelabel);
    surnametd.append(surname, surnamelabel);
    agetd.append(age, agelabel);
    buttonstd1.append(buttons1);
    buttonstd2.append(buttons2);
    buttonstd3.append(buttons3);

    tr.append(sira, nametd, surnametd, agetd, buttons1, buttons2, buttons3);

    tbody.appendChild(tr);
})
