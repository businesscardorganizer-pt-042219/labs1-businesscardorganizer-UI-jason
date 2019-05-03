import {render} from 'lit-html';
import App from '../components/App/App.js';

const appRoot = document.querySelector('#root');
render(App('Bob'), appRoot);
