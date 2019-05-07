import {html, LitElement} from 'lit-element';
import '../NavItem/NavItem';

class NavPrimary extends LitElement {
    static getProperties() {
        return {navItems: Array};
    }

    constructor() {
        super();
        this.navItems = [
            {
                href: `#`,
                title: `Home Page`,
                icon: `https://png.icons8.com/material-outlined/home-page/B35E1A/32`,
                text: `Home`,
            },
            {
                href: `#`,
                title: `About Us`,
                icon: `https://png.icons8.com/material-outlined/about/B35E1A/32`,
                text: `About`,
            },
            {
                href: `#`,
                title: `All Features`,
                icon: `https://png.icons8.com/material-outlined/features-list/B35E1A/32`,
                text: `Features`,
            },
            {
                href: `#`,
                title: `Contact Us`,
                icon: `https://png.icons8.com/material-outlined/contacts/B35E1A/32`,
                text: `Contact`,
            },
        ]
    }

    render() {
        return html`
            <nav id="primary" class="nav">
                <ul class="nav-list">
                    ${this.navItems.map(item => {
                        return html`
                            <li class="nav-item">
                                <nav-item .props="${item}"></nav-item>
                            </li>
                        `;
                    })}
                </ul>
            </nav>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('nav-primary', NavPrimary);
