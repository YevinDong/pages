<template>
    <KeepAlive>
        <RouterView v-if="$route.meta.keepAlive" :key="$route.path" />
    </KeepAlive>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
</template>
<style lang="scss">
#app {
    font-size: 40px;
}
</style>
