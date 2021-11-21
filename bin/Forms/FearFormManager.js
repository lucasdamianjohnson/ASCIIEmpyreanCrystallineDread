"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FearFormManager = void 0;
class FearFormManager {
    constructor(DS) {
        this.DS = DS;
        this.fearForms = {};
    }
    getFearForm(category, fearFormId) {
        return this.fearForms[category][fearFormId];
    }
    registerNewFearFormCategory(category) {
        this.fearForms[category] ? true : this.fearForms[category] = {};
        return this;
    }
    registerNewFearForm(category, id, fearFormData) {
        this.fearForms[category][id] = fearFormData;
        return this;
    }
}
exports.FearFormManager = FearFormManager;
