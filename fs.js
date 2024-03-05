const fsmodule = require("fs");
const names = ["Albert", "James", "Victor"];
names.forEach((name) => {
  fsmodule.writeFileSync(`${name} .html`, `<h1>${name}</h1>`, "utf-8");
});
fsmodule.writeFileSync("index.html", "<h1> dynamic page </h1>", "utf-8");
