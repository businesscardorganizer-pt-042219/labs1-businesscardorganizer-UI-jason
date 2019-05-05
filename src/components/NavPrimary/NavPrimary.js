import {html, render} from 'lit-html';

const nav = () => html`
    <nav id="primary" class="nav">
        <ul class="nav-list">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
        </ul>
    </nav>
`;

export {nav as NavPrimary};
