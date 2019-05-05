import {html, LitElement} from 'lit-element';

class Header extends LitElement {
    render() {
        return html`
            <header id="primary" class="header">
                // logo
                // primary nav
                // buttons - secondary nav
            </header>
        `;
    }
}

window.customElements.define('app-header', Header);
