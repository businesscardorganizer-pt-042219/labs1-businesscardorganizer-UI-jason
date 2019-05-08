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
                question: "Scan, tag, and go? Is it really that simple?",
                answer: "Yes! You may feel like you've hacked the system on life. Cracked the easy code. You might even feel like you need to do something to make it harder... but don't do that.",
            },
            {
                question: "What if I don't want to use events to tag contacts?",
                answer: "Use something else! The only limits are your own imagination. Hope you're not an unimaginative clod!",
            },
            {
                question: "What about people who don't have the app, how do I share my code with them?",
                answer: "Sorry, chap, I can't solve ALL your problems for you. But is someone who's not savvy enough to use this amazing app really someone you want to waste your time on?",
            },
            {
                question: "What should I do about this rash on my-",
                answer: "I'm just gonna ask you to stop right there. I told you I can't solve ALL your problems for you.",
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
