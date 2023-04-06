const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.line')

showLine = function (x) {
  line.style.left = x.offsetLeft + 'px'
  line.style.width = x.offsetWidth + 'px'
}
showLine(tabActive)

tabs.forEach(function (tab, index) {
  const pane = panes[index]

  tab.onclick = function () {
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    showLine(this)

    this.classList.add('active')
    pane.classList.add('active')
  }
})
