import {html, LitElement} from 'lit-element';

class LogoImg extends LitElement {
    render() {
        return html`
            <img src="img/logo.png" alt="Logo" class="logo-img">
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('logo-img', LogoImg);
