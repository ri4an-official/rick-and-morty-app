import { makeAutoObservable } from 'mobx'
import { episodes } from '../api'
import { Episode } from '../types/Episode'

class Episodes {
    list = [] as Episode[]
    selected = {} as Episode
    constructor() {
        makeAutoObservable(this)
    }
    async getAll(page = 1, pageSize = 20) {
        this.list = await episodes.getAll(page, pageSize)
    }
    async search(options: { name: string }) {
        this.list = await episodes.search({ ...options })
    }
    async getById(id: string) {
        this.selected = await episodes.getById(id)
    }
}
export default new Episodes()
