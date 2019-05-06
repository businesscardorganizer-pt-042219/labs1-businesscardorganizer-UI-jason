import {html, LitElement} from 'lit-element';

class FAQAccordion extends LitElement {
    static get properties() {
        return {
            faqs: {type: Array},
        }
    }

    constructor() {
        super();
        this.faqs = [
            {
                question: "Question 1",
                answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio voluptatem.",
            },
            {
                question: "Question 2",
                answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio voluptatem.",
            },
            {
                question: "Question 3",
                answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio voluptatem.",
            },
            {
                question: "Question 4",
                answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio voluptatem.",
            },
        ]
    }

    clickHandler(e) {
        document.querySelectorAll('.accordion-body').forEach(el => {
            if (el !== e.target.nextElementSibling) {
                el.classList.remove('active');
            }
        });
        e.target.nextElementSibling.classList.toggle('active');
    }

    render() {
        return html`
            <section id="faqs" class="section container">
                <h2 class="section-heading">Frequently Asked Questions</h2>
                <div class="accordion">
                ${this.faqs.map((faq, i) => {
                    return html`
                        <div class="accordion-container">
                            <h3 class="accordion-title" @click="${this.clickHandler}">${i + 1}: ${faq.question}</h3>
                            <div class="accordion-body">${faq.answer}</div>
                        </div>
                    `;
                })}
                </div>
            </section>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('faq-accordion', FAQAccordion);
