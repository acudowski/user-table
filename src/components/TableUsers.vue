<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user.store';
import { mainApi } from '@/api/main.api';
const userStore = useUserStore();
const loading = ref(true);
onMounted(async () => {
    try {
        await userStore.fetchUsers();
        loading.value = false;
    } catch (error) {
        loading.value = false;
        console.log(error)
        throw error;
    }
})

const showError = async () => {
    await mainApi.getUsersWithError();
}
</script>

<template>
    <div>
        <div class="title-bar">
            <h1 class="title"> User Table </h1>
            <div class="btn" @click="showError">wywołaj request z błędem</div>
        </div>
        <table v-if="!loading">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>website</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userStore.users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.company?.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.website }}</td>
                    <td>{{ user.address.city }}</td>
                </tr>
            </tbody>
        </table>
        <div class="loader" v-if="loading">Pobieranie danych ...</div>

    </div>
</template>

<style lang="css" scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    text-align: left;
    border: 1px solid var(--c-grey);
    padding: 10px 16px;
}

th {
    background: var(--c-grey-s-light);
}

.title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
</style>