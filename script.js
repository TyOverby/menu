
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
            <h1> ${name} </h1>
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

var recipes = {
    "Gin & Tonic": {
        ingredients: {
            "*Gin": "2 oz",
            "Tonic": "6 oz"
        },
        sweet: "20%",
        alcohol: "50%",
        sour: "10%",
        bitter: "15%"
    },
    "Maple Syrup Old Fashioned": {
        ingredients: {
            "*Burbon": "2&frac14 oz",
            "*Rouge Vermouth": "1 oz",
            "Maple Syrup": "&frac12 oz",
            "Angostura Bitters": "1 dash"
        },
        sweet: "90%",
        alcohol: "80%",
        sour: "0%",
        bitter: "10%"
    }
};

document.body.innerHTML = 
    Object.getOwnPropertyNames(recipes)
    .map(name => make_recipe(name, recipes[name]))
    .join("");


setTimeout(function () {
    window.location.reload(true)
}, 1000);
