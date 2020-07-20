class CustomHeading extends HTMLElement{
    constructor(){
        super();
        console.log('the class is instantiated');

        this.addEventListener('click',() => {
            this.style.color ='green';
        },3000);
    }
    connectedCallback(){
        this.style.fontWeight = 'bold';
        this.style.color = 'blue';
        console.log('custom heading connected');
    }

    disconnectedCallback() {
        console.log('element is disconnected from the page');
    }
}

customElements.define('custom-heading', CustomHeading);

export default CustomHeading