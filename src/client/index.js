import { buildCustomElementConstructor } from 'lwc';
import JdaWrapper from 'jda/wrapper';
import JdaNavbar from 'jda/navbar';

customElements.define('jda-wrapper', buildCustomElementConstructor(JdaWrapper));
customElements.define('jda-navbar', buildCustomElementConstructor(JdaNavbar));
