<template>
    <div>
        <h2>Heads</h2>
        The head is where the brain of your robot will reside. Heads have
        different capabilities so be sure to choose the one that fits your needs.
        <div>
            <div v-for="(head, idx) in parts.heads" :key="idx" class="menu__items">
                <div class="description">
                    <div>
                        <h4>{{head.title}}</h4>
                        <div>{{head.description}}</div>
                    </div>
                </div>
                <div class="image">
                    <img :src="head.src" class="menu__items-image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getPartsMixin from '../mixins/get-parts-mixin';

    export default {
        name: 'RobotHeads',
        mixins: [getPartsMixin],
    };
</script>

<style lang="scss">
    .menu__items {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgrey;

        &-image {
            height: 80px;
        }
    }

    .image {
        padding: 10px 50px;
    }
</style>