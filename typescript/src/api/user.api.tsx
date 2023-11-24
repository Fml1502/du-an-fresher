import http from '../utils/http'
import { Users } from '../types/user.type'
export const getUsers = (page: number | string, limit: number | string) =>
    http.get<Users>('user', {
        params: {
            _page: page,
            _limit: limit
        }
    })