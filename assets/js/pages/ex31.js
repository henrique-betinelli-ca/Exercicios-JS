function botaoIniciar() {
  setTimeout(() => { document.getElementById("ContagemPartida").textContent = "Preparar..."; }, 1000);
  setTimeout(() => { document.getElementById("ContagemPartida").textContent = "Apontar..."; }, 2000);
  setTimeout(() => { document.getElementById("ContagemPartida").textContent = "Fogo!"; }, 3000);
}

document.getElementById("botaoIniciar").addEventListener("click", botaoIniciar);