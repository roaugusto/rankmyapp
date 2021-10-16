const ranking = require("./ranking")
// @ponicode
describe("ranking.loadRanks", () => {
    test("0", () => {
        let param1 = [[0, 1, 2, 80, 3], [0, 1, 2, 80, 3], [0, 1, 2, 80, 3]]
        let callFunction = () => {
            ranking.loadRanks(param1, [1.0, 0.5, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[0, 1, 2, 80, 3], [0, 1, 2, 80, 3], [0, 1, 2, 80, 3]]
        let callFunction = () => {
            ranking.loadRanks(param1, [-1.0, 10.0, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [100, [0, 1, 2, 80, 3], [0, 1, 2, 80, 3]]
        let callFunction = () => {
            ranking.loadRanks(param1, [-1.0, 0.0, -0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[0, 1, 2, 80, 3], 1, [0, 1, 2, 80, 3]]
        let callFunction = () => {
            ranking.loadRanks(param1, [10.23, -29.45, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[0, 1, 2, 80, 3], 1, [0, 1, 2, 80, 3]]
        let callFunction = () => {
            ranking.loadRanks(param1, [-1.0, -29.45, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ranking.loadRanks(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ranking.getRanks", () => {
    test("0", () => {
        let callFunction = () => {
            ranking.getRanks()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ranking.setCols", () => {
    test("0", () => {
        let callFunction = () => {
            ranking.setCols(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ranking.setCols(3.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ranking.setCols(4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ranking.setCols(30)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ranking.setCols(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ranking.setCols(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ranking.setWords", () => {
    test("0", () => {
        let callFunction = () => {
            ranking.setWords(["natus", "et", "ea", "voluptas", "eveniet"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ranking.setWords("perferendis aut voluptatibus")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ranking.setWords("consectetur blanditiis rerum")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ranking.setWords("in et tempore")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ranking.setWords("illo qui omnis")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ranking.setWords(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ranking.setFirstList", () => {
    test("0", () => {
        let callFunction = () => {
            ranking.setFirstList([161, 129, 202])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ranking.setFirstList([239, 254, 224])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ranking.setFirstList([161, 176, 252])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ranking.setFirstList([143, 224, 176])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ranking.setFirstList([239, 129, 239])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ranking.setFirstList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ranking.setSecondList", () => {
    test("0", () => {
        let callFunction = () => {
            ranking.setSecondList([252, 142, 196])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ranking.setSecondList([142, 202, 159])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ranking.setSecondList([224, 142, 196])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ranking.setSecondList([159, 176, 250])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ranking.setSecondList([143, 135, 176])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ranking.setSecondList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
