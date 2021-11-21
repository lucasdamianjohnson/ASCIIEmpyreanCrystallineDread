"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityManager = void 0;
const Helper_1 = require("../Helper/Helper");
class EntityManager {
    constructor(dsCom, DS) {
        this.dsCom = dsCom;
        this.DS = DS;
        this.entites = {};
        this.createdEntites = {
            battle: {},
            "bottom-menu": {},
            "bottom-right-menu": {},
            level: {},
            menu: {},
            "right-menu": {},
        };
        this.deleting = false;
        this.activeEntities = [];
        this.drawEntities = [];
    }
    registerEntity(name, entityClass) {
        this.entites[name] = entityClass;
    }
    /**# Create New Entity
     * ---
     * Creates an entity. Adds it the render loop.
     * And returns it for later use.
     *
     * @param sceneType - The scene where it is being added
     * @param data
     * @param name
     * @param type
     * @param x
     * @param y
     * @returns
     */
    createNewEntity(sceneType, data, name, type, x, y) {
        this.createdEntites[sceneType][name]
            ? true
            : (this.createdEntites[sceneType][name] = { entities: [], ids: [] });
        const id = Helper_1.UUID();
        const entity = new this.entites[name](data, `${id}`, type, x, y, sceneType);
        if (entity.draw) {
            this.drawEntities.push(entity);
        }
        this.activeEntities.push(entity);
        this.createdEntites[sceneType][name].entities.push(entity);
        this.createdEntites[sceneType][name].ids.push(`${id}`);
        return entity;
    }
    async $draw() {
        if (this.deleting)
            return;
        for (const entity of this.drawEntities) {
            entity.$draw();
        }
    }
    async $run() {
        if (this.deleting)
            return;
        for (const entity of this.activeEntities) {
            entity.$run();
        }
    }
    deleteAllEntitiesOnScene(sceneType) {
        this.deleting = true;
        const entities = this.createdEntites[sceneType];
        for (const ent of Object.keys(entities)) {
            const e = entities[ent];
            e.entities = [];
            for (const id of e.ids) {
                let i = 0;
                while (i < this.activeEntities.length) {
                    if (this.activeEntities[i].id === id) {
                        this.activeEntities.splice(i, 1);
                    }
                    else {
                        ++i;
                    }
                }
                i = 0;
                while (i < this.drawEntities.length) {
                    if (this.drawEntities[i].id === id) {
                        this.drawEntities.splice(i, 1);
                    }
                    else {
                        ++i;
                    }
                }
            }
            e.ids = [];
        }
        this.deleting = false;
    }
    deleteAllEntites() {
        this.activeEntities = [];
        this.drawEntities = [];
        // this.createdEntites = {};
        for (const sceneType of Object.keys(this.createdEntites)) {
            const entities = this.createdEntites[sceneType];
            for (const ent of Object.keys(entities)) {
                const e = entities[ent];
                e.entities = [];
                e.ids = [];
            }
        }
    }
}
exports.EntityManager = EntityManager;
