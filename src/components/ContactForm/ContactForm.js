import {html, LitElement} from 'lit-element';

class ContactForm extends LitElement {
    static get properties() {
        return {
            formValues: {type: Object},
        };
    }

    constructor() {
        super();
    }

    submitHandler(e) {
        e.preventDefault();
        alert('Your message has been sent!');
        document.querySelector('#contact-form').reset();
    }

    render() {
        return html`
            <form id="contact-form" class="form" @submit="${this.submitHandler}">
                <div class="field">
                    <label for="name">
                        Name:
                    </label>
                    <input type="text" name="name" id="name" class="text" placeholder="Your Name">
                </div>
                <div class="field">
                    <label for="email">
                        Email:
                    </label>
                    <input type="email" name="email" id="email" class="text" placeholder="email@domain.com">
                </div>
                <div class="field">
                    <label for="reason">Reason:</label>
                    <select name="reason" id="reason" class="dropdown">
                        <option>--- Pick One: ---</option>
                        <option value="pre-sales">Question before I sign up</option>
                        <option value="support">Support request for a user</option>
                        <option value="bug">There's a problem with my BizQR</option>
                        <option value="other">Something else</option>
                    </select>
                </div>
                <div class="field field-fw">
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" class="textbox" placeholder="Your Message Here..."></textarea>
                </div>
                <div class="field">
                    <label for="human"><input type="checkbox" id="human" name="human" class="check">Are You Human?</label>
                </div>
                <button type="submit" class="btn btn-secondary btn-large btn-centered btn-submit">Send Message</button>
            </form>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

window.customElements.define('contact-form', ContactForm);
