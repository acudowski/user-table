import type { User } from "@/types/types"
import client from './client.api';

export const mainApi = {
    getUsers: () => client.get<User[]>(`users`),
    getUsersWithError: () => client.get<User[]>(`usersx`),
}