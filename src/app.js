import Router from './router'

window.app = {
  init () {
    this.router = new Rounter()
    this.router.history.start()
  }
}

window.app.init()