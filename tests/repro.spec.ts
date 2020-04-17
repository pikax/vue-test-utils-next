import {
  h,
  createApp,
  VNode,
  defineComponent,
  VNodeNormalizedChildren,
  ComponentOptions,
  transformVNodeArgs,
  Plugin,
  Directive,
  Component,
  reactive,
  ComponentPublicInstance
} from 'vue'

const App = {
  render() {
    return h('div', this.$store.state)
  }
}

document.getElementsByTagName('html')[0].innerHTML = ''
const el = document.createElement('div')
el.id = 'app'
document.body.appendChild(el)
const vm = createApp(App)

const mixin = {
  beforeCreate() {
    this.$store = {
      state: 'foo'
    }
  }
}

vm.mixin(mixin)
const app = vm.mount(el)
console.log(document.body.outerHTML)
