"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAllEntites = void 0;
const EnergyFly_entity_1 = require("./Types/PassiveCreatures/EnergyFly.entity");
const FearCrystalSpawner_entity_1 = require("./Types/FearCrystals/FearCrystalSpawner.entity");
const FearCrystalWander_entity_1 = require("./Types/FearCrystals/FearCrystalWander.entity");
const ParticleSpawner_entity_1 = require("./Types/Particles/ParticleSpawner.entity");
const RandomText_1 = require("./Types/Text/RandomText");
const MelEyes_entity_1 = require("./Types/Decor/MelEyes.entity");
const MelStats_entity_1 = require("./Types/DataDisplay/MelStats.entity");
const WorldDataDisplay_entity_1 = require("./Types/DataDisplay/WorldDataDisplay.entity");
const FearFormEntity_1 = require("./Types/FearForms/FearFormEntity");
const BattleCursorEntity_1 = require("./Types/Battles/BattleCursorEntity");
async function RegisterAllEntites() {
    DS.entityManager.registerEntity("FearCrystalWanderEntity", FearCrystalWander_entity_1.FearCrystalWanderEntity);
    DS.entityManager.registerEntity("FearCrystalSpawner", FearCrystalSpawner_entity_1.FearCrystalSpawner);
    DS.entityManager.registerEntity("EnergyFlyEntity", EnergyFly_entity_1.EnergyFlyEntity);
    DS.entityManager.registerEntity("ParticleSpawnerEntity", ParticleSpawner_entity_1.ParticleSpawnerEntity);
    DS.entityManager.registerEntity("RandomText", RandomText_1.RandomText);
    DS.entityManager.registerEntity("MelEyesEntity", MelEyes_entity_1.MelEyesEntity);
    DS.entityManager.registerEntity("MelStatsEntity", MelStats_entity_1.MelStatsEntity);
    DS.entityManager.registerEntity("WorldDataDisplayEntity", WorldDataDisplay_entity_1.WorldDataDisplayEntity);
    DS.entityManager.registerEntity("FearFormEntity", FearFormEntity_1.FearFormEntity);
    DS.entityManager.registerEntity("BattleCursorEntity", BattleCursorEntity_1.BattleCursorEntity);
}
exports.RegisterAllEntites = RegisterAllEntites;
