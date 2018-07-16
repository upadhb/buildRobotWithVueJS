<template>
    <div>
        <div class="top-row">
            <div class="top part">
                <div class="robot-name">{{selectedRobot.head.title}}</div>
                <img :src="selectedRobot.head.src" title="head"/>
                <button @click="selectPrevious('selectedHeadIndex', selectedHeadIndex, 'heads')" class="prev-selector">&#9668;</button>
                <button @click="selectNext('selectedHeadIndex', selectedHeadIndex, 'heads')" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
                <img :src="selectedRobot.leftArm.src" title="left arm"/>
                <button @click="selectPrevious('selectedLeftArmIndex' ,selectedLeftArmIndex, 'arms')" class="prev-selector">&#9650;</button>
                <button @click="selectNext('selectedLeftArmIndex', selectedLeftArmIndex, 'arms')" class="next-selector">&#9660;</button>
            </div>
            <div class="center part">
                <img :src="selectedRobot.torso.src" title="torso"/>
                <button @click="selectPrevious('selectedTorsoIndex', selectedTorsoIndex, 'torsos')" class="prev-selector">&#9668;</button>
                <button @click="selectNext('selectedTorsoIndex', selectedTorsoIndex, 'torsos')" class="next-selector">&#9658;</button>
            </div>
            <div class="right part">
                <img :src="selectedRobot.rightArm.src" title="right arm"/>
                <button @click="selectPrevious('selectedRightArmIndex', selectedRightArmIndex, 'arms')" class="prev-selector">&#9650;</button>
                <button @click="selectNext('selectedRightArmIndex', selectedRightArmIndex, 'arms')" class="next-selector">&#9660;</button>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
                <img :src="selectedRobot.base.src" title="base"/>
                <button @click="selectPrevious('selectedBaseIndex', selectedBaseIndex, 'bases')" class="prev-selector">&#9668;</button>
                <button @click="selectNext('selectedBaseIndex', selectedBaseIndex, 'bases')" class="next-selector">&#9658;</button>
            </div>
        </div>
    </div>
</template>

<script>
    import availableParts from '../../data/parts';

    function getPreviousValidIndex (index, length) {
        const newIndex = index - 1;
        return newIndex < 0 ? length - 1 : newIndex;
    }

    function getNextValidIndex (index, length) {
        const newIndex = index + 1;
        return newIndex > length - 1 ? 0 : newIndex;
    }

    export default {
        name: 'RobotBuilder',
        data() {
            return {
                availableParts,
                selectedHeadIndex: 0,
                selectedLeftArmIndex: 0,
                selectedRightArmIndex: 0,
                selectedTorsoIndex: 0,
                selectedBaseIndex: 0,
            }
        },
        methods: {
            selectNext(indexType, index, type) {
                this[indexType] = getNextValidIndex(index, this.availableParts[type].length)
            },
            selectPrevious(indexType, index, type) {
                this[indexType] = getPreviousValidIndex(index, this.availableParts[type].length)
            }
        },
        computed: {
            selectedRobot() {
                return {
                    head: availableParts.heads[this.selectedHeadIndex],
                    leftArm: availableParts.arms[this.selectedLeftArmIndex],
                    torso: availableParts.torsos[this.selectedTorsoIndex],
                    rightArm: availableParts.arms[this.selectedRightArmIndex],
                    base: availableParts.bases[this.selectedBaseIndex],
                }
            }
        },
    }
</script>

<style>
    .part {
        position: relative;
        width:165px;
        height:165px;
        border: 3px solid #aaa;
    }
    .part img {
        width:165px;
    }
    .top-row {
        display:flex;
        justify-content: space-around;
    }
    .middle-row {
        display:flex;
        justify-content: center;
    }
    .bottom-row {
        display:flex;
        justify-content: space-around;
        border-top: none;
    }
    .head {
        border-bottom: none;
    }
    .left {
        border-right: none;
    }
    .right {
        border-left: none;
    }
    .left img {
        transform: rotate(-90deg);
    }
    .right img {
        transform: rotate(90deg);
    }
    .bottom {
        border-top: none;
    }
    .prev-selector {
        position: absolute;
        z-index:1;
        top: -3px;
        left: -28px;
        width: 25px;
        height: 171px;
    }
    .next-selector {
        position: absolute;
        z-index:1;
        top: -3px;
        right: -28px;
        width: 25px;
        height: 171px;
    }
    .center .prev-selector, .center .next-selector {
        opacity:0.8;
    }
    .left .prev-selector {
        top: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }
    .left .next-selector {
        top: auto;
        bottom: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }
    .right .prev-selector {
        top: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }
    .right .next-selector {
        top: auto;
        bottom: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }
    .right .next-selector {
        right: -3px;
    }

    .robot-name {
        position: absolute;
        top: -25px;
        text-align: center;
        width: 100%;

    }
</style>