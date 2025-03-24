import { ref } from 'vue'
import { defineStore } from 'pinia'
import { mainApi } from '@/api/main.api';
import type { User } from '@/types/types';

export const useUserStore = defineStore('users', () => {
  const users = ref<User[]>([])

  function setUsers(newUsers: User[]) {
    users.value = [...newUsers];
  }
  async function fetchUsers() {
    if (users.value.length) return;
    const usersResp = await mainApi.getUsers();
    setUsers(usersResp.data);
  }

  return { users, fetchUsers, setUsers }
})
