"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverWorld = void 0;
function OverWorld() {
    const LM = DS.levelManager;
    LM.registerSceneMeta("overworld")
        .addSceneToMeta("overworld", {
        id: "1",
        leftScrene: "5",
        bottomScrene: "cyrstal-alter",
        topScrene: false,
        rightScrene: "4",
        animations: {
            "1": [
                {
                    animText: ["⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌"],
                    style: { fg: "Blue", dim: true },
                    interval: 2,
                    row: 14,
                    col: 19,
                },
                {
                    animText: ["⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌"],
                    style: { fg: "Blue", bright: true },
                    interval: 2,
                    row: 14,
                    col: 19,
                },
            ],
            "2": [
                {
                    animText: ["<┉┉┉┉┉┉┉┉┉┉>"],
                    style: { fg: "Magenta", dim: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<┉┉┉┉||┉┉┉┉>"],
                    style: { fg: "Magenta", dim: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<┉┉┉┉||┉┉┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<┉┉┉||||┉┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<┉┉||||||┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<┉||||||||┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<||||||||||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<||||┉┉||||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<|||┉┉┉┉|||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<||┉┉┉┉┉┉||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<|┉┉┉┉┉┉┉┉|>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
                {
                    animText: ["<┉┉┉┉┉┉┉┉┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 3,
                },
            ],
            "3": [
                {
                    animText: ["<┉┉┉┉┉┉┉┉┉┉>"],
                    style: { fg: "Magenta", dim: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<┉┉┉┉||┉┉┉┉>"],
                    style: { fg: "Magenta", dim: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<┉┉┉┉||┉┉┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<┉┉┉||||┉┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<┉┉||||||┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<┉||||||||┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<||||||||||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<||||┉┉||||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<|||┉┉┉┉|||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<||┉┉┉┉┉┉||>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<|┉┉┉┉┉┉┉┉|>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
                {
                    animText: ["<┉┉┉┉┉┉┉┉┉┉>"],
                    style: { fg: "Magenta", bright: true },
                    interval: 3,
                    row: 4,
                    col: 35,
                },
            ],
            //┉
        },
        screenStateAnimationKeys: {
            "1": [
                {
                    stateName: "1",
                    inteerval: 30,
                },
                {
                    stateName: "2",
                    inteerval: 5,
                },
                {
                    stateName: "3",
                    inteerval: 5,
                },
                {
                    stateName: "2",
                    inteerval: 3,
                },
                {
                    stateName: "3",
                    inteerval: 5,
                },
                {
                    stateName: "2",
                    inteerval: 3,
                },
                {
                    stateName: "3",
                    inteerval: 5,
                },
                {
                    stateName: "2",
                    inteerval: 3,
                },
            ]
        },
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `**************************************************
|▓▓╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝▓▓|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|▓▓████████████▓▓║┏┻┻┻┻━━━━┻┻┻┻┓║▓▓████████████▓▓|
|▓██████████████▓║┫ ┏━┓    ┏━┓ ┣║▓██████████████▓ 
|▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓║┗┳┻┛┗    ┛┗┻┳┛║▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║ ┗┓  /  \\  ┏┛ ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┣┓  ┘└  ┏┫  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┃┗┓    ┏┛┃  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┃ ┗┳┳┳┳┛ ┃  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║   ┗┻┻┻┻┻┻┛   ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║              ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║              ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓▓████████████▓▓║╗⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌╔║▓▓████████████▓▓|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|╝            ╚|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
            "2": {
                collisionMap: "1",
                styleMap: "1",
                map: `**************************************************
|▓▓╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝▓▓|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|▓▓████████████▓▓║┏┻┻┻┻━━━━┻┻┻┻┓║▓▓████████████▓▓|
|▓██████████████▓║┫ ┏━┓    ┏━┓ ┣║▓██████████████▓ 
|▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓║┗┳┻|┗    ┛|┻┳┛║▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║ ┗┓  /  \\  ┏┛ ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┣┓  ┘└  ┏┫  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┃┗┓    ┏┛┃  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┃ ┗┳┳┳┳┛ ┃  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┗┓      ┏┛  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║   ┗┻┻┻┻┻┻┛   ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║              ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓▓████████████▓▓║╗⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌╔║▓▓████████████▓▓|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|╝            ╚|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
            "3": {
                collisionMap: "1",
                styleMap: "2",
                map: `**************************************************
|▓▓╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝╚╝▓▓|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|▓▓████████████▓▓║┏┻┻┻┻━━━━┻┻┻┻┓║▓▓████████████▓▓|
|▓██████████████▓║┫ ┏━┓    ┏━┓ ┣║▓██████████████▓ 
|▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓║┗┳┻0┗    ┛0┻┳┛║▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║ ┗┓  /  \\  ┏┛ ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┣┓  ┘└  ┏┫  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┃┗┓    ┏┛┃  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┃ ┗┳┳┳┳┛ ┃  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║  ┗┓      ┏┛  ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║   ┃      ┃   ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓║   ┗┻┻┻┻┻┻┛   ║▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|▓▓████████████▓▓║╗⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌⛌╔║▓▓████████████▓▓|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|╝            ╚|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
        },
        styleMap: {
            "1": {
                dim: true,
                fg: "Red",
            },
            "2": {
                dim: false,
                fg: "Red",
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                 ██████████████                 |
|██████████████████            ██████████████████|
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "1",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "ParticleSpawnerEntity",
                type: "Rain",
                data: { fgColor: "Red" },
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|           1                                    |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
    })
        .addSceneToMeta("overworld", {
        id: "cyrstal-alter",
        leftScrene: false,
        bottomScrene: false,
        topScrene: "1",
        rightScrene: "3",
        animations: {
            "bar-down": [
                {
                    animText: [""],
                    row: 12,
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    animDirection: "down",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    animDirection: "down",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    animDirection: "down",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    animDirection: "down",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["", "", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    animDirection: "down",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["", "", "", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 12,
                    animDirection: "down",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
            ],
            "bar-up": [
                {
                    animText: [""],
                    row: 8,
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    animDirection: "up",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    animDirection: "up",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    animDirection: "up",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    animDirection: "up",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["", "", "┉┉┉┉┉┉┉┉┉┉", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    animDirection: "up",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
                {
                    animText: ["", "", "", "┉┉┉┉┉┉┉┉┉┉"],
                    row: 8,
                    animDirection: "up",
                    col: 20,
                    style: {
                        fg: "Cyan",
                    },
                    interval: 6,
                },
            ],
            "bar-right": [
                {
                    animText: ["      "],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["|     "],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||    "],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["|||   "],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||||  "],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||||| "],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||||||"],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: [" |||||"],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["  ||||"],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["   |||"],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["    ||"],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["     |"],
                    row: 10,
                    col: 32,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
            ],
            "bar-left": [
                {
                    animText: ["      "],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["     |"],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["    ||"],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["   |||"],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["  ||||"],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: [" |||||"],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||||||"],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||||| "],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||||  "],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["|||   "],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["||    "],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
                {
                    animText: ["|     "],
                    row: 10,
                    col: 12,
                    style: { fg: "Cyan" },
                    interval: 3,
                },
            ],
            red: [
                {
                    animText: ["⛋"],
                    row: 5,
                    col: 17,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Red",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 5,
                    col: 17,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Red",
                        dim: false,
                        bright: false,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 5,
                    col: 17,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Red",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
            ],
            green: [
                {
                    animText: ["⛋"],
                    row: 10,
                    col: 8,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Green",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 10,
                    col: 8,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Green",
                        dim: false,
                        bright: false,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 10,
                    col: 8,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Green",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
            ],
            blue: [
                {
                    animText: ["⛋"],
                    row: 15,
                    col: 17,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Blue",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 15,
                    col: 17,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Blue",
                        dim: false,
                        bright: false,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 15,
                    col: 17,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Blue",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
            ],
            cyan: [
                {
                    animText: ["⛋"],
                    row: 5,
                    col: 32,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Cyan",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 5,
                    col: 32,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Cyan",
                        dim: false,
                        bright: false,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 5,
                    col: 32,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Cyan",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
            ],
            magenta: [
                {
                    animText: ["⛋"],
                    row: 10,
                    col: 41,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Magenta",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 10,
                    col: 41,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Magenta",
                        dim: false,
                        bright: false,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 10,
                    col: 41,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Magenta",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
            ],
            yellow: [
                {
                    animText: ["⛋"],
                    row: 15,
                    col: 32,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Yellow",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 15,
                    col: 32,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Yellow",
                        dim: false,
                        bright: false,
                    },
                    interval: 6,
                },
                {
                    animText: ["⛋"],
                    row: 15,
                    col: 32,
                    style: {
                        fg: !DS.player.playerData.crystals.red ? "Black" : "Yellow",
                        dim: false,
                        bright: true,
                    },
                    interval: 6,
                },
            ],
        },
        screenStateAnimationKeys: {
            "1": [
                {
                    stateName: "1",
                    inteerval: 6,
                },
                {
                    stateName: "2",
                    inteerval: 6,
                },
                {
                    stateName: "3",
                    inteerval: 6,
                },
            ]
        },
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `**************************************************
|                                                |
|                                                |
|                                                |
|               ╱ ┣┓          ┏┫ ╲               |
|             ╱   ┃║          ║┃   ╲             |
|           ╱     ┃║          ║┃     ╲           |
|         ╱   ┏┉┉┉┫║          ║┣┉┉┉┓   ╲         |
|       ╱  ┏┉┉┛   ┃╱▔▔▔▔░░▔▔▔▔╲┃   ┗┉┉┓  ╲       |
|      ┃   ║     ╱┃┣━━━░██░━━━┫┃╲     ║   ┃      |
|       ╲  ┗┉┉┓   ┃╲▁▁▁▁░░▁▁▁▁╱┃   ┏┉┉┛  ╱       |
|         ╲   ┗┉┉┉┫║          ║┣┉┉┉┛   ╱         |
|           ╲     ┃║          ║┃     ╱           |
|             ╲   ┃║          ║┃   ╱             |
|               ╲ ┣┛          ┗┫ ╱               |
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
            "2": {
                collisionMap: "1",
                styleMap: "2",
                map: `**************************************************
|                                                |
|                                                |
|                                                |
|               ╱ ┣┓          ┏┫ ╲               |
|             ╱   ┃║          ║┃   ╲             |
|           ╱     ┃║          ║┃     ╲           |
|         ╱   ┏┉┉┉┫║          ║┣┉┉┉┓   ╲         |
|       ╱  ┏┉┉┛   ┃╱▔▔▔▔██▔▔▔▔╲┃   ┗┉┉┓  ╲       |
|      ┃   ║     ┃┃┣━━━█░░█━━━┫┃┃     ║   ┃      |
|       ╲  ┗┉┉┓   ┃╲▁▁▁▁██▁▁▁▁╱┃   ┏┉┉┛  ╱       |
|         ╲   ┗┉┉┉┫║          ║┣┉┉┉┛   ╱         |
|           ╲     ┃║          ║┃     ╱           |
|             ╲   ┃║          ║┃   ╱             |
|               ╲ ┣┛          ┗┫ ╱               |
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
            "3": {
                collisionMap: "1",
                styleMap: "1",
                map: `**************************************************
|                                                |
|                                                |
|                                                |
|               ╱ ┣┓          ┏┫ ╲               |
|             ╱   ┃║          ║┃   ╲             |
|           ╱     ┃║          ║┃     ╲           |
|         ╱   ┏┉┉┉┫║          ║┣┉┉┉┓   ╲         |
|       ╱  ┏┉┉┛   ┃╱▔▔▔▔░░▔▔▔▔╲┃   ┗┉┉┓  ╲       |
|      ┃   ║     ╲┃┣━━━░░░░━━━┫┃╱     ║   ┃      |
|       ╲  ┗┉┉┓   ┃╲▁▁▁▁░░▁▁▁▁╱┃   ┏┉┉┛  ╱       |
|         ╲   ┗┉┉┉┫║          ║┣┉┉┉┛   ╱         |
|           ╲     ┃║          ║┃     ╱           |
|             ╲   ┃║          ║┃   ╱             |
|               ╲ ┣┛          ┗┫ ╱               |
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
        },
        styleMap: {
            "1": {
                dim: true,
                fg: "Magenta",
            },
            "2": {
                dim: false,
                fg: "Magenta",
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|               █ ██████████████ █               |
|             █   ┃║          ║┃   █             |
|           █     ┃║          ║┃     █           |
|         █   ┏┉┉┉┫║          ║┣┉┉┉┓   █         |
|       █  ┏┉┉┛   ┃╱▔▔▔▔░░▔▔▔▔╲┃   ┗┉┉┓  █       |
|      █   ║     ╲┃┣━━━░░░░━━━┫┃╱     ║   █      |
|       █  ┗┉┉┓   ┃╲▁▁▁▁░░▁▁▁▁╱┃   ┏┉┉┛  █       |
|         █   ┗┉┉┉┫║          ║┣┉┉┉┛   █         |
|           █     ┃║          ║┃     █           |
|             █   ┃║          ║┃   █             |
|               █ ██████████████ █               |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "1",
        activeEntityMap: "",
        entityMap: {},
        entityMapRaw: {},
    })
        .addSceneToMeta("overworld", {
        id: "4",
        animations: {},
        leftScrene: "1",
        bottomScrene: "3",
        topScrene: false,
        rightScrene: "7",
        screenStateAnimationKeys: {
            "1": [
                {
                    inteerval: 100,
                    stateName: "1",
                },
                {
                    inteerval: 2,
                    stateName: "2",
                },
                {
                    inteerval: 5,
                    stateName: "1",
                },
                {
                    inteerval: 2,
                    stateName: "2",
                },
                {
                    inteerval: 5,
                    stateName: "1",
                },
                {
                    inteerval: 2,
                    stateName: "2",
                },
            ]
        },
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `**************************************************
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████▓▓              |
|▓▓▓████████████▓▓▓▓██████████████▓              |
|▓▓██████████████▓▓▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓              |
|▓▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓              |
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓              |
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┳┳┳┳┳┳┳┳┳┳┳┳┳┳|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃┃┃┃┃┃┃┃┃┃┃┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓▓████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              |
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                               |
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
            "2": {
                collisionMap: "1",
                styleMap: "2",
                map: `**************************************************
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████▓▓              |
|▓▓▓████████████▓▓▓▓██████████████▓              |
|▓▓██████████████▓▓▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓              |
|▓▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓              |
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓              |
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┳┳┳┳┳┳┳┳┳┳┳┳┳┳|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃┃┃┃┃┃┃┃┃┃┃┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃|
|▓▓▓████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              |
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                               |
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
        },
        styleMap: {
            "1": {
                fg: "Black",
                bright: true,
            },
            "2": {
                bg: "White",
                fg: "Black",
                bright: true,
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                  ██████████████|
|                 █████████████████              |
|█████████████████                               |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "1",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
            },
            "2": {
                entityName: "ParticleSpawnerEntity",
                type: "Rain",
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                  1                    1        |
|     2                        1                 |
**************************************************`,
        },
    })
        .addSceneToMeta("overworld", {
        id: "5",
        animations: {},
        leftScrene: "6",
        bottomScrene: "3",
        topScrene: false,
        rightScrene: "1",
        screenStateAnimationKeys: {},
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `**************************************************
|              ▓▓▓████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|              ▓▓██████████████▓▓▓▓████████████▓▓|
|              ▓▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓▓▓██████████████▓|
|              ▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█▛╋╋╋╋╋╋╋╋╋╋▜█▓|
|              ▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┳┳┳┳┳┳┳┳┳┳┳┳┳┳▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┃┃┃┃┃┃┃┃┃┃┃┃┃┃▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓▓▓█╋╋╋╋╋╋╋╋╋╋╋╋█▓|
|              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████████▓▓|
|                                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
|                                                |
|                                                |
|                                                |
**************************************************`,
            },
        },
        styleMap: {
            "1": {
                fg: "Black",
                bright: true,
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|███████████████                                |
|               ████████████████                 |
|                               █████████████████|
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "ParticleSpawnerEntity",
                type: "Rain",
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|           1                                    |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
    })
        .addSceneToMeta("overworld", {
        id: "6",
        leftScrene: "8",
        bottomScrene: false,
        topScrene: false,
        rightScrene: "5",
        animations: {},
        screenStateAnimationKeys: {},
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳▒
▒┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃▒
▒┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓▒
▒┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓▒
▒┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓▒
▒┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓▒
▒┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`,
            },
        },
        styleMap: {
            "1": {
                fg: "Black",
                bright: true,
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|████████████████████████████████████████████████|
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "ParticleSpawnerEntity",
                type: "Rain",
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|           1                                    |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
    })
        .addSceneToMeta("overworld", {
        id: "7",
        leftScrene: "4",
        bottomScrene: false,
        topScrene: false,
        rightScrene: false,
        animations: {},
        screenStateAnimationKeys: {},
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳▒
▒┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃▒
▒▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▒
▒▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▒
▒▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▒
▒▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▒
▒▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▓▓┃┃▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`,
            },
        },
        styleMap: {
            "1": {
                fg: "Black",
                bright: true,
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|████████████████████████████████████████████████|
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "ParticleSpawnerEntity",
                type: "Rain",
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|           1                                    |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
    })
        .addSceneToMeta("overworld", {
        id: "8",
        leftScrene: false,
        bottomScrene: false,
        topScrene: "4",
        rightScrene: "6",
        animations: {},
        screenStateAnimationKeys: {},
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`,
            },
        },
        styleMap: {
            "1": {
                fg: "Black",
                bright: true,
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "FearCrystalSpawner",
                type: "Rain",
                data: {
                    "over-world-1": [
                        {
                            probability: 1,
                            fearFormMap: [
                                {
                                    id: "creature-1",
                                    probability: 1,
                                    min: 20,
                                    max: 20,
                                },
                            ],
                        },
                    ],
                },
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|           1                                    |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
    })
        .addSceneToMeta("overworld", {
        id: "3",
        leftScrene: "cyrstal-alter",
        bottomScrene: false,
        topScrene: "4",
        rightScrene: false,
        animations: {},
        screenStateAnimationKeys: {},
        screenStates: {},
        rawText: {
            "1": {
                collisionMap: "1",
                styleMap: "1",
                map: `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒                                                ▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`,
            },
        },
        styleMap: {
            "1": {
                fg: "Black",
                bright: true,
            },
        },
        collisionMaps: {},
        collisionMapsRaw: {
            "1": `**************************************************
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
**************************************************`,
        },
        activeAnimationScreenState: "",
        activeEntityMap: "1",
        entityMap: {
            "1": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
            },
            "2": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
                data: { fgColor: "Green" },
            },
            "3": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
                data: { fgColor: "Magenta" },
            },
            "4": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
                data: { fgColor: "Yellow" },
            },
            "5": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
                data: { fgColor: "Red" },
            },
            "6": {
                entityName: "EnergyFlyEntity",
                type: "Normal",
                data: { fgColor: "Blue" },
            },
        },
        entityMapRaw: {
            "1": `**************************************************
|                                           6    |
|          2                                     |
|                            2         5         |
|             1                                  |
|   6                                6           |
|                      6                         |
|         1                      1               |
|                         3                      |
|                                                |
|      5            3               4     5      |
|                                                |
|             1             1                    |
|                                      1         |
|       3                      6                 |
|            6          4                        |
|                                    2           |
|               1                                |
**************************************************`,
        },
    });
}
exports.OverWorld = OverWorld;
