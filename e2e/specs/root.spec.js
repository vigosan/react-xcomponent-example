import RootPage from '../pageobjects/root.page'

describe('Root page', () => {
  it('shows a nice text message', () => {
    RootPage.open()

    expect(RootPage.message.getText()).to.eq('It Works!')
  })
})
