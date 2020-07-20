import { expect } from "chai"
import { describe } from "mocha"
import { Golondrina } from "../src/golondrina"

describe("Golondrina - pepita", () => {

    it("dada pepita que tiene 0 de energia, cuando come 30 gramos obtiene un total de 120 de energia", () => {
        var pepita = new Golondrina()
        pepita.comer(30)
        expect(pepita.energia()).to.equal(120)
    })

    it("dada pepita que tiene 120 de energia, cuando vuela descuenta su energia y su energia queda en 100 ", () => {
        const pepita = new Golondrina()
        pepita.comer(30)

        expect(pepita.energia()).to.equal(120)
        pepita.volar(10)
        expect(pepita.energia()).to.equal(100)
    })

});