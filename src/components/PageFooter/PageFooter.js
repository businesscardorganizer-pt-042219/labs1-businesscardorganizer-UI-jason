import {html, LitElement} from 'lit-element';

class PageFooter extends LitElement {
    render() {
        return html`
            <footer id="page-footer" class="footer">
                <p class="legal"><small>&copy; 2019 BizQR. All rights reserved.</small></p>
            </footer>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('page-footer', PageFooter);
