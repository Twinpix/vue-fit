# vue-fit
fit.js wrapper for Vue 2.0

This is a directive wrapper for [fit.js](http://soulwire.github.io/fit.js/)

## Install

#### CommonJS

- Available through npm as `vue-fit`.

  ``` js
  var VueFit = require('vue-fit')
  Vue.use(VueFit)
  ```

#### Direct include

- You can also directly include it with a `<script>` tag when you have Vue and fit.js already included globally. It will automatically install itself, and will add a global `VueFit`.

## Usage

#### Using the `v-fit` directive

You might want to fit `bar` into `foo` whilst maintaining it's original aspect ratio

``` html
  <div id="foo">
    <div v-fit id="bar"></div>
  </div>  
```

#### Configuring Options

You can set options such as defined for fit.js module.

If you are using the DOM, you can tell fit to run again whenever the window resizes.

``` html
  <div id="foo">
    <div v-fit="{watch: true}" id="bar"></div>
  </div>  
```

You can control how it fits, like this

``` html
  <div id="foo">
    <div v-fit="{cover: true}" id="bar"></div>
  </div>  
```
Or both

``` html
  <div id="foo">
    <div v-fit="{watch: true, cover: true}" id="bar"></div>
  </div>  
```

For alignement, you should use 'center', 'left', right', 'top', 'bottom' values

``` html
  <div id="foo">
    <div v-fit="{hAlign: 'left', vAlign: 'bottom'}" id="bar"></div>
  </div>  
```


