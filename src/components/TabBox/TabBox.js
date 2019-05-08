import {html, LitElement} from 'lit-element';

class TabBox extends LitElement {
    static get properties() {
        return {
            props: {type: Array},
        }
    }

    constructor() {
        super();
        this.props = [
            {
                id: 1,
                name: "One Click",
                content: "You'll have all your contacts' information within a single click. Phone number, website, and more! Plus you can search your contacts with ease for quick access to the information you need, right now.",
            },
            {
                id: 2,
                name: "Grow Fast",
                content: "You'll grow your connections, faster, with a QR code linking you with your contacts faster than ever. You'll always know exactly who they are, what you can do for them (and vice versa), where you met them, and anything else you need to know to speed your growth.",
            },
            {
                id: 3,
                name: "Get Organized",
                content: "The feeling of an organized, clean desk to a great feeling. Let us take one more thing off your desk. And the shoeboxes full of cards from under it. And the sticky notes off your monitor. Getting the picture yet?",
            },
        ]

        setTimeout(() => {
            this.querySelector('.tab').classList.add('active');
            this.querySelector('.tab-content-single').classList.add('active');
        }, 200);
    }

    clickHandler(e) {
        e.preventDefault();
        const tabContents = this.querySelectorAll('.tab-content-single');
        const tabLinks = this.querySelectorAll('.tab');
        const tabId = e.target.dataset.tab
        const target = this.querySelector(`.tab-content [data-tab="${tabId}"`)
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        target.classList.add('active');
    }

    handleLoaded(e) {
        this.querySelector('.tab').classList.add('active');
        this.querySelector('.tab-content-single').classList.add('active');
    }

    render() {
        return html`
            <div class="tab-box">
                <div class="tab-links">
                    ${this.props.map(prop => {
                        return html`
                            <a @click="${this.clickHandler}" class="tab" href="#" data-tab="${prop.id}">${prop.name}</a>
                        `;
                    })}
                </div>
                <div class="tab-content">
                    ${this.props.map(prop => {
                        return html`
                            <div class="tab-content-single" data-tab="${prop.id}">
                                ${prop.content}
                            </div>
                        `;
                    })}
                </div>
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('tab-box', TabBox);
