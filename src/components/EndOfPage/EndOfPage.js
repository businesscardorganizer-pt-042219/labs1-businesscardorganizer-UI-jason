import {html, LitElement} from 'lit-element';
import '../PageFooter/PageFooter';

class EndOfPage extends LitElement {

    render() {
        return html`
            <section id="cta" class="section fw-wrapper cta">
                <h2 class="cta-heading">Do It The Easy Way</h2>
                <p class="cta-text">
                    Stop fretting because you can't find the shoebox full of cards you had under your desk. They're gone, man. Next time do it the easy way: scan, tag, and go!
                </p>
                <a class="btn btn-large btn-secondary" target="_blank" href="https://hopeful-ride-580fdd.netlify.com/sign-up">Get It Now</a>
            </section>
            <page-footer></page-footer>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('end-of-page', EndOfPage);
