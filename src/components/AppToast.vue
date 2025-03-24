<script setup lang="ts">
import { ref } from 'vue'
type Notify = { text: string, type: "success" | "error", id?: number }
const notifyList = ref<Notify[]>([]);
const index = ref(1);
const addNotify = (notify: Notify) => {
    notifyList.value.push({ ...notify, id: index.value++ })
    setTimeout(() => {
        let index = notifyList.value.findIndex((n) => n === notify);
        notifyList.value.splice(index, 1);
    }, 5000)
}
defineExpose({ addNotify })
</script>

<template>
    <Teleport to="body">
        <div class="toast-list" v-if="notifyList.length">
            <div class="toast" v-for="notify in notifyList" :key="notify.id">
                {{ notify.text }}
            </div>
        </div>
    </Teleport>
</template>

<style lang="css" scoped>
.toast-list {
    position: absolute;
    top: 10px;
    left: 10px;
}

.toast {
    background: var(--color-error);
    padding: 10px 20px;
    color: var(--c-white);
    border-radius: 10px;
    margin-bottom: 10px;
}
</style>