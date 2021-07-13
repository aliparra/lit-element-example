import { LitElement, html } from 'lit-element';

export class HelloWorld extends LitElement {

    //El método properties me sirve para definir que datos va a manejar este componente. 
    //Cada vez que la propiedad se actualice, litElement hará una actualización del template.
    static get properties(){
        return{
            person:{type: String}
        }
    }

    render() {
        return html`
            <p>Hola ${this.person}</p>
        `;
    }
}
customElements.define('hello-world', HelloWorld);