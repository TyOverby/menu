
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

function make_spirits(kinds) {
    var contents = 
        Object.getOwnPropertyNames(kinds)
        .map(name =>  {
            let all = kinds[name].map(i => `<div>${i}</div>`).join('');
            return `<section>
            <div><strong>${name}</strong></div>
            ${all}
            </section>`
        })
        .join("");

    return `<article>
      <h1> Neat </h1>
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
                "*Crème de Mûre": "1/2 oz",
                "Lemon Juice": "1 oz",
                "Simple Syrup": "1/3 oz",
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
        },
        "Pain Killer": {
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
        } 
    },
    "Standards": {
        "Whiskey Sour": {
            ingredients: {
                "*Whiskey": "1 3/4 oz",
                "Lemon Juice": "1 oz",
                "Gomme Syrup": "1/2 oz",
                "Egg White": "",
            },
            sweet: "50%",
            alcohol: "50%",
            sour: "50%",
            bitter: "10%",
        },
        "Sazerac": {
            ingredients: {
                "*Cognac": "1 3/4 oz",
                "*Absinthe": "1 dash",
                "Gomme Syrup": "1/2 oz",
                "Peychaud's Bitters": "2 dashes",
            },
            sweet: "25%",
            alcohol: "60%",
            sour: "0%",
            bitter: "10%",
        },
        "Gin & Tonic": {
            ingredients: {
                "*Gin": "2 oz",
                "Tonic": "6 oz",
            },
            sweet: "20%",
            alcohol: "50%",
            sour: "10%",
            bitter: "15%",
        }, 
        "Margarita": {
            ingredients: {
                "*Tequila": "2 oz",
                "*Cointreau": "1 oz",
                "Lime Juice": "3/4 oz"
            },
            sweet: "70%",
            alcohol: "80%",
            sour: "75%",
            bitter: "0%",
        },
        "Mezcal Margarita": {
            ingredients: {
                "*Mezcal": "1 1/2 oz",
                "*Cointreau": "1 oz",
                "Lime Juice": "1/4 oz"
            },
            sweet: "70%",
            alcohol: "80%",
            sour: "75%",
            bitter: "0%",
        },
        "Aviation": {
            ingredients: {
                "*Gin": "1 1/2 oz",
                "*Maraschino Liqueur": "1/2 oz",
                "*Crème de Violette": "1/4 oz",
                "Lemon Juice": "1/2 oz",
            },
            sweet: "80%",
            alcohol: "70%",
            sour: "75%",
            bitter: "25%",
        }
    }
};

var spirits = {
    "Rye": [
        "Rittenhouse", 
        "Bulleit", 
        "Whistlepig",
    ],
    "Scotch": [
        "Monkey Shoulder", 
        "Laphroig 10 yr", 
        "Aberlour 12 yr", 
        "Aberlour A'Bunadh",
    ],
    "Japanese": [
        "Nikka Coffey Malt", 
        "Nikka Coffey Grain",
        "Nikka From the Barrel",
    ], 
    "Bourbon": [
        "Buffalo Trace"
    ]
}

document.body.innerHTML = ""
document.body.innerHTML += 
    Object.getOwnPropertyNames(categories)
    .map(name => make_section(name, categories[name]))
    .join("");

document.body.innerHTML += makeSpirits(spirits);

setTimeout(function () {
    window.location.reload(true)
}, 1000);
