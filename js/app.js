const num1 = 10;
const num2 = 20;
const num3 = 30;
localStorage.setItem('number1', num1);
localStorage.setItem('number2', num2);
localStorage.setItem('number3', num3);
const savedNum1 = parseInt(localStorage.getItem('number1'));
const savedNum2 = parseInt(localStorage.getItem('number2'));
const savedNum3 = parseInt(localStorage.getItem('number3'));
const sum = savedNum1 + savedNum2 + savedNum3;
console.log(sum);

//---------------------------------------------------------//

const input = document.getElementById('input');
input.addEventListener('focusout', function() {
    localStorage.setItem('inputValue', input.value);
});
input.value = localStorage.getItem('inputValue')

//---------------------------------------------------------//

function updateCounter() {
    let counter = parseInt(document.getElementById("counter").innerText);
    if (counter < 10) {
        counter++;
    } else {
        counter = 0;
    }
    document.getElementById("counter").innerText = counter;
}
window.onload = function() {
    updateCounter();
}

//---------------------------------------------------------//

function clearLocalStorage() {
    localStorage.clear();
    console.log("Хранилище успешно очищено.");
    console.log("Текущее содержимое хранилища:");
    console.log(localStorage);
}

//---------------------------------------------------------//

const button = document.getElementById('myButton');
button.addEventListener('click', displayLocalStorageCount);

function displayLocalStorageCount() {
    const count = Object.keys(localStorage).length;
    alert(`Количество записей в локальном хранилище: ${count}`);
}


//---------------------------------------------------------//

const keys = Object.keys(localStorage);
const values = keys.map(key => localStorage.getItem(key));
console.log(values);

//---------------------------------------------------------//

function displayLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      document.getElementById("output").innerHTML += `${key}: ${value}<br>`;
}
}


//---------------------------------------------------------//

function saveInputs() {
    const inputs = document.querySelectorAll('input');
    const inputTexts = [];
    
    inputs.forEach(input => {
        inputTexts.push(input.value);
    });
    
    localStorage.setItem('inputTexts', JSON.stringify(inputTexts));
    
    alert('Данные сохраняются в локальном хранилище!');
}

//---------------------------------------------------------//

const users = JSON.parse(localStorage.getItem('users')) || [];
const surnameInput = document.getElementById('surname');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  const newUser = {
    surn: surnameInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
  };
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
});

//---------------------------------------------------------//

window.onload = function () {
    let notes = [];
    if (localStorage.getItem("notes")) {
        notes = JSON.parse(localStorage.getItem("notes"));
        for (let i = 0; i < notes.length; i++) {
            let link = document.createElement("a");
            link.href = "#";
            link.innerHTML = "Запись " + (i + 1);
            link.onclick = function () {
                document.getElementById("editor").value = notes[i];
            };
            document.getElementById("sidebar").appendChild(link);
        }
    }
    document.getElementById("saveBtn").onclick = function () {
        let note = document.getElementById("editor").value;
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        let link = document.createElement("a");
        link.href = "#";
        link.innerHTML = "Запись " + notes.length;
        link.onclick = function () {
            document.getElementById("editor").value = note;
        };
        document.getElementById("sidebar").appendChild(link);
        document.getElementById("editor").value = "";
    };
};