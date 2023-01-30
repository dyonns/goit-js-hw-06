const lists = document.querySelectorAll(".item");
console.log(`Number of categories: ${lists.length}`);

for (const list of lists) {
    console.log(`Category: ${list.firstElementChild.innerHTML}`)
    console.log(`Elements: ${list.lastElementChild.children.length}`)
}