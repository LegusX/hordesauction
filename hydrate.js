test = {
    "id": 102733910,
    "slot": 5,
    "bound": 0,
    "type": "bow",
    "upgrade": 0,
    "tier": 7,
    "rolls": [84, 58, 31, 60, 83, 60, 95, 84, 22, 18, 38, 54, 88, 35, 28, 25, 42, 42, 56, 53, 28],
    "stacks": null
}

hydrate = function (t) {
    if (this.dirty = !1, this.bound = t.bound, this.type = t.type, this.tier = t.tier, this.logic = new Map(Object.entries(Ry[this.type + this.tier])), this.auction = t.auction ? new Date(t.auction) : void 0, this.auctionprice = t.auctionprice, this.owner = t.name, this.stash = t.stash ? new Date(t.stash) : void 0, void 0 === this.logic) throw "Unknown item " + t.type + t.tier;
    this.stats = new Map()
    if (this.upgrade = t.upgrade, this.stats.clear(), t.rolls) {
        if (setRolls(t.rolls), this.quality = nextRoll(), this.logic.stats) {
            this.logic.stats.forEach((t, e) => {
                this.stats.set(e, {
                    type: "base",
                    qual: this.quality,
                    value: Math.floor(t.min + (t.max - t.min) * (this.quality / 100) ** 2 + No[e] * this.upgrade)
                })
            });
            const t = Math.round((this.quality / 100) ** 1.5 * 3.6);
            for (let e = 0; e < t; ++e) {
                let t = nextRoll(),
                    e = -1;
                for (; - 1 === e || this.stats.has(e);) e = parseInt(Uo(wM, t / 101)), t = (t + 5) % 100;
                const s = (nextRoll() + this.quality) / 2;
                this.stats.set(e, {
                    type: "bonus",
                    qual: s,
                    value: Math.ceil(Math.max((Lo[e].min + (Lo[e].max - Lo[e].min) * (s / 100) ** 2) * this.logic.level * Zo[this.type].weight, No[e]) + No[e] * this.upgrade)
                })
            }
        }
        this.quality = this.logic.quality || this.quality, this.stacks = void 0
    } else this.stacks = t.stacks, this.quality = this.logic.quality || 0;
    this.gs = 0, this.logic.gs ? this.gs = this.logic.gs : this.stats.forEach((t, e) => {
        if (17 === e) return;
        let s = t.value / No[e];
        "shield" == this.type && "base" == t.type && (s *= .5), "orb" == this.type && "base" == t.type && (s *= .7), this.gs += s
    }), this.gs = Math.round(this.gs)

    console.log(this)
}

function setRolls(t) {
    this.rolls = t, this.currentRoll = 0
}

function nextRoll() {
    if (this.currentRoll == this.rolls.length) throw "roll maximum reached";
    return this.rolls[this.currentRoll++]
}

exports = hydrate

