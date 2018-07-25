<template>
    <div class="preview">
        <div class="preview-content">
            <div class="top-row">
                <img :src="robot.head.src"/>
            </div>
            <div class="middle-row">
                <img :src="robot.leftArm.src" class="rotate-left"/>
                <img :src="robot.torso.src"/>
                <img :src="robot.rightArm.src" class="rotate-right"/>
            </div>
            <div class="bottom-row">
                <img :src="robot.base.src"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectedRobot',
        props: {
            robot: {
                type: Object,
                required: true,
            }
        }
    }
</script>
<style>
    .preview {
        width: 100%;
        padding: 5px 0;
    }
    .preview-content {
        border: 1px solid #999;
        padding: 5px;
    }
    .preview img {
        width: 50px;
        height: 50px;
    }
    .rotate-right {
        transform: rotate(90deg);
    }
    .rotate-left {
        transform: rotate(-90deg);
    }
</style>