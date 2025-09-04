/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = [
    { simbolo: "♥", color: "red" },
    { simbolo: "♦", color: "red" },
    { simbolo: "♣", color: "black" },
    { simbolo: "♠", color: "black" }
  ];

  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Selección aleatoria
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];

  // Asignar valores en la carta
  document.getElementById("card-value").textContent = valor;
  document.getElementById("top-symbol").textContent = palo.simbolo;
  document.getElementById("bottom-symbol").textContent = palo.simbolo;

  // Cambiar color según el palo
  document.getElementById("card").style.color = palo.color;
};
