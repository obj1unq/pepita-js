export class Golondrina {

    _energia = 0

    comer(gramos) {
        this._energia += gramos * 4
    }

    volar(kilometros) {
        this._energia -= kilometros + 10
    }

    energia() {
        return this._energia
    }

} 