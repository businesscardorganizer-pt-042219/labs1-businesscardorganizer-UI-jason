import {html, LitElement} from 'lit-element';
import '../LogoImg/LogoImg';
import '../NavPrimary/NavPrimary';

class Header extends LitElement {
    render() {
        return html`
            <header id="page-header" class="header">
                <!-- Logo Img -->
                <logo-img class="logo"></logo-img>
                <!-- Primary Nav -->
                <nav-primary></nav-primary>
                <!-- buttons - secondary nav -->
                <nav id="secondary" class="nav-btns">
                    <a href="login" class="btn btn-primary-light">
                        Log In
                    </a>
                    <a href="register" class="btn btn-secondary">
                        Sign Up
                    </a>
                </nav>
            </header>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('app-header', Header);
