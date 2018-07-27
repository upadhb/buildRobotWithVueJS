<template>
    <div>
        <h2>Torsos</h2>
        The torso is the central part of your robot that holds everything
        together. Choosing the right torso will help ensure your robot
        functions well with the parts you choose.
        <div>
            <div v-for="(torso, idx) in parts.torsos" :key="idx" class="menu__items">
                <div class="description">
                    <div>
                        <h4>{{torso.title}}</h4>
                        <div>{{torso.description}}</div>
                    </div>
                </div>
                <div class="image">
                    <img :src="torso.src" class="menu__items-image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getPartsMixin from '../mixins/get-parts-mixin';

    export default {
        name: 'RobotTorsos',
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