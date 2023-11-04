class LibraryApp {
    constructor() {
      this.config = {
        url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:",
        parentId: "book-cards",
        searchBtnId: "isbn-search-btn",
        searchInputId: "isbn-search",
      };
      this.searchButton = document.getElementById(this.config.searchBtnId);
      this.searchInput = document.getElementById(this.config.searchInputId);
      this.bookList = document.getElementById(this.config.parentId);
      this.searchButton.addEventListener('click', this.searchBooks.bind(this));
    }
  
    async searchBooks() {
      const searchTerm = this.searchInput.value;
      const bookList = await this.fetchBooks(searchTerm);
      this.displayBooks(bookList);
    }
  
    async fetchBooks(searchTerm) {
      const response = await fetch(`${this.config.url}${searchTerm}`);
      const data = await response.json();
      return data;
    }
  
    displayBooks(bookList) {
      this.bookList.innerHTML = '';
      if(Object.keys(bookList).length === 0 && bookList.constructor === Object) {
        this.bookList.innerHTML = "<h1>Not Found</h1>";
      } else {
        for(let bookKey in bookList){
          this.bookList.append(this.generateBookCard(bookList[bookKey]));
        }
      }
    }
  
    generateBookCard(book){
      let container = document.createElement("div");;
      let htmlString =
      `
          <div class="card mb-3" style="max-width: 1000px;">
          <div class="row no-gutters">
              <div class="col-md-4">
                  <img src="${book.cover.medium}" class="card-img p-3" alt="">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title m-0 font-weight-bold">${book.title}</h5>
                      <p class="m-0"> </p>
                      <p class="card-text pt-2 book-description">${book.by_statement}</p>
                  </div>
              </div>
          </div>
          <div class="col-10">
              <table class="table table-striped">
                  <tbody>
                  <tr>
                      <th scope="row">Page</th>
                      <td>${book.number_of_pages}</td>
                  </tr>
                  <tr>
                      <th scope="row">Publisher</th>
                      <td>${this.parseDataOL(book.authors)}</td>
                  </tr>
                  <tr>
                      <th scope="row">Published Date</th>
                      <td>${book.publish_date}</td>
                  </tr>
                  <tr>
                      <th scope="row">Categories</th>
                      <td>${this.parseDataOL(book.subjects)}</td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
      `
      container.innerHTML = htmlString;
      return container;
    }
  
    parseDataOL(data){
      let parsed = "";
      for(let i = 0; i < data.length - 1; i++){
          parsed += (data[i].name + ",");
      }
      return parsed + data[data.length-1].name;
    }
  }
  
  const app = new LibraryApp();