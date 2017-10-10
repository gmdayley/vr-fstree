# Create a Scene

## Setup
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, WebVR! - A-Frame</title>
    <meta name="description" content="Hello, WebVR! - A-Frame">
    <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
    </a-scene>
  </body>
</html>
```

## Simple Box
``` html
<a-box color="blue"></a-box>
```

## Position
``` html
<a-box color="blue" position="-1 0.5 -3"></a-box>
```

## Rotation
``` html
<a-box color="blue" position="-1 0.5 -3" rotation="0 45 0"></a-box>
```

## Add more primatives
``` html
<a-sphere color="#EF2D5E" position="0 1.25 -5" radius="1.25"></a-sphere>
<a-cylinder color="#FFC65D"position="1 0.75 -3" radius="0.5" height="1.5"></a-cylinder>
<a-plane color="#7BC8A4" position="0 0 -4" rotation="-90 0 0" width="4" height="4"></a-plane>
```

## Add a Texture
``` html
<a-box
  src="https://cdn.glitch.com/3f8efeb5-db65-47f6-a6a3-f05092186c3f%2Fb870d9ec-1139-44f9-b462-223e4a2c74e7%252Fdirt.jpg?1507255363001" 
  position="-1 0.5 -3" 
  rotation="0 45 0">
</a-box>
```

## Asset system 
``` html
<a-assets>
  <img id="dirt" src="https://cdn.glitch.com/3f8efeb5-db65-47f6-a6a3-f05092186c3f%2Fb870d9ec-1139-44f9-b462-223e4a2c74e7%252Fdirt.jpg?1507255363001">
</a-assets>
```

``` html
<a-box src="#dirt" position="-1 0.5 -3" rotation="0 0 0"></a-box>
```

## Add a sky
``` html
<a-assets>
  <img id="sky" src="https://cdn.glitch.com/3f8efeb5-db65-47f6-a6a3-f05092186c3f%2Fb870d9ec-1139-44f9-b462-223e4a2c74e7%252Fsechelt.jpg?1507255350760">
</a-assets>
```
``` html
<a-sky src="#sky"></a-sky>
```

# Using the Registry 

## Particle System
``` html
<script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
```

``` html
<a-entity position="0 2.25 -15" particle-system="preset: snow"></a-entity>
```

## Environment
``` html
<script src="https://rawgit.com/feiss/aframe-environment-component/master/dist/aframe-environment-component.min.js"></script>
```

``` html
<a-entity environment="preset: forest">
  <a-box src="#dirt" position="-1 0.5 -3" rotation="0 45 0"></a-box>
</a-entity>
```
## Animation

```html
<script src="https://unpkg.com/aframe-animation-component@3.2.1/dist/aframe-animation-component.min.js"></script>
```

```html
<a-entity environment="preset: forest">
  <a-box src="#dirt"
          position="-1 0.5 -3" rotation="0 0 0"
          animation="property: rotation; dur: 1000; to: 0 360 0; loop: true">
  </a-box>
</a-entity>
```
# Javascript

## Query
``` html
<script>
  AFRAME.registerComponent('queryscene', {
    init: function () {
      var sceneEl = document.querySelector('a-scene'); 
      var boxEl = sceneEl.querySelector('a-box')
      console.log(sceneEl);
      console.log(boxEl);
    }
  });
</script>
```

``` html
<a-scene queryscene>
  <a-entity environment="preset: forest">
    <a-box src="https://cdn.glitch.com/3f8efeb5-db65-47f6-a6a3-f05092186c3f%2Fb870d9ec-1139-44f9-b462-223e4a2c74e7%252Fdirt.jpg?1507255363001" 
            position="-1 0.5 -3" rotation="0 0 0"
            animation="property: rotation; dur: 1000; to: 0 360 0; loop: true">
    </a-box>
  </a-entity>
</a-scene>
```

## Create
``` html
<script>
  AFRAME.registerComponent('create', {
    init: function () {
      var sceneEl = document.querySelector('a-scene'); 
      for (var i = 0; i < 50; i++) {
        var boxEl = document.createElement('a-box');
        boxEl.setAttribute('material', {color: '#EF2D5E'});
        boxEl.setAttribute('position', {x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10});
        boxEl.setAttribute('scale', {x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2});
        sceneEl.appendChild(boxEl);
      }
    }
  });
</script>
```

``` html
<a-scene boxes>
  <a-entity environment="preset: forest"></a-entity>
</a-scene>
```

## Modify

```html
<script>
  AFRAME.registerComponent('bluebox', {
    init: function () {
      // Solution for Handling Events.
      var sceneEl = document.querySelector('a-scene'); 
      var boxEl = sceneEl.querySelector('a-box')
      
      boxEl.addEventListener('makeblue', function () {
        boxEl.setAttribute('color', 'blue');  
      });

      setTimeout(()=>{
        boxEl.emit('makeblue');
      }, 3000)
    }
  });
</script>
```

``` html
<a-scene bluebox>
  <a-assets>
    <img id="dirt" src="https://cdn.glitch.com/3f8efeb5-db65-47f6-a6a3-f05092186c3f%2Fb870d9ec-1139-44f9-b462-223e4a2c74e7%252Fdirt.jpg?1507255363001">
  </a-assets>
  <a-entity environment="preset: forest">
    <a-box src="#dirt" 
            position="-1 0.5 -3" rotation="0 0 0"
            animation="property: rotation; dur: 1000; to: 0 360 0; loop: true">
    </a-box>
  </a-entity>
</a-scene>
```

# Interactions

## Create a cursor
``` html
<a-scene>
  <a-box color="#EF2D5E" position="0 1 -4"></a-box>
  <a-camera>
    <a-cursor></a-cursor>
  </a-camera>
  <a-sky color="#333"></a-sky>
</a-scene>
```

## Handling events
``` html
<script>
  AFRAME.registerComponent('handle-events', {
    init: function () {
      var el = this.el;  // <a-box>
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', '#24CAFF');  
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', '#EF2D5E');  
      });
      el.addEventListener('click', function () {
        el.setAttribute('scale', {x: 2, y: 2, z: 2});
      });
    } 
  });
</script>
```

``` html
<a-scene>
  <a-box color="#EF2D5E" position="0 1 -4" handle-events></a-box>
  <a-camera>
    <a-cursor></a-cursor>
  </a-camera>
  <a-sky color="#333"></a-sky>
</a-scene>
```


