function addInput() {
  const inputs = document.getElementById("inputs");

  const createInput = document.createElement("li");
  createInput.className = "list-item";
  createInput.innerHTML = `<span>Lista Span</span>`;
  createInput.style.color = "red";

  inputs.appendChild(createInput);
}
