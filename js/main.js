let przycisk = document.querySelector('button');

let inputImie = document.getElementById("imie").value;
let inputNazwisko = document.getElementById('nazwisko').value;
let inputTelefon = document.getElementById('telefon').value;

let pName = document.getElementById('name');
let pSurname = document.getElementById('surname');
let pPhone = document.getElementById('phone');

przycisk.onclick = function () {
    pName.innerText = inputImie;
    pSurname.innerText = inputNazwisko;
    pPhone.innerText = inputTelefon;
}
