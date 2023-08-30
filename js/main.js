window.onload = () => {
  const menu = document.getElementsByClassName("btn-group-vertical")[0];
  menu.className = "";
  const jumbotron = document.getElementsByClassName("jumbotron")[0];
  jumbotron.classList.add(
    "bg-secondary",
    "text-light",
    "d-flex",
    "flex-column",
    "align-items-end"
  );
  jumbotron
    .getElementsByTagName("hr")[0]
    .classList.add("border-light", "w-100");
  jumbotron
    .getElementsByClassName("btn-primary")[0]
    .classList.add("btn-success");
  const cardTecnologia = document.getElementsByClassName("card")[1];
  cardTecnologia.children[0].src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNsyKa5TlT9nZCUJpG2Dl3DCtuJr0_pvWYkrVtwh7SqFsZ_O9";
  cardTecnologia.children[1].children[0].textContent = "Animais";
  cardTecnologia.children[1].children[2].classList.add("btn-success");
  const lista = document.getElementsByClassName("list-group")[0];
  lista.children[0].classList.remove("active");
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.toggle("active", !i);
    li.appendChild(document.createTextNode(i ? "Quinto item" : "Quarto item"));
    lista.appendChild(li);
  }
};
