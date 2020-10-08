const tierlist = require("./init.js").tiers()
const Zo = require("./init.js").Zo

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

exports.hydrate = class {
    constructor() {
        this.stats = new Map, this.dirty = !0
    }
    hydrate(t) {
        if (this.dirty = !1, this.bound = t.bound, this.type = t.type, this.tier = t.tier, this.logic = tierlist[this.type + this.tier], this.auction = t.auction ? new Date(t.auction) : void 0, this.auctionprice = t.auctionprice, this.owner = t.name, this.stash = t.stash ? new Date(t.stash) : void 0, void 0 === this.logic) throw "Unknown this " + t.type + t.tier;
        if (typeof tierlist[this.type + this.tier] === "undefined") {
            this.id = null;
            return;
        }
        this.stats = new Map()
        this.id = t.id
        if (this.upgrade = t.upgrade, this.stats.clear(), t.rolls) {
            if (this.setRolls(t.rolls), this.quality = this.nextRoll(), this.logic.stats) {
                this.logic.stats.forEach((t, e) => {
                    this.stats.set(e, {
                        type: "base",
                        qual: this.quality,
                        value: Math.floor(t.min + (t.max - t.min) * (this.quality / 100) ** 2 + No[e] * this.upgrade)
                    })
                });
                const t = Math.round((this.quality / 100) ** 1.5 * 3.6);
                for (let e = 0; e < t; ++e) {
                    let t = this.nextRoll(),
                        e = -1;
                    for (; - 1 === e || this.stats.has(e);) e = parseInt(Uo(wM, t / 101)), t = (t + 5) % 100;
                    const s = (this.nextRoll() + this.quality) / 2;
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

        this.cleanUp()
        // console.log(JSON.stringify(this))
        // console.log(this.stats)
    }

    setRolls(t) {
        this.rolls = t, this.currentRoll = 0
    }

    nextRoll() {
        if (this.currentRoll == this.rolls.length) throw "roll maximum reached";
        return this.rolls[this.currentRoll++]
    }

    cleanUp() {
        delete this.dirty
        delete this.bound
        delete this.logic
        delete this.stash
        delete this.setRolls
        delete this.nextRoll
        delete this.rolls
        delete this.currentRoll
        this.stats = Array.from(this.stats).reduce((obj, [key, value]) => (
            Object.assign(obj, {
                [key]: value })
        ), {});
    }
}

No = {
    6: 4,
    7: 3,
    8: 5,
    9: 4,
    10: 1,
    11: 1,
    12: 5,
    13: 5,
    14: 5,
    15: .3,
    16: 5,
    17: 0,
    2: 2,
    0: 2,
    3: 2,
    4: 2,
    1: 2,
    5: 2,
    19: 1,
    18: 3
}

Uo = (t, e) => t[Math.floor(e * t.length)]

Lo = {
    6: {
        min: .2,
        max: .8,
        round: !0
    },
    7: {
        min: .2,
        max: .5,
        round: !0
    },
    8: {
        min: .1,
        max: 1
    },
    9: {
        min: .1,
        max: .5
    },
    10: {
        min: .03,
        max: .13,
        round: !0
    },
    11: {
        min: .1,
        max: .2,
        round: !0
    },
    12: {
        min: .1,
        max: .8,
        round: !0
    },
    13: {
        min: .1,
        max: .4
    },
    14: {
        min: .1,
        max: .5
    },
    16: {
        min: .1,
        max: .4
    },
    2: {
        min: .08,
        max: .45,
        round: !0
    },
    0: {
        min: .08,
        max: .45,
        round: !0
    },
    3: {
        min: .08,
        max: .45,
        round: !0
    },
    4: {
        min: .08,
        max: .45,
        round: !0
    },
    1: {
        min: .08,
        max: .45,
        round: !0
    },
    5: {
        min: .08,
        max: .45,
        round: !0
    },
    18: {
        min: .01,
        max: .15,
        round: !0
    }
}

const wM = Object.keys(Lo)