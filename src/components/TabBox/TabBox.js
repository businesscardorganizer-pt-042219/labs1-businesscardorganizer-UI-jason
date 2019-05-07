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
                name: "Tab 1",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus maxime, nihil repellat cupiditate temporibus animi molestias architecto iusto optio quod maiores deleniti, laudantium aspernatur impedit, quae explicabo placeat repudiandae!",
            },
            {
                id: 2,
                name: "Tab 2",
                content: "Ad nostrum, provident excepturi laborum debitis iusto! Repudiandae veritatis quia corrupti excepturi quis ea officia quibusdam molestias, assumenda, ducimus, neque optio. Nemo voluptas aut omnis aliquid accusantium fuga obcaecati voluptatum?",
            },
            {
                id: 3,
                name: "Tab 3",
                content: "Porro iusto culpa sit, tempore sint mollitia cum dolores accusamus et ratione accusantium incidunt nostrum reiciendis. Alias corporis earum, repudiandae expedita repellat quos veritatis nobis sapiente quam aspernatur, itaque sint?",
            },
        ]
    }

    clickHandler(e) {
        e.preventDefault();
        const tabs = this.querySelectorAll('.tab-content-single');
        const tabId = e.target.dataset.tab
        const target = this.querySelector(`.tab-content [data-tab="${tabId}"`)
        tabs.forEach(tab => tab.classList.remove('active'));
        target.classList.add('active');
    }

    render() {
        return html`
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
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('tab-box', TabBox);
