<script setup lang="ts">
import { onErrorCaptured, ref, useTemplateRef } from 'vue';
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import AppToast from './components/AppToast.vue';
import { AxiosError } from 'axios';

const errorStatus = ref<number | null | undefined>(null);
const toast = useTemplateRef('toast');

onErrorCaptured((error) => {
  if (error instanceof AxiosError) {
    errorStatus.value = error?.status
    toast.value?.addNotify({ text: `Wystąpił błąd ${errorStatus.value}`, type: "error" });
  }
});

</script>

<template>
  <Suspense>
    <div class="container">
      <AppToast ref="toast" />
      <TheHeader />
      <main>
        <div class="main-contaier">
          <RouterView />
        </div>
      </main>
      <TheFooter />
    </div>
  </Suspense>
</template>

<style lang="css" scoped>
.container {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main {
  padding: 20px var(--l-space);
  flex-grow: 1;
}

.main-contaier {
  max-width: var(--l-width);
  margin: auto;
}
</style>