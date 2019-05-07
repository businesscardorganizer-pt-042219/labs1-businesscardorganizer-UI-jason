import {html, LitElement} from 'lit-element';

class NavItem extends LitElement {
    static getProperties() {
        return {
            props: {type: Object},
        };
    }

    constructor() {
        super();
    }

    render() {
        const {href, title, icon, text} = this.props;
        return html`
            <a class="nav-link" href="${href}" title="${title}">
                <img class="nav-icon" src="${icon}" alt="${title} icon">
                ${text}
            </a>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('nav-item', NavItem);
