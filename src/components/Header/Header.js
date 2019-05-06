import {html, LitElement} from 'lit-element';
import '../LogoImg/LogoImg';
import '../NavPrimary/NavPrimary';

class Header extends LitElement {
    render() {
        return html`
            <div id="header-wrapper" class="fw-wrapper">
                <header id="page-header" class="header container">
                    <!-- Logo Img -->
                    <logo-img class="logo"></logo-img>
                    <h1 class="company-name">BCO</h1>
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
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('app-header', Header);
