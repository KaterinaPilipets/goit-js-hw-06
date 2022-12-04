const categories = [...document.querySelector("#categories").children]
console.log("Number of categories:", categories.length)
for (const el of categories) {
    const category = el.querySelector("h2");
    console.log("Category:",category.textContent)
    const elements = [...el.querySelector("ul").children].length
    console.log("Elements:",elements)
}
// console.log(document.querySelector("#categories").children)