const Input = document.getElementById("Input");
const Add = document.getElementById("Add");
const ListContainer = document.querySelector(".ListContainer");

Add.addEventListener("click", () => {
  const List = document.createElement("div");
  const Todo = document.createElement("div");
  const content = document.createElement("p");
  const trash = document.createElement("img");
  const Deleteicon = document.createElement("div");
  if (Input.value !== "" && Input.value !== null) {
    content.innerText = Input.value;
    Todo.append(content);
    Todo.className = "ToDo";

    trash.src = "./trash-alt-solid-24.png";
    Deleteicon.append(trash);
    Deleteicon.className = "Delete";
    Deleteicon.id = "Delete";

    List.className = "list";
    List.append(Todo);
    List.append(Deleteicon);

    ListContainer.append(List);

    Input.value = "";
    saveData();

    Deleteicon.addEventListener("click", () => {
      ListContainer.removeChild(List);
      saveData();
    });

    Todo.addEventListener("click", () => {
      if (Todo.style.textDecoration === "line-through") {
        Todo.style.textDecoration = "none";
        saveData();
      } else {
        Todo.style.textDecoration = "line-through";
        saveData();
      }
    });
  }
});

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function DisplayList() {
  ListContainer.innerHTML = localStorage.getItem("data");

  ListContainer.querySelectorAll(".list").forEach((list) => {
    const Todo = list.querySelector(".ToDo");
    const Deleteicon = list.querySelector(".Delete");

    Deleteicon.addEventListener("click", () => {
      ListContainer.removeChild(list);
      saveData();
    });

    Todo.addEventListener("click", () => {
      if (Todo.style.textDecoration === "line-through") {
        Todo.style.textDecoration = "none";
        saveData();
      } else {
        Todo.style.textDecoration = "line-through";
        saveData();
      }
    });
  });
}

DisplayList();
