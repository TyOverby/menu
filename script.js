
function make_recipe(name, recipe) {
  var ingredients = Object.getOwnPropertyNames(recipe.ingredients).map(function (name) {
      var displayName = name;
      if (name.startsWith("*")) {
          displayName = `<strong>${name.substr(1)}</strong>`;
      }
      var quantity = recipe.ingredients[name];
      quantity = quantity.replace(/oz/g, "<small>oz</small>");
      quantity = quantity.replace(/dash/g, "<small>dash</small>");
      return `<tr>
        <td> ${displayName} </td> 
        <td> ${recipe.ingredients[name]} </td> 
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
            "*Gin": "2 <small>oz</small>",
            "Tonic": "6 <small>oz</small>"
        },
        sweet: "20%",
        alcohol: "50%",
        sour: "10%",
        bitter: "15%"
    },
    "Maple Syrup Old Fashioned": {
        ingredients: {
            "*Burbon": "2&frac14 <small>oz</small>",
            "*Rouge Vermouth": "1 <small>oz</small>",
            "Maple Syrup": "&frac12 <small>oz</small>",
            "Angostura Bitters": "1 <small>dash</small>"
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
