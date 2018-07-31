import { shallowMount, mount, createLocalVue} from '@vue/test-utils';
import HomePage from '../../src/components/HomePage/HomePage';

import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HomePage, {
        localVue,
        router,
        propsData: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
    expect(wrapper.find('#home-title').text()).toMatch(msg);
  });
});
