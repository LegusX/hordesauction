var list = {}
exports.tiers = function() {
    //generate the tier list somehow
    Dy(list)//, Fy(list), Cy(list), Eg(list), Xv(list), Iy(list);
    return(list)
}

Dy = t => {
    for (const e in Zo)
        if (Zo[e].tiers) {
            const s = Zo[e];
            for (let i = 0; i < s.tiers; ++i) Ay({
                type: e,
                tier: i,
                stats: s.stats,
                level: By(e, i),
                class: s.class,
                quality: s.quality
            }, t)
        }
}

By = (t, e) => Zo[t].baselvl + Math.floor(e / Zo[t].tiers * 100)

Ay = (t, e) => {
    const s = {
        level: t.level,
        type: t.type,
        tier: t.tier,
        stats: t.stats ? new Map : void 0,
        class: t.class,
        quality: t.quality
    };
    t.stats && Object.keys(t.stats).sort((t, e) => t - e).forEach(e => {
        const i = t.stats[e];
        s.stats.set(parseInt(e), {
            min: i.base + t.level * i.min,
            max: i.base + (t.level + 10) * i.max
        })
    }), e[t.type + t.tier] = s
}

const Zo = {
    hammer: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 3,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 15,
                min: .05,
                max: .1
            }
        }
    },
    bow: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 2,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 10,
                min: .05,
                max: .1
            }
        }
    },
    staff: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 1,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 10,
                min: .05,
                max: .1
            }
        }
    },
    sword: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 0,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 20,
                min: .05,
                max: .1
            }
        }
    },
    armlet: {
        baselvl: 1,
        slot: [102],
        tiers: 13,
        drop: 1,
        weight: .3,
        stats: {
            6: {
                base: 10,
                min: .5,
                max: .9
            },
            12: {
                base: 7,
                min: .5,
                max: .8
            }
        }
    },
    armor: {
        baselvl: 2,
        slot: [103],
        tiers: 11,
        drop: 1,
        weight: 1,
        stats: {
            12: {
                base: 10,
                min: 1.4,
                max: 2.8
            },
            6: {
                base: 20,
                min: 1,
                max: 2
            }
        }
    },
    bag: {
        baselvl: 5,
        slot: [104],
        tiers: 5,
        drop: 1,
        weight: .1,
        stats: {
            19: {
                base: 1,
                min: .1,
                max: .3
            }
        }
    },
    boot: {
        baselvl: 2,
        slot: [105],
        tiers: 13,
        drop: 1,
        weight: .4,
        stats: {
            6: {
                base: 10,
                min: .6,
                max: 1
            },
            12: {
                base: 8,
                min: .6,
                max: 1.1
            },
            15: {
                base: 3,
                min: .03,
                max: .1
            }
        }
    },
    glove: {
        baselvl: 2,
        slot: [106],
        tiers: 13,
        drop: 1,
        weight: .4,
        stats: {
            6: {
                base: 10,
                min: .6,
                max: 1
            },
            12: {
                base: 8,
                min: .7,
                max: 1.1
            },
            14: {
                base: 1,
                min: .1,
                max: 1.5
            }
        }
    },
    ring: {
        baselvl: 5,
        slot: [107],
        tiers: 12,
        drop: .8,
        weight: .2,
        stats: {
            6: {
                base: 10,
                min: .5,
                max: .9
            },
            7: {
                base: 5,
                min: .6,
                max: 1
            }
        }
    },
    amulet: {
        baselvl: 7,
        slot: [108],
        tiers: 12,
        drop: .8,
        weight: .3,
        stats: {
            7: {
                base: 10,
                min: 1,
                max: 1.8
            },
            9: {
                base: 1,
                min: .2,
                max: .3
            }
        }
    },
    quiver: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 2,
        stats: {
            14: {
                base: 5,
                min: .1,
                max: .9
            },
            9: {
                base: 1,
                min: .1,
                max: .3
            }
        }
    },
    shield: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 0,
        stats: {
            12: {
                base: 20,
                min: .8,
                max: 1.4
            },
            13: {
                base: 4,
                min: 1,
                max: 2.8
            }
        }
    },
    totem: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 3,
        stats: {
            12: {
                base: 10,
                min: .4,
                max: .9
            },
            9: {
                base: 1,
                min: .1,
                max: .4
            }
        }
    },
    orb: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 1,
        stats: {
            3: {
                base: 10,
                min: .3,
                max: .7
            },
            9: {
                base: 1,
                min: .1,
                max: .3
            }
        }
    },
    rune: {
        baselvl: 1,
        tiers: 11,
        drop: .8,
        quality: 70
    },
    misc: {
        drop: 7,
        weight: .1
    },
    book: {
        drop: 1.5,
        weight: .5
    },
    charm: {
        slot: [110, 111],
        noupgrade: !0,
        undroppable: !0,
        drop: 0,
        stackable: !1
    },
    mount: {
        noupgrade: !0,
        undroppable: !0,
        drop: 0,
        stackable: !1
    },
    box: {
        noupgrade: !0,
        undroppable: !0,
        drop: 0,
        stackable: !1
    },
    gold: {
        drop: 20
    }
}

exports.Zo = Zo