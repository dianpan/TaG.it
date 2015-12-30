import Router from 'ampersand-router'

export default Rounter.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('public page')
  },

  repos () {
    console.log('repo page')
  }
})