import { LitElement, html, css } from 'lit-element'


const author = 'Ram';
const studyLink = 'https://www.google.com'
const footerTemplate = html`
<footer>This article is made by ${author}. check the link <a href="${studyLink}">${studyLink}</a> for reference</footer>
`

class ShoppingCartLit extends LitElement {
   static get properties(){
       return {
           shoppingList : { type : Array  }
       }
   }

   static get styles(){
    return css`
    :host {
        color: blue;
      }


    ul {
        list-style: none;
        padding: 0;
      }

    `;
   }
   

    constructor() {
        super()
    
        // this.shoppingList = ['Do A', 'Do B', 'Do C']

        this.shoppingList = [
            {text : 'T-Shirt', ordered : true}
        ]
    }
        

    render(){
        return html `

            <input id="addshoppingList" placeholder="Name"/>
            <button @click=${this._addshop}>Add</button>
        
            <ul>
    
                ${this.shoppingList.map(shop => html`
                <li>
                    <input type = "checkbox"
                    .checked = ${shop.ordered}
                    @change= ${e=> this._changeshopordered(e,shop)}
                    />

                    ${shop.text}
                    <button @click= ${() => this._removeshop(shop)}>X</button>
                </li>
            `,)}

            </ul>
    

        

        ${footerTemplate}
        `;
        
    }

    _addshop(){
        const input = this.shadowRoot.getElementById('addshoppingList');
        const text = input.value;
        input.value = "";
        
        this.shoppingList = [...this.shoppingList, {text:text, ordered:false}];

        // this.shoppingList.push({text, ordered:false});
        this.requestUpdate();
    }

    _removeshop(shop){
        this.shoppingList = this.shoppingList.filter(e => e !== shop)
    }

    _changeshopordered(e, changedshop) {
        const ordered = e.target.checked;

        this.shoppingList = this.shoppingList.map(shop => {
          if (shop !== changedshop) {
            return shop;
          }
          return { ...changedshop, ordered };
        });
      }

}

customElements.define('shopping-cart', ShoppingCartLit)