import axios from 'axios'
import { Character, Gender, Status } from '../models/types/Character'
import { Account } from './types/Account'
import { Episode } from './types/Episode'
import { Location } from './types/Location'

const api = axios.create({ baseURL: 'http://173.249.20.184:7001/api' })

export const account = {
    login: (user: { userName: string; password: string }) =>
        api.post('/Account/Login', { ...user }),
    register: (user: Account) => api.post('/Account/Register', { ...user }),
}

export const characters = {
    getAll: async (page = 1, pageSize = 20) =>
        (await api.get('/Character/GetAll', { params: { page, pageSize } })).data
            .data as Character[],
    getById: async (id: number) =>
        (await api.get('/Character/GetById', { params: { id } })).data
            .data as Character,
    search: async (options: { name: string; status: Status; gender: Gender }) =>
        (await api.get('/Character/Filter', { params: { ...options } })).data
            .data as Character[],
}

export const locations = {
    getAll: async (page = 1, pageSize = 20) =>
        (await api.get('/Location/GetAll', { params: { page, pageSize } })).data
            .data as Location[],
    getById: async (id: number) =>
        (await api.get('/Location/GetById', { params: { id } })).data.data as Location,
    search: async (options: { name: string; type: string; measurements: string }) =>
        (await api.get('/Character/Filter', { params: { ...options } })).data
            .data as Location[],
}

export const episodes = {
    getAll: async (page = 1, pageSize = 20) =>
        (await api.get('/Episode/GetAll', { params: { page, pageSize } })).data
            .data as Episode[],
    getById: async (id: number) =>
        (await api.get('/Episode/GetById', { params: { id } })).data.data as Episode,
    search: async (options: { name: string }) =>
        (await api.get('/Episode/GetByName', { params: { ...options } })).data
            .data as Episode[],
}
