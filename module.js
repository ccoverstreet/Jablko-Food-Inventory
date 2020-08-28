// module.js: Jablko Food Inventory Module
// Cale Overstreet
// August 27, 2020
// Keeps track of food using an entry in the Jablko SQLite database in the module_name table

const fs = require("fs").promises;
const path = require("path");

// Base setup
const module_name = path.basename(__dirname)
const jablko = require(module.parent.filename)
const module_config = jablko.jablko_config.jablko_modules[module_name]

module.exports.permission_level = 0

module.exports.generate_card = async function() {
	return (await fs.readFile(`${__dirname}/food_inventory.html`, "utf8")).replace(/\$MODULE_NAME/g, module_name).replace(/\$CORINNE_ING_LIST/, "A generated checkbox list with correct ids will be generated here and then sent to client. The client side will then determine what boxes have been checked and make a list of the ids with the $MODULE_NAME removed to send back to the server. generate_shopping_items will generate string from Corinne's JSON");
}

function generate_shopping_items() {
	// Generate HTML checkbox string from Corinne's JSON
	return "HTML STRING";
}
