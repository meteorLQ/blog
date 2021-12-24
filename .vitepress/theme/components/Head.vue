<!--
<template>
    <div class="md-header">
        <div class="md-title">{{ pageData.title }}</div>
        <span id="jinrishici-sentence">正在加载今日诗词....</span>
        <div class="md-date">{{ pageData.frontmatter.date }}</div>
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { site, theme } = useData()
const website = theme.value.website
const webTitle = site.value.title
export default{
    setup() {
        const pageData = useData();
        return {
            pageData,
        };
    },
    mounted() {
        // 加载今日诗词


    }
}
</script>

<style>
.md-header {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.md-title {
    font-size: 2rem;
    font-weight: bold;
    color: #353535;
}
.md-date {
    font-size: 1rem;
    font-style: italic;
    color: #aaa;
}
</style>
-->
