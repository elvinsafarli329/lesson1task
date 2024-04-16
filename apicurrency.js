const valyuta = document.getElementById("valyuta");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const btn = document.getElementById("btn");
const select = document.getElementsByClassName("select");
const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
// const ul = document.createElement("ul");

const options = { method: 'GET', headers: { accept: 'application/json' } };
fetch('https://api.fastforex.io/fetch-all?api_key=9291012493-f151d19a06-sbzwgq', options)
    .then(response => response.json())
    .then((data) => {
        const moneynames = Object.keys(data.results);
        moneynames.map(valyutaname => {
            const select1 = document.createElement("option");
            select1.value = valyutaname;
            select1.textContent = valyutaname;
            currency1.appendChild(select1);
            // console.log(currency1);
    
            const select2 = document.createElement("option");
            select2.value = valyutaname;
            select2.textContent = valyutaname;
            currency2.appendChild(select2);
            // console.log(currency2);
        });

        function result() {
            const dataresult1 = currency1.value;
            const dataresult2 = currency2.value;
            // console.log(dataresult1);
            // console.log(dataresult2);
            const netice = input.value
            const hasil = data.results[dataresult2] / data.results[dataresult1];
            // console.log(hasil);
            const cevirme = hasil*netice;
            input2.value = cevirme;
        }
        // result()
        btn.addEventListener("click", result )
    })

    .catch(err => console.error(err));
