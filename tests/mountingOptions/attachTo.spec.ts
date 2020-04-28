import { mount } from '../../src'

const innerHTML = '<input><span>Hello world</span>'
const outerHTML = `<div id="attach-to">${innerHTML}</div>`
// const ssrHTML = `<div id="attach-to" data-server-rendered="true">${innerHTML}</div>`
const template = '<div id="attach-to"><input /><span>Hello world</span></div>'
const TestComponent = { template }

describe('options.attachTo', () => {
  it('attaches to a provided HTMLElement', () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
    expect(document.getElementById('root')).not.toBeNull()
    expect(document.getElementById('attach-to')).toBeNull()
    const wrapper = mount(TestComponent, {
      attachTo: div
    })

    const root = document.getElementById('root')
    const rendered = document.getElementById('attach-to')
    expect(wrapper.vm.$el.parentNode).not.toBeNull()
    expect(root).not.toBeNull()
    expect(rendered).not.toBeNull()
    expect(rendered.outerHTML).toBe(outerHTML)
    wrapper.unmount()
    expect(document.getElementById('attach-to')).toBeNull()
  })
  it('attaches to a provided CSS selector string', () => {
    const div = document.createElement('div')
    div.id = 'root'
    document.body.appendChild(div)
    expect(document.getElementById('root')).not.toBeNull()
    expect(document.getElementById('attach-to')).toBeNull()
    const wrapper = mount(TestComponent, {
      attachTo: '#root'
    })

    const root = document.getElementById('root')
    const rendered = document.getElementById('attach-to')
    expect(wrapper.vm.$el.parentNode).not.toBeNull()
    expect(root).not.toBeNull()
    expect(rendered).not.toBeNull()
    expect(rendered.outerHTML).toBe(outerHTML)
    wrapper.unmount()
    expect(document.getElementById('attach-to')).toBeNull()
  })

  it.todo('correctly hydrates markup')

  // it('correctly hydrates markup', () => {
  //   expect(document.getElementById('attach-to')).toBeNull()

  //   const div = document.createElement('div')
  //   div.id = 'attach-to'
  //   div.setAttribute('data-server-rendered', 'true')
  //   div.innerHTML = innerHTML
  //   document.body.appendChild(div)
  //   expect(div.outerHTML).toBe(ssrHTML)
  //   const wrapper = mount(TestComponent, {
  //     attachTo: '#attach-to'
  //   })

  //   const rendered = document.getElementById('attach-to')
  //   expect(wrapper.vm.$el.parentNode).not.toBeNull()
  //   expect(rendered).not.toBeNull()
  //   expect(rendered.outerHTML).toBe(outerHTML)
  //   wrapper.unmount()
  //   expect(document.getElementById('attach-to')).toBeNull()
  // })
})
