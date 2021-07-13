import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

   //Todo lo quye quiero que se actualice con un cambio lo tengo que meter en properties
    static get properties() {
        return {
          counter: {type: Number}  
        };
    }
    //Inicializo las propiedades en el constructor
    constructor() {
        super();
        this.counter = 0        
    }

    render() {
        return html`
        <style>
            div{
                margin: 10px 0px;
                padding: 10px;
            }

            .main__title{
                background-color: pink;
                width: 200px;
                border: 2px solid purple
            }
        </style>
        <div class="main__title">
            You have clicked ${this.counter} times
        </div>
        <div>
            <!-- Los eventos se definen con una @ -->
            <button @click="${this.increment}">+1</button>
            <button @click="${this.decrement}">-1</button>
            <feedback-element id="feedback"></feedback-element>
        </div>
        `;
    }

    get feedback(){
        return this.shadowRoot.getElementById("feedback")
    }

    increment(){
        this.counter ++
        if(this.counter == 5){
            //con this.shadowroot accedo a la raíz de este template
            this.feedback.open("You reached 5 clicks! ")
        }
    }

    decrement(){
        this.counter --
        if(this.counter == 0){
            //con this.shadowroot accedo a la raíz de este template
            this.feedback.open("You have reset the clicks")
        }
    }
}
customElements.define('my-counter', MyCounter);