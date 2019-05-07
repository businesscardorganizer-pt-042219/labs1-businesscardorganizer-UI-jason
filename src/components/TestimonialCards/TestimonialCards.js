import {html, LitElement} from 'lit-element';

class TestimonialCards extends LitElement {
    static get properties() {
        return {
            props: {type: Array},
            elems: {type: NodeList},
            active: {type: Number},
            interval: {type: Number},
        };
    }

    constructor() {
        super();
        this.props = [
            {
                name: "John Doe",
                image: "https://randomuser.me/api/portraits/men/81.jpg",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, laudantium corporis blanditiis commodi cum dolores nisi.",
            },
            {
                name: "Jane Doe",
                image: "https://randomuser.me/api/portraits/women/29.jpg",
                text: "Quisquam, possimus in esse, explicabo officiis fuga sequi perspiciatis praesentium culpa atque? Totam praesentium dolorem.",
            },
            {
                name: "Bill Dye",
                image: "https://randomuser.me/api/portraits/men/83.jpg",
                text: "Cumque, maiores veritatis laudantium nulla natus mollitia similique dolores, voluptatum maxime eligendi animi tempora blanditiis!",
            },
        ];

        setTimeout(() => {
            this.elems = document.querySelectorAll('#testimonials .card');
            this.active = 0;
            this.elems[this.active].classList.add('active');
            this.autofade();
        }, 100);

    }

    autofade() {
        this.interval = setInterval(() => {
            this.showNext();

            const cards = document.querySelector('#testimonials .cards');
            cards.addEventListener('mouseenter', () => {
                clearInterval(this.interval);
            });

            cards.addEventListener('touchstart', () => {
                clearInterval(this.interval);
            });

            cards.addEventListener('mouseleave', () => {
                this.showNext();
                this.autofade();
            });

            cards.addEventListener('touchend', () => {
                this.showNext();
                this.autofade();
            });
        }, 5000);
    }

    showNext() {
        this.elems.forEach(el => {
            if (el.classList.contains('active')) el.classList.remove('active');
        });

        this.active = (this.active === this.elems.length - 1) ? 0 : this.active += 1;
        this.elems[this.active].classList.add('active');
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
