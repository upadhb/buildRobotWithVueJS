<template>
    <div>
        <h2>Bases</h2>
        The Base is critical to the mobility of your robot. Be
        sure to choose a base that will work well with the terrain
        where your robot needs to operate.
        <div>
            <div v-for="(base, idx) in parts.bases" :key="idx" class="menu__items">
                <div class="description">
                    <div>
                        <h4>{{base.title}}</h4>
                        <div>{{base.description}}</div>
                    </div>
                </div>
                <div class="image">
                    <img :src="base.src" class="menu__items-image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getPartsMixin from '../mixins/get-parts-mixin';

    export default {
        name: 'RobotBases',
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