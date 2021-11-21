"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterStoryItems = void 0;
function RegisterStoryItems() {
    DS.itemManager.registerNewStoryItem({
        id: "1",
        name: "Story 1",
        description: "Story 1",
        levelRequirment: 1,
        onUse: () => { }
    });
}
exports.RegisterStoryItems = RegisterStoryItems;
