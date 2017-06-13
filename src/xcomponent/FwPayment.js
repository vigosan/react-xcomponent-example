import xcomponent from '../vendors/xcomponent'

window.FwPayment = xcomponent.create({
  tag: 'fw-payment',
  dimensions: {
    width: '100%',
    height: '500px'
  },
  url: {
    local: 'http://localhost:8080'
  },
  defaultEnv: 'local',
  autoResize: true,
  scrolling: true
})
