import '../style/app-bar.css';

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
      <h2>Recipe Finder</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
