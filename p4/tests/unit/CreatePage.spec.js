import { expect } from 'chai'
import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import CreatePage from '@/components/main/CreatePage.vue'


describe('CreatePage.vue', () => {
    global.window = {}

    it('renders a create page with the h3 heading ', () => {
        const wrapper = shallowMount(CreatePage, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        const exist = wrapper.find('h4').exists();
        expect(exist).to.equal(true)
        expect(wrapper.text()).to.include('Fill out the form below to create a post.');

    })
})
