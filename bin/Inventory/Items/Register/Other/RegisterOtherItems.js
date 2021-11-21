"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterOtherItems = void 0;
function RegisterOtherItems() {
    DS.itemManager.registerNewOtherItem({
        id: "1",
        name: "Other 1",
        description: "Other Test 1",
        levelRequirment: 1,
    });
}
exports.RegisterOtherItems = RegisterOtherItems;
