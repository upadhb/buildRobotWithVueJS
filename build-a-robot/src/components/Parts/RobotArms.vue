<template>
    <div>
        <h2>Arms</h2>
        The arms are how your robot will interact with the world.
        They come in a variety of shapes and functions.
        <div>
            <div v-for="(arm, idx) in parts.arms" :key="idx" class="menu__items">
                <div class="description">
                    <div>
                        <h4>{{arm.title}}</h4>
                        <div>{{arm.description}}</div>
                    </div>
                </div>
                <div class="image">
                    <img :src="arm.src" class="menu__items-image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getPartsMixin from '../mixins/get-parts-mixin';

    export default {
        name: 'RobotArms',
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