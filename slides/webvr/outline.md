Welcome to WebVR

Who has done VR? Cardboard, Oculus, Vive, Gear, Daydream, etc.?
Who knows WebGL? ThreeJS?
Who has done WebVR? Aframe?

What is VR?
  It is a three dimensional simulation/environment in which a person can explore and interact
  3D Graphics, positional sensors for head, sometimes hands or entire body
    3D sound
  
  
Why VR?
  Immersive
  Expensive or dangerous
    Flying
    Surgery
  Fun/Games
  Fantasy
  Novelty
  Exploration
  Empathy/Emotional connection
  
History of VR
  1800s Panoramic paintings, room paintings, murals
  1840-50 Stereoscopic photos, provided depth
  1930 Flight simulators with physical cockpit
  1950 Sensorama, multiple senses: stereo TV screen, stereo sound, joystick, chair, smells, fans
  1960s Computer graphics brought headsets
  Networking brought interacting over distance
    EyePhone 1 $10,000
  1990s Arcade, movies, game consoles
  2007 Google Street View, 3D in 2010
  2010-2016 
    PC-based: Oculus, Playstation VR, HTC Vive, Microsoft Hololens
    Smartphone-based: Cardboard, Daydream, Samsung Gear VR, LG 360 VR
    
VR Technology
  3D model
  split into left/right eye view
  use lenses to project wide view across nearby screen
  handle distortion
  positional tracking
    cameras
    gps
    accelerometer/gyros

What is WebVR?  
Some companies are collaborating, but VR is largely proprietary, requiring specific hardware and
software combinations, expensive headset, download specific app

2014 WebVR started at Mozilla, joined by Google in 2016
WebGL provides 3D graphics, but no standards for sensors or devices
Detect devices and capabilities
Sync position/orientation
Update 3D display
Polyfills for browsers without native support
Enable web paradigms: ubiquity, linking, sharing, accessibility, progressive enhancement

Devices
  Cardboard: Smartphone, 1 button
  Daydream: Android Smartphone, controller (2 buttons, trackpad, motion)
  Samsung VR: Samsung Smartphone, 2 buttons/gestures, controller(3 buttons, trackpad, motion)
  LG 360 VR: tethered to LG smartphone, 6DOF headset
  Playstation VR: tethered to Playstation console, 6DOF, PS controller, or optional 2 controllers
  Oculus Rift: tethered to PC, 6DOF, 2 controllers
  HTC Vive: tethered to PC, 6DOF, 2 controllers
   
  iOS: Cardboard
  Android: Cardboard, Daydream, Samsung, LG
  Playstation: Playstation VR
  PC: Oculus Rift, HTC Vive, etc.
      
Progressive Enhancement
  Web is about being inclusive for everyone, not just supporting certain platforms
  WebVR allows experience to scale up from any WebGL compatible device up to dedicated headsets
  No Headset
    Mobile: positional tracking, touch screen
    Desktop: mouse/keyboard movement, mouse/trackpad click
  Cardboard
    positional tracking, single button click or gaze-based events
  Single Controller or gamepad:
    positional tracking, multiple buttons or trackpad, pointing, 1 hand
  Multiple Controllers, 6 DOF headsets
    positional tracking and movement, 2 hands to point, grab, manipulate

Getting Started with WebVR:
Code
  Three.js
  Babylon.js
  Goo
  Play Canvas
  Unity (C# or JS)

Wysiwyg
  Vizor
  Autodesk Play
  Cl3ver
  Clara.io
  
How to get started with WebVR
  Need some WebGL 3D content, either draw yourself or import a 3D model
    Code
      Three.js
      Babylon.js
      Goo
      Play Canvas
      Unity (C# or JS)
    Wysiwyg
      Vizor
      Autodesk Play
      Cl3ver
      Clara.io
  Load WebVR polyfills if needed
  Detect devices and capabilities
  Enter VR mode
  Render scene
  Using requestAnimationFrame (only at 90 FPS instead of 60) update the scene based on device position info
(show slide with bunches of code)  

OR

Use AFrame
  <a-scene>
  Add objects
  
Compare webvr boilerplate with aframe boilerplate

A-Frame ftw

Coding tutorial
  Hello WebVR
  Basics
    Scenes
    Positioning
    Rotation
    Camera
  Primitives
  Textures/Assets
  Registry
    Animation
    Physics
  Javascript
    Query
    Modify
    Create
    Events
      Gaze
  Models
    Demo?
  Controllers
    Demo
  
Design Considerations
  From Cardboard Design Lab
    Using a reticle
    UI Depth & Eye Strain
    Using Constant Velocity
    Keeping the user grounded
    Maintaining Head Tracking
    Guiding with Light
    Leveraging Scale
    Spatial Audio
    Gaze Cues
    Make it Beautiful
  Designing for Google Cardboard
  
Tree Demo

Summary/QA
  
  
  