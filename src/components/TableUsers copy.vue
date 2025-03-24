<script setup lang="ts">
import { useUserStore } from '@/stores/user.store';
import { mainApi } from '@/api/main.api';
const userStore = useUserStore();


async function fetchUsers() {
    const usersResp = await mainApi.getUsers();
    userStore.setUsers(usersResp.data);
    console.log('tuu');
}

fetchUsers();

// await new Promise((resolve, reject) => {
//     setTimeout(() => { reject('error') }, 2000);

// });


// onMounted(() => {
//     throw 'asd';
//     // await new Promise((resolve, reject) => {
//     //     setTimeout(() => { reject('error') }, 2000);

//     // });
// })
// const getUsers = (async () => {

//     loading.value = true;
//     try {
//         await userStore.fetchUsers();
//         setTimeout(() => { loading.value = false; }, 2000);

//     } catch (error) {
//         loading.value = false;
//         throw error;
//     }
// })();

</script>
<template>
    <div>
        <h1 class="title"> User Table </h1>
        <table>
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
</style>