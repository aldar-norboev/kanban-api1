const bodyParserPackage = require("body-parser");

function bodyParser() {
    // parse application/x-www-form-urlencoded
    app.use(bodyParserPackage.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParserPackage.json());

}

module.exports = bodyParser;