const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = ev => {
  ev.preventDefault(); //Evita o recarregamento da pagina ao clicar no botao, quando, dentro de um form

  if (inputElement.value) {

    const textElement = document.createElement("span");
    textElement.innerHTML = inputElement.value;

    const btnElement = document.createElement("button");
    btnElement.innerHTML = "Remover";
    btnElement.setAttribute("id", "btnRemover");

    const liElement = document.createElement("li");
    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);
    

    btnElement.onclick = () => {
      ulElement.removeChild(liElement)  
    }

    ulElement.appendChild(liElement);
    inputElement.value = "";
  }
};