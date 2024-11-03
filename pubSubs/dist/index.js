"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubSubManger_1 = require("./pubSubManger");
setInterval(() => {
    pubSubManger_1.PubSub.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
