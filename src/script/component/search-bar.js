 class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
        max-width: 341px;
        // box-shadow: 0 4px 8px 0 rgb(176, 111, 27);
        padding: 8px;
        border-radius: 26px;
        // display: flex;
        position: sticky;
        top: 10px;
        // background-color: white;
        
        
       }
      
       .search-container > input {
           width: 74%;
           padding: 9px;
           border: 0;
           border-bottom: 1px solid cornflowerblue;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid cornflowerblue;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: cornflowerblue;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 19%;
           cursor: pointer;
           margin-left: auto;
           padding: 9px;
           background-color: cornflowerblue;
           color: white;
           border: 0;
           text-transform: uppercase;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
       </style>
       <center>
       <div id="search-container" class="search-container">
           <input placeholder="Search meal name" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div></center>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);