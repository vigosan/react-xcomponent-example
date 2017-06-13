import Page from './page'

class RootPage extends Page {
  get message() {
    return browser.element('div#app')
  }

  open() {
    super.open('/')
  }
}

export default new RootPage()
