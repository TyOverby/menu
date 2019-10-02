
function make_recipe(recipe) {
  let ingredients = recipe.ingredients.map(function (o) {
      return `<tr>
        <td> ${o.ingredient} </td> 
        <td> ${o.quantity} </td> 
      </tr>`
  ).join("");
  function percent(kind, value) {
      return `<div class="percent-bar">
        <span> ${kind} </span>
        <div style="width:${value}">
          <span> ${kind} </span>
        </div>
      </div>
      `
  }
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
