"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSub = void 0;
const redis_1 = require("redis");
class PubSub {
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
        this.redisClient.connect();
        this.subscriebtion = new Map();
    }
    static getInstance() {
        if (!PubSub.Instance) {
            PubSub.Instance = new PubSub();
        }
        return PubSub.Instance;
    }
    userSubscribe(stock, userId) {
        var _a, _b;
        if (!this.subscriebtion.has(stock)) {
            this.subscriebtion.set(stock, []);
        }
        (_a = this.subscriebtion.get(stock)) === null || _a === void 0 ? void 0 : _a.push(userId);
        if (((_b = this.subscriebtion.get(stock)) === null || _b === void 0 ? void 0 : _b.length) === 1) {
            this.redisClient.subscribe(stock, (message) => {
                this.redisClient.subscribe(stock, message);
            });
            console.log(`Subscribed to Redis channel: ${stock}`);
        }
    }
    userUnsubscribe(userId, stock) {
        var _a, _b;
        this.subscriebtion.set(stock, ((_a = this.subscriebtion.get(stock)) === null || _a === void 0 ? void 0 : _a.filter((sub) => sub !== userId)) || []);
        if (((_b = this.subscriebtion.get(stock)) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            this.redisClient.unsubscribe(stock);
            console.log(`UnSubscribed to Redis channel: ${stock}`);
        }
    }
    handldMessages(stock, messages) {
        var _a;
        (_a = this.subscriebtion.get(stock)) === null || _a === void 0 ? void 0 : _a.map((sub) => {
            console.log(`the message is ${messages} , ${sub}`);
        });
    }
}
exports.PubSub = PubSub;
