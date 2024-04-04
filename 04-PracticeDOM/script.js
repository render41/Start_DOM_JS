var datasList = document.getElementById("datas-list");
function addDatas() {
  var newElement = document.createElement("p");
  newElement.textContent = "Novo dado adicionado";
  datasList.appendChild(newElement);
}

function removeDatas() {
  if (datasList.children.length > 0) {
    datasList.removeChild(datasList.lastElementChild);
  }
}
