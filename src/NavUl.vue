<template>
    <div class="d-flex">
        <ul v-for="(nav, index) in navs" :key="index" class="justify-content-center align-items-center gap-1">
            <a class="m-0 text-uppercase d-flex fs-5">{{ nav.name }}</a>
        </ul>
    </div>
</template>

<script>
import {navUl} from './data'
    export default {
        name: 'NavUl',
        data() {
            return {
                navs: navUl,
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
    list-style: none;
    gap:10px;
    margin:0;
    
    a {
        text-decoration: none;
        color:red;
        font-size: bold;
    }
    }
</style>