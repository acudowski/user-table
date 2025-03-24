<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <header>
        <div class="header-content">
            <div class="bold">HORNELEN IT</div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    border-bottom: 1px solid var(--c-grey-light);
    padding: 10px var(--l-space);
    display: block;
}

.header-content {
    max-width: var(--l-width);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a {
    margin-left: 20px;
}
</style>