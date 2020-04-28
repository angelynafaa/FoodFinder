class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 1px;
                   padding: 0px;
                   box-sizing: border-box;
                   width:50%;
                   float:left;
                   
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-meal {
                   width: 102%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: left;
               }
               .meal-info > h3 {
                font-weight: lighter;
            }
            .meal-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                text-align: left;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
           </style>
           <div class="col-sm-3">
           <a href="${this._meal.strYoutube}"> <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art"> </a>
           <h3>${this._meal.strMeal}</h3>
            <p>${this._meal.strArea}</p>
    </div>     
           `;
    }
}

customElements.define("meal-item", MealItem);