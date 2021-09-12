import { makeAutoObservable } from 'mobx'
import { characters } from '../api'
import { Character, Gender, Status } from '../types/Character'

class Characters {
    list = [] as Character[]
    selected = {} as Character
    total = 0
    constructor() {
        makeAutoObservable(this)
    }
    async getTotal() {
        this.total = await characters.getTotal()
    }
    async getAll(page = 1, pageSize = 15) {
        this.list = [...this.list, ...(await characters.getAll(page, pageSize))]
        this.list.forEach(
            (ch, ind) =>
                this.list.filter((ch2) => ch2.id === ch.id).length > 1 &&
                this.list.splice(ind, 1)
        )
    }
    async search(options: { name: string; status: Status; gender: Gender }) {
        this.list = await characters.search({ ...options })
    }
    async getById(id: string) {
        this.selected = await characters.getById(id)
    }
}
export default new Characters()
