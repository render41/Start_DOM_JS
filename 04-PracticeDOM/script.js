const datasList = document.getElementById("datas-list");

function addDatas() {
  const newElement = document.createElement("p");
  newElement.textContent = "Novo dado adicionado";
  datasList.appendChild(newElement);
}

function removeDatas() {
  if (datasList.children.length > 0) {
    datasList.removeChild(datasList.lastElementChild);
  }
}

function hideItems() {
  if (datasList.className === "datas-list-visible") {
    datasList.className = "datas-list-hidden";
  } else if (datasList.className === "datas-list-hidden") {
    datasList.className = "datas-list-visible";
  }
}
