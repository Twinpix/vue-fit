;(function () {

  var vueFit = {}
  var fit = typeof require === 'function'
    ? require('fit.js')
    : window.fit

  if (!fit) {
    throw new Error('[vue-fit] cannot locate fit.js.')
  }

  // exposed global options
  vueFit.config = {}

  vueFit.install = function (Vue) {

    Vue.directive('fit', {

      inserted: function (el,binding) {
        let options = binding.value || {}
        fit(el,el.parentElement,options)
      }

    })

  }

  if (typeof exports == "object") {
    module.exports = vueFit
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueFit })
  } else if (window.Vue) {
    window.VueFit = vueFit
    Vue.use(vueFit)
  }

})()