import { makeAutoObservable } from 'mobx'
import { characters } from '../api'
import { Character, Gender, Status } from '../types/Character'

class Characters {
    list = [] as Character[]
    selected = {} as Character
    constructor() {
        makeAutoObservable(this)
    }
    async getAll(page = 1, pageSize = 20) {
        this.list = await characters.getAll(page, pageSize)
    }
    async search(options: { name: string; status: Status; gender: Gender }) {
        this.list = await characters.search({ ...options })
    }
    async getById(id: string) {
        this.selected = await characters.getById(id)
    }
}
export default new Characters()
