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
        const {href, title, text} = this.props;
        return html`
            <a href="${href}" title="${title}">
                ${text}
            </a>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('nav-item', NavItem);
