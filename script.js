
function make_recipe(recipe) {
  let ingredients = Object.getOwnPropertyNames(recipe.ingredients).map(function (name) {
      return `<tr>
        <td> ${name} </td> 
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
            <h1> ${recipe.name} </h1>
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

setTimeout(function () {
    window.location.reload(true)
}, 1000);
