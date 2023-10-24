import { definePluginModule } from './utils/plugin'
import InkMdeVue from './views/InkMde.vue'
// @ts-ignore
export default definePluginModule({
  name: 'Ink Editor',
  routers: [
    {
      path: '/ink-mde',
      name: 'Ink Editor',
      component: InkMdeVue
    }
  ],
  author: 'Hilary Liu',
  description: '一个自定义的编辑器，基于Ink-mde',
  bg: 'https://aifengliu.top/upload/Ink-mde.png',
  components: [],
  entryPoiniter: {
    beforeAppMounted: () => {
      console.log('beforeAppMounted')
    }
  }
})
