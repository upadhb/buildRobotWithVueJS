<template>
    <div>
        <slot v-if="open"/>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
        data() {
            return {
                open: true,
            }
        }
    }
</script>

<style scoped>
    .header {
        background-color: #cac6c6;
        padding: 7px;
        cursor: pointer;
        text-align: center;
    }
</style>