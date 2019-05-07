import {html, LitElement} from 'lit-element';
import '../PageFooter/PageFooter';

class EndOfPage extends LitElement {

    render() {
        return html`
            <section id="cta" class="section fw-wrapper cta">
                <h2 class="cta-heading">Call To Action</h2>
                <p class="cta-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia quo nesciunt officia. Corrupti esse vitae debitis excepturi sint reprehenderit.
                </p>
                <a class="btn btn-large btn-secondary">Sign Up</a>
            </section>
            <page-footer></page-footer>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('end-of-page', EndOfPage);
