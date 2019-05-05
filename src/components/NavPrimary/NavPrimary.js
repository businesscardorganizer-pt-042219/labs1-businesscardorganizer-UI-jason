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
                text: `Home`,
            },
            {
                href: `#`,
                title: `About Us`,
                text: `About`,
            },
            {
                href: `#`,
                title: `All Features`,
                text: `Features`,
            },
            {
                href: `#`,
                title: `Contact Us`,
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
                            <nav-item .props="${item}"></nav-item>
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
