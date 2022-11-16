// Nyari apaan bang? ;-;
// 144 Line :v

const btn = document.querySelectorAll("div.bg_biru.tengah.kotak > button");
const error = document.getElementById("error");
const success = document.getElementById("success");
const warn = document.getElementById("warn");

const diIsi = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];
let mode = "PvP";

let turn = "p1";
let done = false;

for(let button of btn) {
  button.onclick = function() {
    let p1 = turn == "p1";
    let p2 = turn == "p2";
    gim(this, p1, p2);
  };
};

function err(text, until = 3000) {
  error.innerHTML = text;
  error.hidden = false;
  setTimeout(() => {
    error.hidden = true;
    error.innerHTML = "";
  }, until);
};

function succ(text, until = 3000) {
  success.innerHTML = text;
  success.hidden = false;
  setTimeout(() => {
    success.hidden = true;
    success.innerHTML = "";
  }, until);
};

function warning(text, until = 3000) {
  warn.innerHTML = text;
  warn.hidden = false;
  setTimeout(() => {
    warn.hidden = true;
    warn.innerHTML = "";
  }, until);
};


function isWin() {
  let win = false;
  let y = ["Abaikan sy :v"].concat(diIsi);

  let x = "❌";
  let o = "⭕";
  if(((y[1] == x && y[4] == x && y[7] == x) || (y[2] == x && y[5] == x && y[8] == x) || (y[3] == x && y[6] == x && y[9] == x) || (y[1] == x && y[2] == x && y[3] == x) || (y[4] == x && y[5] == x && y[6] == x) || (y[7] == x && y[8] == x && y[9] == x) || (y[1] == x && y[5] == x && y[9] == x) || (y[3] == x && y[5] == x && y[7] == x)) || ((y[1] == o && y[4] == o && y[7] == o) || (y[2] == o && y[5] == o && y[8] == o) || (y[3] == o && y[6] == o && y[9] == o) || (y[1] == o && y[2] == o && y[3] == o) || (y[4] == o && y[5] == o && y[6] == o) || (y[7] == o && y[8] == o && y[9] == o) || (y[1] == o && y[5] == o && y[9] == o) || (y[3] == o && y[5] == o && y[7] == o))) win = true; // Susah banh ;-;
  return win;
};

function winner() {
  if(!isWin()) return null;
  let p = turn == "p1" ? "Player 2 (⭕)" : "Player 1 (❌)";
  let win = mode == "PvP" ? p : turn == "p2" ? "Player" : "Bot";
  return win;
};

function getTurn() {
  return mode == "PvP" ?
    (turn == "p1" ? "Player 1 (❌)" : "Player 2 (⭕)") :
    (turn == "p1" ? "Player (❌)" : "Bot (⭕)");
};

function gim(tags, p1, p2) {
  try {
    const value = tags.innerHTML;
    if(value == "❌" || value == "⭕") return err("Posisi tidak valid!");

    let btns = []
    for(let i of btn) btns.push(i);

    diIsi[btns.indexOf(tags)] = p1 ? "❌" : "⭕";

    tags.innerHTML = p1 ? "❌" : "⭕";
    turn = p1 ? "p2" : "p1";

    if(winner() == null && !diIsi.filter(v => v == " ")[0]) {
      done = true;
      warning("Seri!");
      for(let i of btn) i.disabled = true;
      setTimeout(() => {
        location.reload();
      }, 3500);
    };

    if(winner() != null) {
      for(let i of btn) i.disabled = true;
      done = true;
      succ(`${winner()} menang!`);
      setTimeout(() => {
        location.reload();
      }, 3500);
    };
    if(!done && (mode == "PvB" && turn == "p2")) {
      let buton = [];
      for(let i of btn) buton.push(i);

      let belum = buton.filter(v => v.innerHTML != "❌" && v.innerHTML != "⭕");

      if(belum[0]) {
        for(let i of btn) i.disabled = true;
        setTimeout(() => {
          for(let i of btn) i.disabled = false;
          return belum[Math.floor(Math.random() * belum.length)].click(); // Ajarin bikin AI yg susah dikalahin banh ;-;
        }, Math.floor(Math.random() * 1200)); // biar kayak lagi mikir botnya
      } else if(winner() == null) {
        done = true;
        warning("Seri!");
        for(let i of btn) i.disabled = true;
        setTimeout(() => {
          location.reload();
        }, 3500);
      };
    };
  } catch(err) {
    window.onerror(err.stack);
  };
};


setInterval(function() {
  console.clear();
  console.log("Never gonna give you up");
  console.log("Never gonna let you down");
  console.log("Never gonna run around and desert you");
  console.log("Never gonna make you cry");
  console.log("Never gonna say goodbye");
  console.log("Never gonna tell a lie and hurt you");
  console.log("Hehe");
}, 1000);
