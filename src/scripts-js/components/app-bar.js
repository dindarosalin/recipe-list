class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: #053B50;
          color: white;
          position: fixed;
          top: 0;
          left: 0;
        }
        h2 {
          padding: 16px;
          text-align: center;
          flex-grow: 1;
        }

        @media screen and (max-width: 768px) {
          h2 {
            font-size: 18px;
            padding: 10px;
          }
        }
      </style>
      
      <h2>Recipes Finder</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
