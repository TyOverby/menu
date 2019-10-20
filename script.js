
function make_section(name, recipes) {
    var contents = 
        Object.getOwnPropertyNames(recipes)
        .map(name => make_recipe(name, recipes[name]))
        .join("");
    return `<article>
      <h1>${name}</h1>
      ${contents}
    </article>`
}

function make_recipe(name, recipe) {
    var ingredients = Object.getOwnPropertyNames(recipe.ingredients).map(function (name) {
        var displayName = name;
        if (name.startsWith("*")) {
            displayName = `<strong>${name.substr(1)}</strong>`;
        }
        var quantity = recipe.ingredients[name];
        quantity = quantity.replace(/oz/g, "<small>oz</small>");
        quantity = quantity.replace(/dash/g, "<small>dash</small>");
        quantity = quantity.replace(/1\/2/g, "&frac12");
        quantity = quantity.replace(/1\/3/g, "&#8531");
        quantity = quantity.replace(/1\/4/g, "&frac14");
        return `<tr>
        <td> ${displayName} </td> 
        <td> ${quantity} </td> 
      </tr>`
    }).join("");

    function percent(kind, value) {
        return `<div class="percent-bar">
        <span> ${kind} </span>
        <div style="width:${value}">
          <span> ${kind} </span>
        </div>
      </div>
      `
    }
    var percentages = [
        percent('sweet', recipe.sweet),
        percent('alcohol', recipe.alcohol),
        percent('sour', recipe.sour),
        percent('bitter', recipe.bitter),
    ].join("");

    return `
        <section>
            <h2> ${name} </h2>
            <div class="image"></div>
            <div class="ingredients">
                <table> 
                  ${ingredients}
                </table>
            </div>
            <div>
              ${percentages}
            </div>
        </section>
    `
}

var categories = {
    "Seasonal": {
        "Maple Syrup Old Fashioned": {
            ingredients: {
                "*Burbon": "2 1/4  oz",
                "*Rouge Vermouth": "1 oz",
                "Maple Syrup": "1/2 oz",
                "Angostura Bitters": "1 dash",
            },
            sweet: "90%",
            alcohol: "80%",
            sour: "0%",
            bitter: "10%",
        },
        "Bramble": {
            ingredients: {
                "*Gin": "2 oz",
                "Lemon Juice": "1 oz",
                "Simple Syrup": "1/3 oz",
                "Crème de Mûre": "1/2 oz",
            },
            sweet: "40%",
            alcohol: "30%",
            sour: "70%",
            bitter: "10%",
        },
        "Boulevardier": {
            ingredients: {
                "*Rye Whiskey": "1 oz",
                "*Campari": "1 oz",
                "*Sweet Vermouth": "1 oz",
            },
            sweet: "60%",
            alcohol: "70%",
            sour: "0%",
            bitter: "90%",
        }, "Pain Killer": {
            ingredients: {
                "*Dark Rum": "2 oz",
                "Pineapple Juice": "4 oz",
                "Cream of Coconut": "1 oz",
                "Orange Juice": "1 oz",
            },
            sweet: "70%",
            alcohol: "30%",
            sour: "50%",
            bitter: "0%",
        }, "Margarita": {
            ingredients: {
                "*Tequila": "2 oz",
                "*Cointreau": "1 oz",
                "Lime Juice": "3/4 oz"
            },
            sweet: "70%",
            alcohol: "80%",
            sour: "75%",
            bitter: "0%",
        }
    },
    "Classic": {
        "Gin & Tonic": {
            ingredients: {
                "*Gin": "2 oz",
                "Tonic": "6 oz",
            },
            sweet: "20%",
            alcohol: "50%",
            sour: "10%",
            bitter: "15%",
        }, "Margarita": {
            ingredients: {
                "*Tequila": "2 oz",
                "*Cointreau": "1 oz",
                "Lime Juice": "3/4 oz"
            },
            sweet: "70%",
            alcohol: "80%",
            sour: "75%",
            bitter: "0%",
        }
    }
};

document.body.innerHTML = 
    Object.getOwnPropertyNames(categories)
    .map(name => make_section(name, categories[name]))
    .join("");

setTimeout(function () {
    window.location.reload(true)
}, 1000);
