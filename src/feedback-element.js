import { LitElement, html } from 'lit-element';

export class FeedbackElement extends LitElement {

    static get properties() {
        return {
          message: {type: String},
          opened: {type: Boolean}
        };
    }

    
    render() {
        return html`
          <style>
              div{
                  position: fixed;
                  bottom: 0px;
                  left: 0px;
                  overflow: hidden;
                  height: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #e74c3c;
                  color: white;
                  width: 100%;
                  transition: all 0.7s ease-in;
                  font-family: "sans-serif";
                  font-size: 1px;
              }
              .opened{
                  height: 100px;
                  font-size: 2em;
              }
          </style>
            <div class="${this.opened ? "opened" : ""}">
                ${this.message}
            </div>
        `;
    }

    open(mess){
        this.message = mess;
        this.opened = true;

        setTimeout(() => {
           this.opened = false 
        }, 3000);
    }
}
customElements.define('feedback-element', FeedbackElement);