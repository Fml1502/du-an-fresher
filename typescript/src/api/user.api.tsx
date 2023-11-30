/* eslint-disable @typescript-eslint/ban-types */

import http from '../utils/http'
import { Users, User } from '../types/user.type'
export const getUsers = (page: number | string, limit: number | string) =>
    http.get<Users>('user', {
        params: {
            _page: page,
            _limit: limit
        }
    })
export const getUser = (id: number | string) =>
    http.get<Users>(`user/${id}`);

export const addUser = (user: Omit<User, "id">) =>
    http.post<Users>("/postUser", user);

export const deleteUser = (id: number | string) =>
    http.delete<{}>(`deleteUser/${id}`);