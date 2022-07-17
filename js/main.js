let przycisk = document.querySelector('button');

przycisk.onclick = function () {
    let inputImie = document.getElementById("imie").value;
    let inputNazwisko = document.getElementById('nazwisko').value;
    let inputTelefon = document.getElementById('telefon').value;

    let pName = document.getElementById('name');
    let pSurname = document.getElementById('surname');
    let pPhone = document.getElementById('phone');
    
    pName.innerHTML = 'Twoje imię: ' + inputImie;
    pSurname.innerHTML = 'Twoje nazwisko: ' + inputNazwisko;
    pPhone.innerHTML = 'Twój telefon: ' + inputTelefon;
}