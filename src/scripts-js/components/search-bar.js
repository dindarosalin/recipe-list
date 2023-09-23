class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
      display: flex;
      max-width: 700px;
      margin: auto;
      margin-top: 70px;
      
      border-radius: 5px;
      background-color: white;

      outline: 1px solid #053B50;
    }

    input[type="search"] {
      width: 75%;
      padding: 16px;
      border: 0;
      font-weight: bold;
      font-size: 21px;
    }

    input[type="search"]:focus {
      outline: 0;
    }

    input[type="search"]::placeholder {
      color: #053B50;
      font-weight: normal;
      font-size: 21px;
    }

    button[type="submit"] {
      width: 25%;
      cursor: pointer;
      padding: 16px;
      background-color: #053B50;
      color: white;
      border: 0px;
      text-transform: uppercase;
      font-size: 18px;
    }

    @media screen and (max-width: 550px) {
      .search-container {
        flex-direction: column;
      }

      input[type="search"] {
        width: 100%;
        margin-bottom: 12px;
      }

      button[type="submit"] {
        width: 100%;
      }
    }
  </style>
  
  <div class="search-container">
    <input placeholder="Search recipe" id="searchElement" type="search">
    <button id="searchButtonElement" type="submit">Search</button>
  </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);