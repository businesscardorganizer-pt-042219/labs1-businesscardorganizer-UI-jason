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
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi, molestiae dolorem a nostrum sed animi.",
            },
            {
                name: "John Doe",
                image: "https://placeimg.com/100/100/people",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi, molestiae dolorem a nostrum sed animi.",
            },
            {
                name: "John Doe",
                image: "https://placeimg.com/100/100/people",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi, molestiae dolorem a nostrum sed animi.",
            },
        ];
    }

    render() {
        return html`
            <div class="cards">
                <div class="card card-media">
                    ${this.props.map(prop => {
                        return html`
                            <img class="card-img card-img-small card-media-img" src="${prop.image}" alt="${prop.name}">
                            <p class card-text card-media-text>${prop.text} ~ ${prop.name}</p>
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

window.customElements.define('testimonial-cards', TestimonialCards);
