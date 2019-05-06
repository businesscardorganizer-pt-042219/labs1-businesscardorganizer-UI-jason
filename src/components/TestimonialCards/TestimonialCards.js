import {html, LitElement} from 'lit-element';

class TestimonialCards extends LitElement {
    static get properties() {
        return {
            props: {type: Array},
        };
    }

    constructor() {
        super();
        this.props = [
            {
                name: "John Doe",
                image: "https://placeimg.com/100/100/people",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi.",
            },
            {
                name: "John Doe",
                image: "https://placeimg.com/100/100/people",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi.",
            },
            {
                name: "John Doe",
                image: "https://placeimg.com/100/100/people",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi.",
            },
        ];
    }

    render() {
        return html`
            <div class="cards">
                ${this.props.map(prop => {
                    return html`
                        <div class="card card-media">
                            <img class="card-img card-img-thumb card-media-img" src="${prop.image}" alt="${prop.name}">
                            <p class="card-text card-media-text">
                                ${prop.text}<br>
                                <span class="testimonial-name">~ ${prop.name}</span>
                            </p>
                        </div>
                    `;
                })}
            </div>
            <div class="counter">
                ${this.props.map(prop => html`<div class="counter-item"></div>`)}
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('testimonial-cards', TestimonialCards);
