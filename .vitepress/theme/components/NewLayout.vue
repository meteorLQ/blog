<template>
<div id="cssid" :class="themeMode">
    <Layout/>

</div>
    <div class="theme-select">
        <ul>
            <li
                @click="modeSelect('theme')"
                :class="themeMode == 'theme' ? 'active' : ''"
            >
                ☀️
            </li>
            <li
                @click="modeSelect('theme themeDark')"
                :class="themeMode !== 'theme' ? 'active' : ''"
            >
                🌑
            </li>
        </ul>
    </div>
    <Copyright />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import Copyright from './Copyright.vue'
const { Layout } = DefaultTheme
</script>

<script>
export default {
    updated() {
        this.modeSelect(localStorage.getItem("mode"));
    },
    mounted() {
        this.modeSelect(localStorage.getItem("mode"));
    },
    data() {
        return {
            themeMode: "theme",
        };
    },
    methods: {
        modeSelect(mode) {
            if (!!mode) {
                this.themeMode = mode;
                localStorage.setItem("mode", mode);
                // document
                //     .querySelector(".theme")
                //     .style.setProperty(
                //     "background-color",
                //     this.themeMode === "theme" ? "#fff" : "#0d1117"
                // );
                // document
                //     .querySelector(".nav-bar")
                //     .style.setProperty(
                //     "background-color",
                //     this.themeMode === "theme" ? "#fff" : "#0d1117"
                // );
            }
        },
    }
};
</script>

<style scoped>
.theme-select {
    width: 5rem;
    height: 2rem;
    display: inline-block;
    position: fixed;
    top: 0.7rem;
    right: 0.5rem;
    z-index: 10;
}
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}
.theme-select li {
    flex: 1;
    text-align: center;
    line-height: 2rem;
    cursor: pointer;
    border-radius: 0.5rem 0 0 0.5rem;
}
.theme-select li:nth-child(2n) {
    border-left: 1px solid var(--border-color);
    border-radius: 0 0.5rem 0.5rem 0;
}
.theme-select ul {
    overflow: hidden;
    width: 100%;
    height: 2rem;
    border-radius: 0.5rem;
    display: flex;
    border: 1px solid var(--border-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--title-color);
}

</style>
