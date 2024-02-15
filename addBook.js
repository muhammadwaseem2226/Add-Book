const inputTitle = document.querySelector("#title");

const inputAuthor = document.querySelector("#author");

const inputIsbn = document.querySelector("#isbn");

const bookForm = document.querySelector("#book-form");

const uFullWidth = document.querySelector(".u-full-width");

const bookList = document.querySelector("#book-list");

const filter = document.querySelector("#filter");

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputTitleValue = inputTitle.value;
  const inputAuthorValue = inputAuthor.value;
  const inputIsbnValue = inputIsbn.value;

  if (!inputTitleValue || !inputAuthorValue || !inputIsbnValue) {
    return alert("please fill the title value");
  }

  const trCreate = document.createElement("tr");
  trCreate.className = "add-book";

  trCreate.innerHTML += `
                          <td>${inputTitleValue}</td>
                          <td>${inputAuthorValue}</td>
                          <td>${inputIsbnValue}</td>
                          <td><button class='delete-icon'>X</button></td>
                        `;

  bookList.append(trCreate);

  inputTitle.value = "";
  inputIsbn.value = "";
  inputAuthor.value = "";

  bookList.addEventListener("click", function (e) {
    e.preventDefault();

    const currentElement = e.target;

    if (currentElement.className == "delete-icon") {
      currentElement.parentElement.parentElement.remove();
    }
  });
});