Ry = {
    "hammer0": {
      "level": 0,
      "type": "hammer",
      "tier": 0,
      "stats": {},
      "class": 3,
      "logicId": 0
    },
    "hammer1": {
      "level": 5,
      "type": "hammer",
      "tier": 1,
      "stats": {},
      "class": 3,
      "logicId": 1
    },
    "hammer2": {
      "level": 11,
      "type": "hammer",
      "tier": 2,
      "stats": {},
      "class": 3,
      "logicId": 2
    },
    "hammer3": {
      "level": 17,
      "type": "hammer",
      "tier": 3,
      "stats": {},
      "class": 3,
      "logicId": 3
    },
    "hammer4": {
      "level": 23,
      "type": "hammer",
      "tier": 4,
      "stats": {},
      "class": 3,
      "logicId": 4
    },
    "hammer5": {
      "level": 29,
      "type": "hammer",
      "tier": 5,
      "stats": {},
      "class": 3,
      "logicId": 5
    },
    "hammer6": {
      "level": 35,
      "type": "hammer",
      "tier": 6,
      "stats": {},
      "class": 3,
      "logicId": 6
    },
    "hammer7": {
      "level": 41,
      "type": "hammer",
      "tier": 7,
      "stats": {},
      "class": 3,
      "logicId": 7
    },
    "hammer8": {
      "level": 47,
      "type": "hammer",
      "tier": 8,
      "stats": {},
      "class": 3,
      "logicId": 8
    },
    "hammer9": {
      "level": 52,
      "type": "hammer",
      "tier": 9,
      "stats": {},
      "class": 3,
      "logicId": 9
    },
    "hammer10": {
      "level": 58,
      "type": "hammer",
      "tier": 10,
      "stats": {},
      "class": 3,
      "logicId": 10
    },
    "hammer11": {
      "level": 64,
      "type": "hammer",
      "tier": 11,
      "stats": {},
      "class": 3,
      "logicId": 11
    },
    "hammer12": {
      "level": 70,
      "type": "hammer",
      "tier": 12,
      "stats": {},
      "class": 3,
      "logicId": 12
    },
    "hammer13": {
      "level": 76,
      "type": "hammer",
      "tier": 13,
      "stats": {},
      "class": 3,
      "logicId": 13
    },
    "hammer14": {
      "level": 82,
      "type": "hammer",
      "tier": 14,
      "stats": {},
      "class": 3,
      "logicId": 14
    },
    "hammer15": {
      "level": 88,
      "type": "hammer",
      "tier": 15,
      "stats": {},
      "class": 3,
      "logicId": 15
    },
    "hammer16": {
      "level": 94,
      "type": "hammer",
      "tier": 16,
      "stats": {},
      "class": 3,
      "logicId": 16
    },
    "bow0": {
      "level": 0,
      "type": "bow",
      "tier": 0,
      "stats": {},
      "class": 2,
      "logicId": 17
    },
    "bow1": {
      "level": 5,
      "type": "bow",
      "tier": 1,
      "stats": {},
      "class": 2,
      "logicId": 18
    },
    "bow2": {
      "level": 11,
      "type": "bow",
      "tier": 2,
      "stats": {},
      "class": 2,
      "logicId": 19
    },
    "bow3": {
      "level": 17,
      "type": "bow",
      "tier": 3,
      "stats": {},
      "class": 2,
      "logicId": 20
    },
    "bow4": {
      "level": 23,
      "type": "bow",
      "tier": 4,
      "stats": {},
      "class": 2,
      "logicId": 21
    },
    "bow5": {
      "level": 29,
      "type": "bow",
      "tier": 5,
      "stats": {},
      "class": 2,
      "logicId": 22
    },
    "bow6": {
      "level": 35,
      "type": "bow",
      "tier": 6,
      "stats": {},
      "class": 2,
      "logicId": 23
    },
    "bow7": {
      "level": 41,
      "type": "bow",
      "tier": 7,
      "stats": {},
      "class": 2,
      "logicId": 24
    },
    "bow8": {
      "level": 47,
      "type": "bow",
      "tier": 8,
      "stats": {},
      "class": 2,
      "logicId": 25
    },
    "bow9": {
      "level": 52,
      "type": "bow",
      "tier": 9,
      "stats": {},
      "class": 2,
      "logicId": 26
    },
    "bow10": {
      "level": 58,
      "type": "bow",
      "tier": 10,
      "stats": {},
      "class": 2,
      "logicId": 27
    },
    "bow11": {
      "level": 64,
      "type": "bow",
      "tier": 11,
      "stats": {},
      "class": 2,
      "logicId": 28
    },
    "bow12": {
      "level": 70,
      "type": "bow",
      "tier": 12,
      "stats": {},
      "class": 2,
      "logicId": 29
    },
    "bow13": {
      "level": 76,
      "type": "bow",
      "tier": 13,
      "stats": {},
      "class": 2,
      "logicId": 30
    },
    "bow14": {
      "level": 82,
      "type": "bow",
      "tier": 14,
      "stats": {},
      "class": 2,
      "logicId": 31
    },
    "bow15": {
      "level": 88,
      "type": "bow",
      "tier": 15,
      "stats": {},
      "class": 2,
      "logicId": 32
    },
    "bow16": {
      "level": 94,
      "type": "bow",
      "tier": 16,
      "stats": {},
      "class": 2,
      "logicId": 33
    },
    "staff0": {
      "level": 0,
      "type": "staff",
      "tier": 0,
      "stats": {},
      "class": 1,
      "logicId": 34
    },
    "staff1": {
      "level": 5,
      "type": "staff",
      "tier": 1,
      "stats": {},
      "class": 1,
      "logicId": 35
    },
    "staff2": {
      "level": 11,
      "type": "staff",
      "tier": 2,
      "stats": {},
      "class": 1,
      "logicId": 36
    },
    "staff3": {
      "level": 17,
      "type": "staff",
      "tier": 3,
      "stats": {},
      "class": 1,
      "logicId": 37
    },
    "staff4": {
      "level": 23,
      "type": "staff",
      "tier": 4,
      "stats": {},
      "class": 1,
      "logicId": 38
    },
    "staff5": {
      "level": 29,
      "type": "staff",
      "tier": 5,
      "stats": {},
      "class": 1,
      "logicId": 39
    },
    "staff6": {
      "level": 35,
      "type": "staff",
      "tier": 6,
      "stats": {},
      "class": 1,
      "logicId": 40
    },
    "staff7": {
      "level": 41,
      "type": "staff",
      "tier": 7,
      "stats": {},
      "class": 1,
      "logicId": 41
    },
    "staff8": {
      "level": 47,
      "type": "staff",
      "tier": 8,
      "stats": {},
      "class": 1,
      "logicId": 42
    },
    "staff9": {
      "level": 52,
      "type": "staff",
      "tier": 9,
      "stats": {},
      "class": 1,
      "logicId": 43
    },
    "staff10": {
      "level": 58,
      "type": "staff",
      "tier": 10,
      "stats": {},
      "class": 1,
      "logicId": 44
    },
    "staff11": {
      "level": 64,
      "type": "staff",
      "tier": 11,
      "stats": {},
      "class": 1,
      "logicId": 45
    },
    "staff12": {
      "level": 70,
      "type": "staff",
      "tier": 12,
      "stats": {},
      "class": 1,
      "logicId": 46
    },
    "staff13": {
      "level": 76,
      "type": "staff",
      "tier": 13,
      "stats": {},
      "class": 1,
      "logicId": 47
    },
    "staff14": {
      "level": 82,
      "type": "staff",
      "tier": 14,
      "stats": {},
      "class": 1,
      "logicId": 48
    },
    "staff15": {
      "level": 88,
      "type": "staff",
      "tier": 15,
      "stats": {},
      "class": 1,
      "logicId": 49
    },
    "staff16": {
      "level": 94,
      "type": "staff",
      "tier": 16,
      "stats": {},
      "class": 1,
      "logicId": 50
    },
    "sword0": {
      "level": 0,
      "type": "sword",
      "tier": 0,
      "stats": {},
      "class": 0,
      "logicId": 51
    },
    "sword1": {
      "level": 5,
      "type": "sword",
      "tier": 1,
      "stats": {},
      "class": 0,
      "logicId": 52
    },
    "sword2": {
      "level": 11,
      "type": "sword",
      "tier": 2,
      "stats": {},
      "class": 0,
      "logicId": 53
    },
    "sword3": {
      "level": 17,
      "type": "sword",
      "tier": 3,
      "stats": {},
      "class": 0,
      "logicId": 54
    },
    "sword4": {
      "level": 23,
      "type": "sword",
      "tier": 4,
      "stats": {},
      "class": 0,
      "logicId": 55
    },
    "sword5": {
      "level": 29,
      "type": "sword",
      "tier": 5,
      "stats": {},
      "class": 0,
      "logicId": 56
    },
    "sword6": {
      "level": 35,
      "type": "sword",
      "tier": 6,
      "stats": {},
      "class": 0,
      "logicId": 57
    },
    "sword7": {
      "level": 41,
      "type": "sword",
      "tier": 7,
      "stats": {},
      "class": 0,
      "logicId": 58
    },
    "sword8": {
      "level": 47,
      "type": "sword",
      "tier": 8,
      "stats": {},
      "class": 0,
      "logicId": 59
    },
    "sword9": {
      "level": 52,
      "type": "sword",
      "tier": 9,
      "stats": {},
      "class": 0,
      "logicId": 60
    },
    "sword10": {
      "level": 58,
      "type": "sword",
      "tier": 10,
      "stats": {},
      "class": 0,
      "logicId": 61
    },
    "sword11": {
      "level": 64,
      "type": "sword",
      "tier": 11,
      "stats": {},
      "class": 0,
      "logicId": 62
    },
    "sword12": {
      "level": 70,
      "type": "sword",
      "tier": 12,
      "stats": {},
      "class": 0,
      "logicId": 63
    },
    "sword13": {
      "level": 76,
      "type": "sword",
      "tier": 13,
      "stats": {},
      "class": 0,
      "logicId": 64
    },
    "sword14": {
      "level": 82,
      "type": "sword",
      "tier": 14,
      "stats": {},
      "class": 0,
      "logicId": 65
    },
    "sword15": {
      "level": 88,
      "type": "sword",
      "tier": 15,
      "stats": {},
      "class": 0,
      "logicId": 66
    },
    "sword16": {
      "level": 94,
      "type": "sword",
      "tier": 16,
      "stats": {},
      "class": 0,
      "logicId": 67
    },
    "armlet0": {
      "level": 1,
      "type": "armlet",
      "tier": 0,
      "stats": {},
      "logicId": 68
    },
    "armlet1": {
      "level": 8,
      "type": "armlet",
      "tier": 1,
      "stats": {},
      "logicId": 69
    },
    "armlet2": {
      "level": 16,
      "type": "armlet",
      "tier": 2,
      "stats": {},
      "logicId": 70
    },
    "armlet3": {
      "level": 24,
      "type": "armlet",
      "tier": 3,
      "stats": {},
      "logicId": 71
    },
    "armlet4": {
      "level": 31,
      "type": "armlet",
      "tier": 4,
      "stats": {},
      "logicId": 72
    },
    "armlet5": {
      "level": 39,
      "type": "armlet",
      "tier": 5,
      "stats": {},
      "logicId": 73
    },
    "armlet6": {
      "level": 47,
      "type": "armlet",
      "tier": 6,
      "stats": {},
      "logicId": 74
    },
    "armlet7": {
      "level": 54,
      "type": "armlet",
      "tier": 7,
      "stats": {},
      "logicId": 75
    },
    "armlet8": {
      "level": 62,
      "type": "armlet",
      "tier": 8,
      "stats": {},
      "logicId": 76
    },
    "armlet9": {
      "level": 70,
      "type": "armlet",
      "tier": 9,
      "stats": {},
      "logicId": 77
    },
    "armlet10": {
      "level": 77,
      "type": "armlet",
      "tier": 10,
      "stats": {},
      "logicId": 78
    },
    "armlet11": {
      "level": 85,
      "type": "armlet",
      "tier": 11,
      "stats": {},
      "logicId": 79
    },
    "armlet12": {
      "level": 93,
      "type": "armlet",
      "tier": 12,
      "stats": {},
      "logicId": 80
    },
    "armor0": {
      "level": 2,
      "type": "armor",
      "tier": 0,
      "stats": {},
      "logicId": 81
    },
    "armor1": {
      "level": 11,
      "type": "armor",
      "tier": 1,
      "stats": {},
      "logicId": 82
    },
    "armor2": {
      "level": 20,
      "type": "armor",
      "tier": 2,
      "stats": {},
      "logicId": 83
    },
    "armor3": {
      "level": 29,
      "type": "armor",
      "tier": 3,
      "stats": {},
      "logicId": 84
    },
    "armor4": {
      "level": 38,
      "type": "armor",
      "tier": 4,
      "stats": {},
      "logicId": 85
    },
    "armor5": {
      "level": 47,
      "type": "armor",
      "tier": 5,
      "stats": {},
      "logicId": 86
    },
    "armor6": {
      "level": 56,
      "type": "armor",
      "tier": 6,
      "stats": {},
      "logicId": 87
    },
    "armor7": {
      "level": 65,
      "type": "armor",
      "tier": 7,
      "stats": {},
      "logicId": 88
    },
    "armor8": {
      "level": 74,
      "type": "armor",
      "tier": 8,
      "stats": {},
      "logicId": 89
    },
    "armor9": {
      "level": 83,
      "type": "armor",
      "tier": 9,
      "stats": {},
      "logicId": 90
    },
    "armor10": {
      "level": 92,
      "type": "armor",
      "tier": 10,
      "stats": {},
      "logicId": 91
    },
    "bag0": {
      "level": 5,
      "type": "bag",
      "tier": 0,
      "stats": {},
      "logicId": 92
    },
    "bag1": {
      "level": 25,
      "type": "bag",
      "tier": 1,
      "stats": {},
      "logicId": 93
    },
    "bag2": {
      "level": 45,
      "type": "bag",
      "tier": 2,
      "stats": {},
      "logicId": 94
    },
    "bag3": {
      "level": 65,
      "type": "bag",
      "tier": 3,
      "stats": {},
      "logicId": 95
    },
    "bag4": {
      "level": 85,
      "type": "bag",
      "tier": 4,
      "stats": {},
      "logicId": 96
    },
    "boot0": {
      "level": 2,
      "type": "boot",
      "tier": 0,
      "stats": {},
      "logicId": 97
    },
    "boot1": {
      "level": 9,
      "type": "boot",
      "tier": 1,
      "stats": {},
      "logicId": 98
    },
    "boot2": {
      "level": 17,
      "type": "boot",
      "tier": 2,
      "stats": {},
      "logicId": 99
    },
    "boot3": {
      "level": 25,
      "type": "boot",
      "tier": 3,
      "stats": {},
      "logicId": 100
    },
    "boot4": {
      "level": 32,
      "type": "boot",
      "tier": 4,
      "stats": {},
      "logicId": 101
    },
    "boot5": {
      "level": 40,
      "type": "boot",
      "tier": 5,
      "stats": {},
      "logicId": 102
    },
    "boot6": {
      "level": 48,
      "type": "boot",
      "tier": 6,
      "stats": {},
      "logicId": 103
    },
    "boot7": {
      "level": 55,
      "type": "boot",
      "tier": 7,
      "stats": {},
      "logicId": 104
    },
    "boot8": {
      "level": 63,
      "type": "boot",
      "tier": 8,
      "stats": {},
      "logicId": 105
    },
    "boot9": {
      "level": 71,
      "type": "boot",
      "tier": 9,
      "stats": {},
      "logicId": 106
    },
    "boot10": {
      "level": 78,
      "type": "boot",
      "tier": 10,
      "stats": {},
      "logicId": 107
    },
    "boot11": {
      "level": 86,
      "type": "boot",
      "tier": 11,
      "stats": {},
      "logicId": 108
    },
    "boot12": {
      "level": 94,
      "type": "boot",
      "tier": 12,
      "stats": {},
      "logicId": 109
    },
    "glove0": {
      "level": 2,
      "type": "glove",
      "tier": 0,
      "stats": {},
      "logicId": 110
    },
    "glove1": {
      "level": 9,
      "type": "glove",
      "tier": 1,
      "stats": {},
      "logicId": 111
    },
    "glove2": {
      "level": 17,
      "type": "glove",
      "tier": 2,
      "stats": {},
      "logicId": 112
    },
    "glove3": {
      "level": 25,
      "type": "glove",
      "tier": 3,
      "stats": {},
      "logicId": 113
    },
    "glove4": {
      "level": 32,
      "type": "glove",
      "tier": 4,
      "stats": {},
      "logicId": 114
    },
    "glove5": {
      "level": 40,
      "type": "glove",
      "tier": 5,
      "stats": {},
      "logicId": 115
    },
    "glove6": {
      "level": 48,
      "type": "glove",
      "tier": 6,
      "stats": {},
      "logicId": 116
    },
    "glove7": {
      "level": 55,
      "type": "glove",
      "tier": 7,
      "stats": {},
      "logicId": 117
    },
    "glove8": {
      "level": 63,
      "type": "glove",
      "tier": 8,
      "stats": {},
      "logicId": 118
    },
    "glove9": {
      "level": 71,
      "type": "glove",
      "tier": 9,
      "stats": {},
      "logicId": 119
    },
    "glove10": {
      "level": 78,
      "type": "glove",
      "tier": 10,
      "stats": {},
      "logicId": 120
    },
    "glove11": {
      "level": 86,
      "type": "glove",
      "tier": 11,
      "stats": {},
      "logicId": 121
    },
    "glove12": {
      "level": 94,
      "type": "glove",
      "tier": 12,
      "stats": {},
      "logicId": 122
    },
    "ring0": {
      "level": 5,
      "type": "ring",
      "tier": 0,
      "stats": {},
      "logicId": 123
    },
    "ring1": {
      "level": 13,
      "type": "ring",
      "tier": 1,
      "stats": {},
      "logicId": 124
    },
    "ring2": {
      "level": 21,
      "type": "ring",
      "tier": 2,
      "stats": {},
      "logicId": 125
    },
    "ring3": {
      "level": 30,
      "type": "ring",
      "tier": 3,
      "stats": {},
      "logicId": 126
    },
    "ring4": {
      "level": 38,
      "type": "ring",
      "tier": 4,
      "stats": {},
      "logicId": 127
    },
    "ring5": {
      "level": 46,
      "type": "ring",
      "tier": 5,
      "stats": {},
      "logicId": 128
    },
    "ring6": {
      "level": 55,
      "type": "ring",
      "tier": 6,
      "stats": {},
      "logicId": 129
    },
    "ring7": {
      "level": 63,
      "type": "ring",
      "tier": 7,
      "stats": {},
      "logicId": 130
    },
    "ring8": {
      "level": 71,
      "type": "ring",
      "tier": 8,
      "stats": {},
      "logicId": 131
    },
    "ring9": {
      "level": 80,
      "type": "ring",
      "tier": 9,
      "stats": {},
      "logicId": 132
    },
    "ring10": {
      "level": 88,
      "type": "ring",
      "tier": 10,
      "stats": {},
      "logicId": 133
    },
    "ring11": {
      "level": 96,
      "type": "ring",
      "tier": 11,
      "stats": {},
      "logicId": 134
    },
    "amulet0": {
      "level": 7,
      "type": "amulet",
      "tier": 0,
      "stats": {},
      "logicId": 135
    },
    "amulet1": {
      "level": 15,
      "type": "amulet",
      "tier": 1,
      "stats": {},
      "logicId": 136
    },
    "amulet2": {
      "level": 23,
      "type": "amulet",
      "tier": 2,
      "stats": {},
      "logicId": 137
    },
    "amulet3": {
      "level": 32,
      "type": "amulet",
      "tier": 3,
      "stats": {},
      "logicId": 138
    },
    "amulet4": {
      "level": 40,
      "type": "amulet",
      "tier": 4,
      "stats": {},
      "logicId": 139
    },
    "amulet5": {
      "level": 48,
      "type": "amulet",
      "tier": 5,
      "stats": {},
      "logicId": 140
    },
    "amulet6": {
      "level": 57,
      "type": "amulet",
      "tier": 6,
      "stats": {},
      "logicId": 141
    },
    "amulet7": {
      "level": 65,
      "type": "amulet",
      "tier": 7,
      "stats": {},
      "logicId": 142
    },
    "amulet8": {
      "level": 73,
      "type": "amulet",
      "tier": 8,
      "stats": {},
      "logicId": 143
    },
    "amulet9": {
      "level": 82,
      "type": "amulet",
      "tier": 9,
      "stats": {},
      "logicId": 144
    },
    "amulet10": {
      "level": 90,
      "type": "amulet",
      "tier": 10,
      "stats": {},
      "logicId": 145
    },
    "amulet11": {
      "level": 98,
      "type": "amulet",
      "tier": 11,
      "stats": {},
      "logicId": 146
    },
    "quiver0": {
      "level": 2,
      "type": "quiver",
      "tier": 0,
      "stats": {},
      "class": 2,
      "logicId": 147
    },
    "quiver1": {
      "level": 12,
      "type": "quiver",
      "tier": 1,
      "stats": {},
      "class": 2,
      "logicId": 148
    },
    "quiver2": {
      "level": 22,
      "type": "quiver",
      "tier": 2,
      "stats": {},
      "class": 2,
      "logicId": 149
    },
    "quiver3": {
      "level": 32,
      "type": "quiver",
      "tier": 3,
      "stats": {},
      "class": 2,
      "logicId": 150
    },
    "quiver4": {
      "level": 42,
      "type": "quiver",
      "tier": 4,
      "stats": {},
      "class": 2,
      "logicId": 151
    },
    "quiver5": {
      "level": 52,
      "type": "quiver",
      "tier": 5,
      "stats": {},
      "class": 2,
      "logicId": 152
    },
    "quiver6": {
      "level": 62,
      "type": "quiver",
      "tier": 6,
      "stats": {},
      "class": 2,
      "logicId": 153
    },
    "quiver7": {
      "level": 72,
      "type": "quiver",
      "tier": 7,
      "stats": {},
      "class": 2,
      "logicId": 154
    },
    "quiver8": {
      "level": 82,
      "type": "quiver",
      "tier": 8,
      "stats": {},
      "class": 2,
      "logicId": 155
    },
    "quiver9": {
      "level": 92,
      "type": "quiver",
      "tier": 9,
      "stats": {},
      "class": 2,
      "logicId": 156
    },
    "shield0": {
      "level": 2,
      "type": "shield",
      "tier": 0,
      "stats": {},
      "class": 0,
      "logicId": 157
    },
    "shield1": {
      "level": 12,
      "type": "shield",
      "tier": 1,
      "stats": {},
      "class": 0,
      "logicId": 158
    },
    "shield2": {
      "level": 22,
      "type": "shield",
      "tier": 2,
      "stats": {},
      "class": 0,
      "logicId": 159
    },
    "shield3": {
      "level": 32,
      "type": "shield",
      "tier": 3,
      "stats": {},
      "class": 0,
      "logicId": 160
    },
    "shield4": {
      "level": 42,
      "type": "shield",
      "tier": 4,
      "stats": {},
      "class": 0,
      "logicId": 161
    },
    "shield5": {
      "level": 52,
      "type": "shield",
      "tier": 5,
      "stats": {},
      "class": 0,
      "logicId": 162
    },
    "shield6": {
      "level": 62,
      "type": "shield",
      "tier": 6,
      "stats": {},
      "class": 0,
      "logicId": 163
    },
    "shield7": {
      "level": 72,
      "type": "shield",
      "tier": 7,
      "stats": {},
      "class": 0,
      "logicId": 164
    },
    "shield8": {
      "level": 82,
      "type": "shield",
      "tier": 8,
      "stats": {},
      "class": 0,
      "logicId": 165
    },
    "shield9": {
      "level": 92,
      "type": "shield",
      "tier": 9,
      "stats": {},
      "class": 0,
      "logicId": 166
    },
    "totem0": {
      "level": 2,
      "type": "totem",
      "tier": 0,
      "stats": {},
      "class": 3,
      "logicId": 167
    },
    "totem1": {
      "level": 12,
      "type": "totem",
      "tier": 1,
      "stats": {},
      "class": 3,
      "logicId": 168
    },
    "totem2": {
      "level": 22,
      "type": "totem",
      "tier": 2,
      "stats": {},
      "class": 3,
      "logicId": 169
    },
    "totem3": {
      "level": 32,
      "type": "totem",
      "tier": 3,
      "stats": {},
      "class": 3,
      "logicId": 170
    },
    "totem4": {
      "level": 42,
      "type": "totem",
      "tier": 4,
      "stats": {},
      "class": 3,
      "logicId": 171
    },
    "totem5": {
      "level": 52,
      "type": "totem",
      "tier": 5,
      "stats": {},
      "class": 3,
      "logicId": 172
    },
    "totem6": {
      "level": 62,
      "type": "totem",
      "tier": 6,
      "stats": {},
      "class": 3,
      "logicId": 173
    },
    "totem7": {
      "level": 72,
      "type": "totem",
      "tier": 7,
      "stats": {},
      "class": 3,
      "logicId": 174
    },
    "totem8": {
      "level": 82,
      "type": "totem",
      "tier": 8,
      "stats": {},
      "class": 3,
      "logicId": 175
    },
    "totem9": {
      "level": 92,
      "type": "totem",
      "tier": 9,
      "stats": {},
      "class": 3,
      "logicId": 176
    },
    "orb0": {
      "level": 2,
      "type": "orb",
      "tier": 0,
      "stats": {},
      "class": 1,
      "logicId": 177
    },
    "orb1": {
      "level": 12,
      "type": "orb",
      "tier": 1,
      "stats": {},
      "class": 1,
      "logicId": 178
    },
    "orb2": {
      "level": 22,
      "type": "orb",
      "tier": 2,
      "stats": {},
      "class": 1,
      "logicId": 179
    },
    "orb3": {
      "level": 32,
      "type": "orb",
      "tier": 3,
      "stats": {},
      "class": 1,
      "logicId": 180
    },
    "orb4": {
      "level": 42,
      "type": "orb",
      "tier": 4,
      "stats": {},
      "class": 1,
      "logicId": 181
    },
    "orb5": {
      "level": 52,
      "type": "orb",
      "tier": 5,
      "stats": {},
      "class": 1,
      "logicId": 182
    },
    "orb6": {
      "level": 62,
      "type": "orb",
      "tier": 6,
      "stats": {},
      "class": 1,
      "logicId": 183
    },
    "orb7": {
      "level": 72,
      "type": "orb",
      "tier": 7,
      "stats": {},
      "class": 1,
      "logicId": 184
    },
    "orb8": {
      "level": 82,
      "type": "orb",
      "tier": 8,
      "stats": {},
      "class": 1,
      "logicId": 185
    },
    "orb9": {
      "level": 92,
      "type": "orb",
      "tier": 9,
      "stats": {},
      "class": 1,
      "logicId": 186
    },
    "rune0": {
      "level": 1,
      "type": "rune",
      "tier": 0,
      "quality": 70,
      "logicId": 187
    },
    "rune1": {
      "level": 10,
      "type": "rune",
      "tier": 1,
      "quality": 70,
      "logicId": 188
    },
    "rune2": {
      "level": 19,
      "type": "rune",
      "tier": 2,
      "quality": 70,
      "logicId": 189
    },
    "rune3": {
      "level": 28,
      "type": "rune",
      "tier": 3,
      "quality": 70,
      "logicId": 190
    },
    "rune4": {
      "level": 37,
      "type": "rune",
      "tier": 4,
      "quality": 70,
      "logicId": 191
    },
    "rune5": {
      "level": 46,
      "type": "rune",
      "tier": 5,
      "quality": 70,
      "logicId": 192
    },
    "rune6": {
      "level": 55,
      "type": "rune",
      "tier": 6,
      "quality": 70,
      "logicId": 193
    },
    "rune7": {
      "level": 64,
      "type": "rune",
      "tier": 7,
      "quality": 70,
      "logicId": 194
    },
    "rune8": {
      "level": 73,
      "type": "rune",
      "tier": 8,
      "quality": 70,
      "logicId": 195
    },
    "rune9": {
      "level": 82,
      "type": "rune",
      "tier": 9,
      "quality": 70,
      "logicId": 196
    },
    "rune10": {
      "level": 91,
      "type": "rune",
      "tier": 10,
      "quality": 70,
      "logicId": 197
    },
    "misc0": {
      "type": "misc",
      "tier": 0,
      "level": 1,
      "goldvalue": 1,
      "quality": 15,
      "custom": [
        "150 HP recovered"
      ],
      "useSkill": 100,
      "logicId": 198
    },
    "misc1": {
      "type": "misc",
      "tier": 1,
      "level": 1,
      "goldvalue": 1,
      "quality": 15,
      "custom": [
        "100 MP recovered"
      ],
      "useSkill": 100,
      "logicId": 199
    },
    "misc2": {
      "type": "misc",
      "tier": 2,
      "level": 21,
      "goldvalue": 5,
      "quality": 15,
      "custom": [
        "300 HP recovered"
      ],
      "useSkill": 100,
      "logicId": 200
    },
    "misc3": {
      "type": "misc",
      "tier": 3,
      "level": 21,
      "goldvalue": 5,
      "quality": 15,
      "custom": [
        "200 MP recovered"
      ],
      "useSkill": 100,
      "logicId": 201
    },
    "misc4": {
      "type": "misc",
      "tier": 4,
      "level": 41,
      "goldvalue": 25,
      "quality": 15,
      "custom": [
        "600 HP recovered"
      ],
      "useSkill": 100,
      "logicId": 202
    },
    "misc5": {
      "type": "misc",
      "tier": 5,
      "level": 41,
      "goldvalue": 25,
      "quality": 15,
      "custom": [
        "300 MP recovered"
      ],
      "useSkill": 100,
      "logicId": 203
    },
    "book205": {
      "type": "book",
      "tier": 205,
      "level": 25,
      "skillid": 41,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 204
    },
    "book170": {
      "type": "book",
      "tier": 170,
      "level": 6,
      "skillid": 34,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 205
    },
    "book171": {
      "type": "book",
      "tier": 171,
      "level": 14,
      "skillid": 34,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 206
    },
    "book172": {
      "type": "book",
      "tier": 172,
      "level": 22,
      "skillid": 34,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 207
    },
    "book173": {
      "type": "book",
      "tier": 173,
      "level": 30,
      "skillid": 34,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 208
    },
    "book174": {
      "type": "book",
      "tier": 174,
      "level": 38,
      "skillid": 34,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 209
    },
    "book165": {
      "type": "book",
      "tier": 165,
      "level": 11,
      "skillid": 33,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 210
    },
    "book95": {
      "type": "book",
      "tier": 95,
      "level": 18,
      "skillid": 19,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 211
    },
    "book96": {
      "type": "book",
      "tier": 96,
      "level": 26,
      "skillid": 19,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 212
    },
    "book97": {
      "type": "book",
      "tier": 97,
      "level": 34,
      "skillid": 19,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 213
    },
    "book98": {
      "type": "book",
      "tier": 98,
      "level": 42,
      "skillid": 19,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 214
    },
    "book99": {
      "type": "book",
      "tier": 99,
      "level": 50,
      "skillid": 19,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 215
    },
    "book100": {
      "type": "book",
      "tier": 100,
      "level": 15,
      "skillid": 20,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 216
    },
    "book101": {
      "type": "book",
      "tier": 101,
      "level": 23,
      "skillid": 20,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 217
    },
    "book102": {
      "type": "book",
      "tier": 102,
      "level": 31,
      "skillid": 20,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 218
    },
    "book103": {
      "type": "book",
      "tier": 103,
      "level": 39,
      "skillid": 20,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 219
    },
    "book104": {
      "type": "book",
      "tier": 104,
      "level": 47,
      "skillid": 20,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 220
    },
    "book105": {
      "type": "book",
      "tier": 105,
      "level": 1,
      "skillid": 21,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 221
    },
    "book106": {
      "type": "book",
      "tier": 106,
      "level": 9,
      "skillid": 21,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 222
    },
    "book107": {
      "type": "book",
      "tier": 107,
      "level": 17,
      "skillid": 21,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 223
    },
    "book108": {
      "type": "book",
      "tier": 108,
      "level": 25,
      "skillid": 21,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 224
    },
    "book109": {
      "type": "book",
      "tier": 109,
      "level": 33,
      "skillid": 21,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 225
    },
    "book85": {
      "type": "book",
      "tier": 85,
      "level": 21,
      "skillid": 17,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 226
    },
    "book86": {
      "type": "book",
      "tier": 86,
      "level": 29,
      "skillid": 17,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 227
    },
    "book87": {
      "type": "book",
      "tier": 87,
      "level": 37,
      "skillid": 17,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 228
    },
    "book88": {
      "type": "book",
      "tier": 88,
      "level": 45,
      "skillid": 17,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 229
    },
    "book89": {
      "type": "book",
      "tier": 89,
      "level": 53,
      "skillid": 17,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 230
    },
    "book5": {
      "type": "book",
      "tier": 5,
      "level": 1,
      "skillid": 1,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 231
    },
    "book6": {
      "type": "book",
      "tier": 6,
      "level": 9,
      "skillid": 1,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 232
    },
    "book7": {
      "type": "book",
      "tier": 7,
      "level": 17,
      "skillid": 1,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 233
    },
    "book8": {
      "type": "book",
      "tier": 8,
      "level": 25,
      "skillid": 1,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 234
    },
    "book9": {
      "type": "book",
      "tier": 9,
      "level": 33,
      "skillid": 1,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 235
    },
    "book10": {
      "type": "book",
      "tier": 10,
      "level": 5,
      "skillid": 2,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 236
    },
    "book11": {
      "type": "book",
      "tier": 11,
      "level": 13,
      "skillid": 2,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 237
    },
    "book12": {
      "type": "book",
      "tier": 12,
      "level": 21,
      "skillid": 2,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 238
    },
    "book13": {
      "type": "book",
      "tier": 13,
      "level": 29,
      "skillid": 2,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 239
    },
    "book14": {
      "type": "book",
      "tier": 14,
      "level": 37,
      "skillid": 2,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 240
    },
    "book15": {
      "type": "book",
      "tier": 15,
      "level": 3,
      "skillid": 3,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 241
    },
    "book16": {
      "type": "book",
      "tier": 16,
      "level": 11,
      "skillid": 3,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 242
    },
    "book17": {
      "type": "book",
      "tier": 17,
      "level": 19,
      "skillid": 3,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 243
    },
    "book18": {
      "type": "book",
      "tier": 18,
      "level": 27,
      "skillid": 3,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 244
    },
    "book19": {
      "type": "book",
      "tier": 19,
      "level": 35,
      "skillid": 3,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 245
    },
    "book90": {
      "type": "book",
      "tier": 90,
      "level": 8,
      "skillid": 18,
      "skilllevel": 0,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book00",
      "useSkill": 101,
      "logicId": 246
    },
    "book91": {
      "type": "book",
      "tier": 91,
      "level": 16,
      "skillid": 18,
      "skilllevel": 1,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book00",
      "useSkill": 101,
      "logicId": 247
    },
    "book92": {
      "type": "book",
      "tier": 92,
      "level": 24,
      "skillid": 18,
      "skilllevel": 2,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book01",
      "useSkill": 101,
      "logicId": 248
    },
    "book93": {
      "type": "book",
      "tier": 93,
      "level": 32,
      "skillid": 18,
      "skilllevel": 3,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book01",
      "useSkill": 101,
      "logicId": 249
    },
    "book94": {
      "type": "book",
      "tier": 94,
      "level": 40,
      "skillid": 18,
      "skilllevel": 4,
      "class": 0,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book02",
      "useSkill": 101,
      "logicId": 250
    },
    "book160": {
      "type": "book",
      "tier": 160,
      "level": 5,
      "skillid": 32,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 251
    },
    "book120": {
      "type": "book",
      "tier": 120,
      "level": 15,
      "skillid": 24,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 252
    },
    "book121": {
      "type": "book",
      "tier": 121,
      "level": 23,
      "skillid": 24,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 253
    },
    "book122": {
      "type": "book",
      "tier": 122,
      "level": 31,
      "skillid": 24,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 254
    },
    "book123": {
      "type": "book",
      "tier": 123,
      "level": 39,
      "skillid": 24,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 255
    },
    "book124": {
      "type": "book",
      "tier": 124,
      "level": 47,
      "skillid": 24,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 256
    },
    "book110": {
      "type": "book",
      "tier": 110,
      "level": 17,
      "skillid": 22,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 257
    },
    "book111": {
      "type": "book",
      "tier": 111,
      "level": 25,
      "skillid": 22,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 258
    },
    "book112": {
      "type": "book",
      "tier": 112,
      "level": 33,
      "skillid": 22,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 259
    },
    "book113": {
      "type": "book",
      "tier": 113,
      "level": 41,
      "skillid": 22,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 260
    },
    "book114": {
      "type": "book",
      "tier": 114,
      "level": 49,
      "skillid": 22,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 261
    },
    "book115": {
      "type": "book",
      "tier": 115,
      "level": 5,
      "skillid": 23,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 262
    },
    "book116": {
      "type": "book",
      "tier": 116,
      "level": 13,
      "skillid": 23,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 263
    },
    "book117": {
      "type": "book",
      "tier": 117,
      "level": 21,
      "skillid": 23,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 264
    },
    "book118": {
      "type": "book",
      "tier": 118,
      "level": 29,
      "skillid": 23,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 265
    },
    "book119": {
      "type": "book",
      "tier": 119,
      "level": 37,
      "skillid": 23,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 266
    },
    "book80": {
      "type": "book",
      "tier": 80,
      "level": 13,
      "skillid": 16,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 267
    },
    "book81": {
      "type": "book",
      "tier": 81,
      "level": 21,
      "skillid": 16,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 268
    },
    "book82": {
      "type": "book",
      "tier": 82,
      "level": 29,
      "skillid": 16,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 269
    },
    "book83": {
      "type": "book",
      "tier": 83,
      "level": 37,
      "skillid": 16,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 270
    },
    "book84": {
      "type": "book",
      "tier": 84,
      "level": 45,
      "skillid": 16,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 271
    },
    "book70": {
      "type": "book",
      "tier": 70,
      "level": 3,
      "skillid": 14,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 272
    },
    "book71": {
      "type": "book",
      "tier": 71,
      "level": 11,
      "skillid": 14,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 273
    },
    "book72": {
      "type": "book",
      "tier": 72,
      "level": 19,
      "skillid": 14,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 274
    },
    "book73": {
      "type": "book",
      "tier": 73,
      "level": 27,
      "skillid": 14,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 275
    },
    "book74": {
      "type": "book",
      "tier": 74,
      "level": 35,
      "skillid": 14,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 276
    },
    "book20": {
      "type": "book",
      "tier": 20,
      "level": 1,
      "skillid": 4,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 277
    },
    "book21": {
      "type": "book",
      "tier": 21,
      "level": 9,
      "skillid": 4,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 278
    },
    "book22": {
      "type": "book",
      "tier": 22,
      "level": 17,
      "skillid": 4,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 279
    },
    "book23": {
      "type": "book",
      "tier": 23,
      "level": 25,
      "skillid": 4,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 280
    },
    "book24": {
      "type": "book",
      "tier": 24,
      "level": 33,
      "skillid": 4,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 281
    },
    "book75": {
      "type": "book",
      "tier": 75,
      "level": 8,
      "skillid": 15,
      "skilllevel": 0,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book10",
      "useSkill": 101,
      "logicId": 282
    },
    "book76": {
      "type": "book",
      "tier": 76,
      "level": 16,
      "skillid": 15,
      "skilllevel": 1,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book10",
      "useSkill": 101,
      "logicId": 283
    },
    "book77": {
      "type": "book",
      "tier": 77,
      "level": 24,
      "skillid": 15,
      "skilllevel": 2,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book11",
      "useSkill": 101,
      "logicId": 284
    },
    "book78": {
      "type": "book",
      "tier": 78,
      "level": 32,
      "skillid": 15,
      "skilllevel": 3,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book11",
      "useSkill": 101,
      "logicId": 285
    },
    "book79": {
      "type": "book",
      "tier": 79,
      "level": 40,
      "skillid": 15,
      "skilllevel": 4,
      "class": 1,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book12",
      "useSkill": 101,
      "logicId": 286
    },
    "book190": {
      "type": "book",
      "tier": 190,
      "level": 5,
      "skillid": 38,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 287
    },
    "book145": {
      "type": "book",
      "tier": 145,
      "level": 9,
      "skillid": 29,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 288
    },
    "book146": {
      "type": "book",
      "tier": 146,
      "level": 17,
      "skillid": 29,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 289
    },
    "book147": {
      "type": "book",
      "tier": 147,
      "level": 25,
      "skillid": 29,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 290
    },
    "book148": {
      "type": "book",
      "tier": 148,
      "level": 33,
      "skillid": 29,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 291
    },
    "book149": {
      "type": "book",
      "tier": 149,
      "level": 41,
      "skillid": 29,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 292
    },
    "book125": {
      "type": "book",
      "tier": 125,
      "level": 18,
      "skillid": 25,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 293
    },
    "book126": {
      "type": "book",
      "tier": 126,
      "level": 26,
      "skillid": 25,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 294
    },
    "book127": {
      "type": "book",
      "tier": 127,
      "level": 34,
      "skillid": 25,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 295
    },
    "book128": {
      "type": "book",
      "tier": 128,
      "level": 42,
      "skillid": 25,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 296
    },
    "book129": {
      "type": "book",
      "tier": 129,
      "level": 50,
      "skillid": 25,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 297
    },
    "book135": {
      "type": "book",
      "tier": 135,
      "level": 12,
      "skillid": 27,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 298
    },
    "book136": {
      "type": "book",
      "tier": 136,
      "level": 20,
      "skillid": 27,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 299
    },
    "book137": {
      "type": "book",
      "tier": 137,
      "level": 28,
      "skillid": 27,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 300
    },
    "book138": {
      "type": "book",
      "tier": 138,
      "level": 36,
      "skillid": 27,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 301
    },
    "book139": {
      "type": "book",
      "tier": 139,
      "level": 44,
      "skillid": 27,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 302
    },
    "book45": {
      "type": "book",
      "tier": 45,
      "level": 3,
      "skillid": 9,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 303
    },
    "book46": {
      "type": "book",
      "tier": 46,
      "level": 11,
      "skillid": 9,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 304
    },
    "book47": {
      "type": "book",
      "tier": 47,
      "level": 19,
      "skillid": 9,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 305
    },
    "book48": {
      "type": "book",
      "tier": 48,
      "level": 27,
      "skillid": 9,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 306
    },
    "book49": {
      "type": "book",
      "tier": 49,
      "level": 35,
      "skillid": 9,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 307
    },
    "book50": {
      "type": "book",
      "tier": 50,
      "level": 5,
      "skillid": 10,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 308
    },
    "book51": {
      "type": "book",
      "tier": 51,
      "level": 13,
      "skillid": 10,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 309
    },
    "book52": {
      "type": "book",
      "tier": 52,
      "level": 21,
      "skillid": 10,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 310
    },
    "book53": {
      "type": "book",
      "tier": 53,
      "level": 29,
      "skillid": 10,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 311
    },
    "book54": {
      "type": "book",
      "tier": 54,
      "level": 37,
      "skillid": 10,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 312
    },
    "book55": {
      "type": "book",
      "tier": 55,
      "level": 7,
      "skillid": 11,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 313
    },
    "book56": {
      "type": "book",
      "tier": 56,
      "level": 15,
      "skillid": 11,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 314
    },
    "book57": {
      "type": "book",
      "tier": 57,
      "level": 23,
      "skillid": 11,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 315
    },
    "book58": {
      "type": "book",
      "tier": 58,
      "level": 31,
      "skillid": 11,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 316
    },
    "book59": {
      "type": "book",
      "tier": 59,
      "level": 39,
      "skillid": 11,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 317
    },
    "book155": {
      "type": "book",
      "tier": 155,
      "level": 1,
      "skillid": 31,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 318
    },
    "book156": {
      "type": "book",
      "tier": 156,
      "level": 9,
      "skillid": 31,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 319
    },
    "book157": {
      "type": "book",
      "tier": 157,
      "level": 17,
      "skillid": 31,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 320
    },
    "book158": {
      "type": "book",
      "tier": 158,
      "level": 25,
      "skillid": 31,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 321
    },
    "book159": {
      "type": "book",
      "tier": 159,
      "level": 33,
      "skillid": 31,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 322
    },
    "book130": {
      "type": "book",
      "tier": 130,
      "level": 15,
      "skillid": 26,
      "skilllevel": 0,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book20",
      "useSkill": 101,
      "logicId": 323
    },
    "book131": {
      "type": "book",
      "tier": 131,
      "level": 23,
      "skillid": 26,
      "skilllevel": 1,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book20",
      "useSkill": 101,
      "logicId": 324
    },
    "book132": {
      "type": "book",
      "tier": 132,
      "level": 31,
      "skillid": 26,
      "skilllevel": 2,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book21",
      "useSkill": 101,
      "logicId": 325
    },
    "book133": {
      "type": "book",
      "tier": 133,
      "level": 39,
      "skillid": 26,
      "skilllevel": 3,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book21",
      "useSkill": 101,
      "logicId": 326
    },
    "book134": {
      "type": "book",
      "tier": 134,
      "level": 47,
      "skillid": 26,
      "skilllevel": 4,
      "class": 2,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book22",
      "useSkill": 101,
      "logicId": 327
    },
    "book215": {
      "type": "book",
      "tier": 215,
      "level": 3,
      "skillid": 43,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 328
    },
    "book216": {
      "type": "book",
      "tier": 216,
      "level": 11,
      "skillid": 43,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 329
    },
    "book217": {
      "type": "book",
      "tier": 217,
      "level": 19,
      "skillid": 43,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 330
    },
    "book218": {
      "type": "book",
      "tier": 218,
      "level": 27,
      "skillid": 43,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 331
    },
    "book219": {
      "type": "book",
      "tier": 219,
      "level": 35,
      "skillid": 43,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 332
    },
    "book210": {
      "type": "book",
      "tier": 210,
      "level": 8,
      "skillid": 42,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 333
    },
    "book211": {
      "type": "book",
      "tier": 211,
      "level": 16,
      "skillid": 42,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 334
    },
    "book212": {
      "type": "book",
      "tier": 212,
      "level": 24,
      "skillid": 42,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 335
    },
    "book213": {
      "type": "book",
      "tier": 213,
      "level": 32,
      "skillid": 42,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 336
    },
    "book214": {
      "type": "book",
      "tier": 214,
      "level": 40,
      "skillid": 42,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 337
    },
    "book185": {
      "type": "book",
      "tier": 185,
      "level": 15,
      "skillid": 37,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 338
    },
    "book186": {
      "type": "book",
      "tier": 186,
      "level": 23,
      "skillid": 37,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 339
    },
    "book187": {
      "type": "book",
      "tier": 187,
      "level": 31,
      "skillid": 37,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 340
    },
    "book188": {
      "type": "book",
      "tier": 188,
      "level": 39,
      "skillid": 37,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 341
    },
    "book189": {
      "type": "book",
      "tier": 189,
      "level": 47,
      "skillid": 37,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 342
    },
    "book140": {
      "type": "book",
      "tier": 140,
      "level": 12,
      "skillid": 28,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 343
    },
    "book141": {
      "type": "book",
      "tier": 141,
      "level": 20,
      "skillid": 28,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 344
    },
    "book142": {
      "type": "book",
      "tier": 142,
      "level": 28,
      "skillid": 28,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 345
    },
    "book143": {
      "type": "book",
      "tier": 143,
      "level": 36,
      "skillid": 28,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 346
    },
    "book144": {
      "type": "book",
      "tier": 144,
      "level": 44,
      "skillid": 28,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 347
    },
    "book65": {
      "type": "book",
      "tier": 65,
      "level": 6,
      "skillid": 13,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 348
    },
    "book66": {
      "type": "book",
      "tier": 66,
      "level": 14,
      "skillid": 13,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 349
    },
    "book67": {
      "type": "book",
      "tier": 67,
      "level": 22,
      "skillid": 13,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 350
    },
    "book68": {
      "type": "book",
      "tier": 68,
      "level": 30,
      "skillid": 13,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 351
    },
    "book69": {
      "type": "book",
      "tier": 69,
      "level": 38,
      "skillid": 13,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 352
    },
    "book30": {
      "type": "book",
      "tier": 30,
      "level": 8,
      "skillid": 6,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 353
    },
    "book31": {
      "type": "book",
      "tier": 31,
      "level": 16,
      "skillid": 6,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 354
    },
    "book32": {
      "type": "book",
      "tier": 32,
      "level": 24,
      "skillid": 6,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 355
    },
    "book33": {
      "type": "book",
      "tier": 33,
      "level": 32,
      "skillid": 6,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 356
    },
    "book34": {
      "type": "book",
      "tier": 34,
      "level": 40,
      "skillid": 6,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 357
    },
    "book35": {
      "type": "book",
      "tier": 35,
      "level": 3,
      "skillid": 7,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 358
    },
    "book36": {
      "type": "book",
      "tier": 36,
      "level": 11,
      "skillid": 7,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 359
    },
    "book37": {
      "type": "book",
      "tier": 37,
      "level": 19,
      "skillid": 7,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 360
    },
    "book38": {
      "type": "book",
      "tier": 38,
      "level": 27,
      "skillid": 7,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 361
    },
    "book39": {
      "type": "book",
      "tier": 39,
      "level": 35,
      "skillid": 7,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 362
    },
    "book60": {
      "type": "book",
      "tier": 60,
      "level": 1,
      "skillid": 12,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 4,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 363
    },
    "book61": {
      "type": "book",
      "tier": 61,
      "level": 9,
      "skillid": 12,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 364
    },
    "book62": {
      "type": "book",
      "tier": 62,
      "level": 17,
      "skillid": 12,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 365
    },
    "book63": {
      "type": "book",
      "tier": 63,
      "level": 25,
      "skillid": 12,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 366
    },
    "book64": {
      "type": "book",
      "tier": 64,
      "level": 33,
      "skillid": 12,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 367
    },
    "book150": {
      "type": "book",
      "tier": 150,
      "level": 18,
      "skillid": 30,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 368
    },
    "book151": {
      "type": "book",
      "tier": 151,
      "level": 26,
      "skillid": 30,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 369
    },
    "book152": {
      "type": "book",
      "tier": 152,
      "level": 34,
      "skillid": 30,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 370
    },
    "book153": {
      "type": "book",
      "tier": 153,
      "level": 42,
      "skillid": 30,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 371
    },
    "book154": {
      "type": "book",
      "tier": 154,
      "level": 50,
      "skillid": 30,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 372
    },
    "book175": {
      "type": "book",
      "tier": 175,
      "level": 5,
      "skillid": 35,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 373
    },
    "book180": {
      "type": "book",
      "tier": 180,
      "level": 10,
      "skillid": 36,
      "skilllevel": 0,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 30,
      "art": "book30",
      "useSkill": 101,
      "logicId": 374
    },
    "book181": {
      "type": "book",
      "tier": 181,
      "level": 18,
      "skillid": 36,
      "skilllevel": 1,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 44,
      "art": "book30",
      "useSkill": 101,
      "logicId": 375
    },
    "book182": {
      "type": "book",
      "tier": 182,
      "level": 26,
      "skillid": 36,
      "skilllevel": 2,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 58,
      "art": "book31",
      "useSkill": 101,
      "logicId": 376
    },
    "book183": {
      "type": "book",
      "tier": 183,
      "level": 34,
      "skillid": 36,
      "skilllevel": 3,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 72,
      "art": "book31",
      "useSkill": 101,
      "logicId": 377
    },
    "book184": {
      "type": "book",
      "tier": 184,
      "level": 42,
      "skillid": 36,
      "skilllevel": 4,
      "class": 3,
      "noReward": false,
      "goldValue": 0,
      "quality": 86,
      "art": "book32",
      "useSkill": 101,
      "logicId": 378
    },
    "book195": {
      "type": "book",
      "tier": 195,
      "level": 30,
      "skillid": 39,
      "skilllevel": 0,
      "noReward": true,
      "goldValue": 25000,
      "quality": 30,
      "art": "book0",
      "useSkill": 101,
      "logicId": 379
    },
    "mount0": {
      "level": 30,
      "goldValue": 10000,
      "quality": 50,
      "visualData": {},
      "type": "mount",
      "tier": 0,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 380
    },
    "mount1": {
      "level": 30,
      "goldValue": 20000,
      "quality": 50,
      "visualData": {},
      "type": "mount",
      "tier": 1,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 381
    },
    "mount2": {
      "level": 30,
      "goldValue": 50000,
      "quality": 80,
      "visualData": {
        "colEyes": [
          0.6745098039215687,
          0.9254901960784314,
          0.9176470588235294,
          0
        ],
        "colPrim": [
          0.2823529411764706,
          0.8196078431372549,
          0.27058823529411763,
          -0.2
        ],
        "colSec": [
          0.0784313725490196,
          0.6196078431372549,
          0.1411764705882353,
          -0.2
        ]
      },
      "type": "mount",
      "tier": 2,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 382
    },
    "mount3": {
      "level": 30,
      "goldValue": 50000,
      "quality": 80,
      "visualData": {
        "colEyes": [
          1,
          0.6039215686274509,
          0.7058823529411765,
          0
        ],
        "colPrim": [
          0.9411764705882353,
          0.1411764705882353,
          0.1411764705882353,
          0.5
        ],
        "colSec": [
          0.9411764705882353,
          0.1411764705882353,
          0.1411764705882353,
          0.5
        ]
      },
      "type": "mount",
      "tier": 3,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 383
    },
    "mount4": {
      "level": 30,
      "goldValue": 50000,
      "quality": 95,
      "visualData": {
        "colEyes": [
          0.8549019607843137,
          0.08627450980392157,
          0.28627450980392155,
          0
        ],
        "colPrim": [
          0.24313725490196078,
          0.1843137254901961,
          0.1843137254901961,
          0.1
        ],
        "colSec": [
          0.11764705882352941,
          0.06274509803921569,
          0.08627450980392157,
          0.1
        ],
        "legsize": 0.5
      },
      "type": "mount",
      "tier": 4,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 384
    },
    "mount5": {
      "level": 30,
      "goldValue": 50000,
      "quality": 90,
      "visualData": {
        "colEyes": [
          0.11764705882352941,
          0.9647058823529412,
          0.25882352941176473,
          0
        ],
        "colPrim": [
          0.15294117647058825,
          0.14901960784313725,
          0.16470588235294117,
          0.3
        ],
        "colSec": [
          0.13333333333333333,
          0.12156862745098039,
          0.1450980392156863,
          0.3
        ],
        "legsize": 1.4
      },
      "type": "mount",
      "tier": 5,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 385
    },
    "mount6": {
      "level": 30,
      "goldValue": 50000,
      "quality": 80,
      "visualData": {
        "colEyes": [
          0.7647058823529411,
          0.6980392156862745,
          0.6980392156862745,
          0
        ],
        "colPrim": [
          0.6745098039215687,
          0.6274509803921569,
          0.6274509803921569,
          0.1
        ],
        "colSec": [
          0.49019607843137253,
          0.45098039215686275,
          0.45098039215686275,
          0.1
        ],
        "meshHead": "character/blob"
      },
      "type": "mount",
      "tier": 6,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 386
    },
    "mount7": {
      "level": 30,
      "goldValue": 50000,
      "quality": 90,
      "visualData": {
        "colEyes": [
          0.9490196078431372,
          0.3254901960784314,
          0.050980392156862744,
          0
        ],
        "colPrim": [
          0.8784313725490196,
          0.5450980392156862,
          0.14901960784313725,
          -0.7
        ],
        "colSec": [
          0.8784313725490196,
          0.5450980392156862,
          0.14901960784313725,
          -0.7
        ],
        "meshHead": "character/blob"
      },
      "type": "mount",
      "tier": 7,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 387
    },
    "mount8": {
      "level": 30,
      "goldValue": 50000,
      "quality": 95,
      "visualData": {
        "colEyes": [
          0.7411764705882353,
          0.9921568627450981,
          1,
          0
        ],
        "colPrim": [
          0.23529411764705882,
          0.27058823529411763,
          0.9490196078431372,
          -0.4
        ],
        "colSec": [
          0.20784313725490197,
          0.8,
          0.8705882352941177,
          -0.4
        ],
        "meshHead": "character/wyrmhead",
        "meshEyes": "character/wyrmEyes"
      },
      "type": "mount",
      "tier": 8,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 388
    },
    "mount9": {
      "level": 30,
      "goldValue": 50000,
      "quality": 95,
      "visualData": {
        "colEyes": [
          0.1607843137254902,
          0.9333333333333333,
          0.3607843137254902,
          0
        ],
        "colPrim": [
          0.11372549019607843,
          0.10196078431372549,
          0.12156862745098039,
          0.4
        ],
        "colSec": [
          0.13333333333333333,
          1,
          0.2980392156862745,
          -0.8
        ],
        "meshHead": "character/wyrmhead",
        "meshEyes": "character/wyrmEyes"
      },
      "type": "mount",
      "tier": 9,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 389
    },
    "mount10": {
      "level": 30,
      "goldValue": 50000,
      "quality": 80,
      "visualData": {
        "colEyes": [
          1,
          0.7215686274509804,
          0.4196078431372549,
          0
        ],
        "colPrim": [
          0.9215686274509803,
          0.7294117647058823,
          0.3568627450980392,
          0.1
        ],
        "colSec": [
          0.6784313725490196,
          0.49411764705882355,
          0.20392156862745098,
          0.1
        ],
        "legsize": 0.6,
        "meshHead": "character/wyrmhead",
        "meshBack": "character/wyrmhead",
        "meshEyes": "character/wyrmEyes",
        "chestOffset": 0.5
      },
      "type": "mount",
      "tier": 10,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 390
    },
    "mount11": {
      "level": 30,
      "goldValue": 50000,
      "quality": 95,
      "visualData": {
        "colEyes": [
          1,
          1,
          1,
          0
        ],
        "colPrim": [
          0.2,
          0.2,
          0.2,
          0.5
        ],
        "colSec": [
          1,
          0.611764705882353,
          0,
          0.9
        ],
        "legsize": 0.6,
        "meshHead": "character/wyrmhead",
        "meshBack": "character/wyrmhead",
        "meshEyes": "character/wyrmEyes",
        "chestOffset": 0.5
      },
      "type": "mount",
      "tier": 11,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 391
    },
    "mount12": {
      "level": 30,
      "goldValue": 50000,
      "quality": 95,
      "visualData": {
        "colEyes": [
          1,
          0.596078431372549,
          0.023529411764705882,
          0
        ],
        "colPrim": [
          0.788235294117647,
          0.0784313725490196,
          0.0784313725490196,
          -0.6
        ],
        "colSec": [
          1,
          0.1568627450980392,
          0.043137254901960784,
          -0.7
        ],
        "legsize": 1.1,
        "meshHead": "character/blob",
        "meshBack": "character/wyrmhead",
        "meshEyes": "character/wyrmEyes"
      },
      "type": "mount",
      "tier": 12,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 392
    },
    "mount13": {
      "level": 30,
      "goldValue": 50000,
      "quality": 85,
      "visualData": {
        "colEyes": [
          0.8784313725490196,
          0.5450980392156862,
          0.14901960784313725,
          -0.7
        ],
        "colPrim": [
          0.2,
          0.2,
          0.2,
          0.5
        ],
        "colSec": [
          0.8784313725490196,
          0.5450980392156862,
          0.14901960784313725,
          -0.7
        ]
      },
      "type": "mount",
      "tier": 13,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 393
    },
    "mount14": {
      "level": 30,
      "goldValue": 50000,
      "quality": 95,
      "visualData": {
        "colEyes": [
          0.8705882352941177,
          0.9333333333333333,
          0.9568627450980393,
          -0.2
        ],
        "colPrim": [
          0.23529411764705882,
          0.7372549019607844,
          1,
          -0.6
        ],
        "colSec": [
          0.8705882352941177,
          0.9333333333333333,
          0.9568627450980393,
          -0.2
        ]
      },
      "type": "mount",
      "tier": 14,
      "requiredSkills": [
        39
      ],
      "useSkill": 102,
      "logicId": 394
    },
    "charm0": {
      "medalValue": 1000,
      "goldValue": 50000,
      "buyElo": 1600,
      "quality": 90,
      "level": 45,
      "gs": 30,
      "uniqueEquipped": true,
      "id": 0,
      "custom": [
        "Use: Removes all movement limiting effects."
      ],
      "useCd": 60,
      "incap": true,
      "effectCast": [
        {
          "timeout": 1.3,
          "BM": {
            "Zj": [
              1,
              1,
              1
            ],
            "size": 0,
            "dynamic": true
          }
        }
      ],
      "type": "charm",
      "tier": 0,
      "useSkill": 105,
      "logicId": 395
    },
    "charm1": {
      "medalValue": 1000,
      "goldValue": 50000,
      "buyElo": 1600,
      "quality": 90,
      "level": 45,
      "gs": 30,
      "uniqueEquipped": true,
      "id": 1,
      "custom": [
        "Use: Protects you against 30% of incoming damage for 10 seconds."
      ],
      "useCd": 60,
      "incap": false,
      "type": "charm",
      "tier": 1,
      "useSkill": 106,
      "logicId": 396
    },
    "charm2": {
      "medalValue": 1000,
      "goldValue": 50000,
      "buyElo": 1600,
      "quality": 90,
      "level": 45,
      "gs": 30,
      "uniqueEquipped": true,
      "id": 2,
      "custom": [
        "Use: Increases your damage by 20% for 10 seconds."
      ],
      "useCd": 80,
      "incap": false,
      "type": "charm",
      "tier": 2,
      "useSkill": 107,
      "logicId": 397
    },
    "charm3": {
      "medalValue": 1000,
      "goldValue": 50000,
      "buyElo": 1600,
      "quality": 90,
      "level": 45,
      "gs": 30,
      "uniqueEquipped": true,
      "id": 3,
      "custom": [
        "Use: Speeds up your movement by 45 for 8 seconds."
      ],
      "useCd": 50,
      "incap": false,
      "type": "charm",
      "tier": 3,
      "useSkill": 108,
      "logicId": 398
    },
    "charm4": {
      "medalValue": 1000,
      "goldValue": 50000,
      "buyElo": 1600,
      "quality": 90,
      "level": 45,
      "gs": 30,
      "uniqueEquipped": true,
      "id": 4,
      "custom": [
        "Use: Attacks made against you grant 20 MP (up to 200) for 20 seconds."
      ],
      "useCd": 60,
      "incap": false,
      "type": "charm",
      "tier": 4,
      "useSkill": 109,
      "logicId": 399
    },
    "box0": {
      "id": 0,
      "storeValue": 300,
      "quality": 90,
      "level": 1,
      "custom": [
        "Contains one random mount of rare or epic quality"
      ],
      "type": "box",
      "tier": 0,
      "unsellable": true,
      "useSkill": 103,
      "logicId": 400
    }
  }

hydrate(test)
