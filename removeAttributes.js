let link = document. querySelector("#link")
console.log(link.getAttribute("href"))
link.setAttribute("target", "_self");

// 4. Remove target completely
link.removeAttribute("target");

// 5. Print target afterward
console.log(link.getAttribute("target"));