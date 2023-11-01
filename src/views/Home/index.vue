<script setup lang="ts">
import apis from '@/apis';
apis.kv.get();
</script>

<template>
    <div id="view">Hello World!</div>
</template>

<style lang="scss">
#view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    color: #fff;
    font-size: 10vw;
}
</style>
