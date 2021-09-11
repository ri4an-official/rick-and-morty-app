import axios from 'axios'
import { Character, Gender, Status } from './types/Character'
import { Account } from './types/Account'
import { Episode } from './types/Episode'
import { Location } from './types/Location'

const api = axios.create({ baseURL: 'http://173.249.20.184:7001/api' })

export const account = {
    login: async (user: { userName: string; password: string }) =>
        (await api.post('/Account/Login', { ...user })).data,
    register: async (user: Account) =>
        (await api.post('/Account/Register', { ...user })).data,
    get: async (userName: string) =>
        (await api.get('/Account/GetProfile', { params: { userName } })).data
            .data as Account,
}

export const characters = {
    getTotal: async () =>
        (
            await api.get('/Characters/GetAll', {
                params: { pageNumber: 1, pageSize: 20 },
            })
        ).data.totalRecords as number,
    getAll: async (pageNumber = 1, pageSize = 20) =>
        (await api.get('/Characters/GetAll', { params: { pageNumber, pageSize } })).data
            .data as Character[],
    getById: async (id: string) =>
        (await api.get('/Characters/GetById', { params: { id } })).data
            .data as Character,
    search: async (options: { name: string; status: Status; gender: Gender }) =>
        (await api.get('/Characters/Filter', { params: { ...options } })).data
            .data as Character[],
}

export const locations = {
    getTotal: async () =>
        (
            await api.get('/Locations/GetAll', {
                params: { pageNumber: 1, pageSize: 20 },
            })
        ).data.totalRecords as number,
    getAll: async (pageNumber = 1, pageSize = 20) =>
        (await api.get('/Locations/GetAll', { params: { pageNumber, pageSize } })).data
            .data as Location[],
    getById: async (id: string) =>
        (await api.get('/Locations/GetById', { params: { id } })).data.data as Location,
    search: async (options: { name: string; type: string; measurements: string }) =>
        (await api.get('/Locations/Filter', { params: { ...options } })).data
            .data as Location[],
}

export const episodes = {
    getTotal: async () =>
        (
            await api.get('/Episodes/GetAll', {
                params: { pageNumber: 1, pageSize: 20 },
            })
        ).data.totalRecords as number,
    getAll: async (pageNumber = 1, pageSize = 20, season = 1) =>
        (
            await api.get('/Episodes/GetAll', {
                params: { pageNumber, pageSize, season },
            })
        ).data.data as Episode[],
    getById: async (id: string) =>
        (await api.get('/Episodes/GetById', { params: { id } })).data.data as Episode,
    search: async (options: { name: string }) =>
        (await api.get('/Episodes/GetByName', { params: { ...options } })).data
            .data as Episode[],
}
