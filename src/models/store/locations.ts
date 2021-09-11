import { makeAutoObservable } from 'mobx'
import { locations } from '../api'
import { Location } from '../types/Location'

class Locations {
    list = [] as Location[]
    selected = {} as Location
    total = 0
    constructor() {
        makeAutoObservable(this)
    }
    async getTotal() {
        this.total = await locations.getTotal()
    }
    async getAll(page = 1, pageSize = 20) {
        this.list = [...this.list, ...(await locations.getAll(page, pageSize))]
    }
    async search(options: { name: string; type: string; measurements: string }) {
        this.list = await locations.search({ ...options })
    }
    async getById(id: string) {
        this.selected = await locations.getById(id)
    }
}
export default new Locations()
