import {html, LitElement} from 'lit-element';
import '../LogoImg/LogoImg';

class Header extends LitElement {
    render() {
        return html`
            <header id="primary" class="header">
                <!-- Logo Img -->
                <logo-img></logo-img>
                <!-- Primary Nav -->
                <!-- buttons - secondary nav -->
            </header>
        `;
    }
}

window.customElements.define('app-header', Header);
