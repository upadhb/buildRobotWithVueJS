<template>
    <div v-if="availableParts" class="content">
        <div class="add-to-cart">
            <button class="add-to-cart-button" @click="addToCart()">Add to Cart</button>
            <Accordion>
                <selected-robot :robot="selectedRobot"/>
            </Accordion>
        </div>
        <div class="top-row">
            <part-selector
                    :parts="this.availableParts.heads"
                    position="top"
                    @partSelected="part => selectedRobot.head = part"
            />
        </div>
        <div class="middle-row">
            <part-selector
                    :parts="availableParts.arms"
                    position="left"
                    @partSelected="part => selectedRobot.leftArm = part"
            />
            <part-selector
                    :parts="availableParts.torsos"
                    position="center"
                    @partSelected="part => selectedRobot.torso = part"
            />
            <part-selector
                    :parts="availableParts.arms"
                    position="right"
                    @partSelected="part => selectedRobot.rightArm = part"
            />
        </div>
        <div class="bottom-row">
           <part-selector
                   :parts="availableParts.bases"
                   position="bottom"
                   @partSelected="part => selectedRobot.base = part"
           />
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import PartSelector from '../PartSelector/PartSelector';
import SelectedRobot from '../SelectedRobot/SelectedRobot';
import Accordion from '../Shared/Accordion';

export default {
    name: 'RobotBuilder',
  created() {
    this.getParts();
  },
  beforeRouteLeave(to, from, next) {
    if(this.addedToCart) {
        next(true);
    } else {
        const response = confirm('You haven not added your Robot to cart. Are you sure you want to leave?');
        next(response);
    }
  },
  components: { PartSelector, SelectedRobot, Accordion },
  data() {
    return {
        addedToCart: false,
        selectedRobot: {
            head: {},
            leftArm: {},
            torso: {},
            rightArm: {},
            base: {},
        },
    };
  },
  methods: {
    ...mapActions(
        {
            getParts: 'robots/getParts',
            addRobot: 'robots/addRobotToCart'
        }
    ),
    addToCart() {
        const robot = this.selectedRobot;
        const cost = robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.torso.cost + robot.base.cost;

        this.addRobot(Object.assign({}, robot, {cost}))
            .then(() => this.$router.push('/cart'));
        this.addedToCart = true;
    }
  },
  computed: {
      ...mapState({
          availableParts: state => state.robots.parts
      })
  },
};

</script>

<style lang="scss">
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

    .left img {
        transform: rotate(-90deg);
    }

    .right img {
        transform: rotate(90deg);
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

    .sale {
        color: red;
    }

    .content {
        position: relative;
    }

    .add-to-cart {
        position: absolute;
        right: 30px;
        width: 220px;
        padding: 3px;
        font-size: 16px;
    }

    .add-to-cart-button {
        padding: 10px 20px;
        background-color: #65cc65;
        color: white;
        width: 100%;
        cursor: pointer;

        &:hover {
            background-color: forestgreen;
        }
    }

</style>
