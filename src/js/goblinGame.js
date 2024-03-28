export default class goblinGame {

    #score;
    #missCount;

    constructor() {
        this.#score = 0;
        this.#missCount = 0;
    }

    shotGoblin() {
        if (!this.isFinished()) {
            this.#score++;
        }
    }

    miss() {
        if (!this.isFinished()) {
            this.#missCount++;
        }
    }

    isFinished() {
        return this.#missCount >= 5;
    }

    get score() {
        return this.#score;
    }

    get missCount() {
        return this.#missCount;
    }
}