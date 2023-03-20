const input = document.querySelector(".input");
const button = document.querySelector(".addButton");
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");

button.addEventListener("click", addnewWordShort);

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addnewWordShort();
  }
});

input.addEventListener("mouseenter", () => {
  input.value = "";
});

function addnewWordShort() {
  if (input.value === "") return;

  //Выводим слово на русском языке

  const newInputDiv = document.createElement("div");
  newInputDiv.className = "inputText new";
  newInputDiv.style.borderTop = "1px solid #111111";

  const indexes = document.querySelectorAll(".index");
  const index = document.createElement("p");
  index.className = "index";
  index.innerText = indexes.length + 1;

  let newWordShort = document.createElement("p");
  newWordShort.className = "russian";
  newWordShort.innerText = input.value;

  const newWordLong = document.createElement("p");
  newWordLong.className = "russianlong";
  newWordLong.innerText = input.value;

  if (newWordShort.innerText.length > 6) {
    newWordShort.innerText = input.value.slice(0, 7) + "…";
    newWordShort.addEventListener("mouseenter", () => {
      newWordLong.style.display = "block";
    });
    newWordShort.addEventListener("mouseleave", () => {
      newWordLong.style.display = "none";
    });
  }

  //Выводим перевод русского слова на транслит

  const newOutputDiv = document.createElement("div");
  newOutputDiv.className = "outputText new";
  newOutputDiv.style.borderTop = "1px solid #111111";

  let translitWordShort = document.createElement("p");
  translitWordShort.className = "translit";
  translitWordShort.innerText = translit(input.value);

  const translitWordLong = document.createElement("p");
  translitWordLong.className = "russianlong";
  translitWordLong.innerText = translit(input.value);

  if (translitWordShort.innerText.length > 6) {
    translitWordShort.innerText = translitWordShort.innerText.slice(0, 7) + "…";
    translitWordShort.addEventListener("mouseenter", () => {
      translitWordLong.style.display = "block";
    });
    translitWordShort.addEventListener("mouseleave", () => {
      translitWordLong.style.display = "none";
    });
  }

  //Удаление строки по кнопке

  const newDltBtn = document.createElement("img");
  newDltBtn.className = "deleteText";
  newDltBtn.setAttribute("src", "./delete.png");

  newDltBtn.addEventListener("click", () => {
    newInputDiv.remove();
    newOutputDiv.remove();
  });

  column1.appendChild(newInputDiv);
  newInputDiv.appendChild(index);
  newInputDiv.appendChild(newWordLong);
  newInputDiv.appendChild(newWordShort);
  column2.appendChild(newOutputDiv);
  newOutputDiv.appendChild(translitWordLong);
  newOutputDiv.appendChild(translitWordShort);
  newOutputDiv.appendChild(newDltBtn);

  input.value = "";
}

//Кнопка очистить все

const allInputs = document.querySelectorAll(".inputText");
const allOutputs = document.querySelectorAll(".outputText");
const clearButton = document.querySelector(".clearButton");

clearButton.addEventListener("click", () => {
  allInputs.remove();
  allOutputs.remove();
});

//Библиотека транслита

function translit(word) {
  let answer = "";
  let converter = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  for (let i = 0; i < word.length; ++i) {
    if (converter[word[i]] == undefined) {
      answer += word[i];
    } else {
      answer += converter[word[i]];
    }
  }

  return answer;
}
//Удалять по кнопке

// const eachDelBtn = document.querySelectorAll(".deleteText");
// eachDelBtn.addEventListener("click", () => {
//   if (eachDelBtn[0]) return;

//   eachDelBtn.forEach((element) => {
//     element.style.display = "none";
//   });
// });
