
function make_recipe(recipe) {
  let ingredients = recipe.ingredients.map(
      {ingredient, quantity} => `<tr>
      <td> ${ingredient} </td> 
      <td> ${quantity} </td> 
      </tr>`
  ).join("");
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
                <div class="percent-bar">
                    <span> sweet </span>
                    <div style="width:20%">
                        <span> sweet </span>
                    </div>
                </div>
                <div class="percent-bar">
                    <span> alcohol </span>
                    <div style="width:50%">
                        <span> alcohol </span>
                    </div>
                </div>
                <div class="percent-bar">
                    <span> sour </span>
                    <div style="width:10%">
                        <span> sour </span>
                    </div>
                </div>
                <div class="percent-bar">
                    <span> bitter </span>
                    <div style="width:15%">
                        <span> bitter </span>
                    </div>
                </div>
            </div>
        </section>
    `
}

setTimeout(function () {
    window.location.reload(true)
}, 1000);
