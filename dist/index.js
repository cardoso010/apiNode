"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
require("reflect-metadata");
const express = new config_1.ExpressConfig;
express.app.listen(3000, () => {
    console.log("Running server");
});
//# sourceMappingURL=index.js.map