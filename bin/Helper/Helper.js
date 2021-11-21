"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = exports.cloneData = exports.probability = void 0;
function probability(n) {
    return !!n && Math.random() <= n;
}
exports.probability = probability;
;
function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
}
exports.cloneData = cloneData;
function UUID() {
    return Math.floor(Math.random() * Date.now());
}
exports.UUID = UUID;
