
function make_recipe(name, recipe) {
  let ingredients = Object.getOwnPropertyNames(recipe.ingredients).map(function (name) {
      var displayName = name;
      if (name.startsWith("*")) {
          displayName = `<strong>${name.substr(1)}</strong>`;
      }
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

let recipes = {
    "Gin & Tonic": {
        ingredients: {
            "*Gin": "2 <sub>oz</sub>",
            "Tonic": "6 <sub>oz</sub>"
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
