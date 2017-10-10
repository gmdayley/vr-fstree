import React, { Component, PropTypes } from 'react'
//import DevTools from './DevTools'
import 'aframe'
import {Animation, Entity, Scene} from 'aframe-react'
import { connect } from 'react-redux'

import Camera from '../components/Camera'
import Cursor from '../components/Cursor'
import Members from './Members'
import VRModeSwitcher from './VRModeSwitcher'

class Wrapper extends Component {
  render() {
    const { vrMode } = this.props

    if (vrMode) {
      return (
        <div>
          <Scene>
        <a-entity position="0 -10 0" environment="preset: starry; seed: 2; lightPosition: 0.0 0.01 -0.5; fog: 0.8; ground: canyon; groundYScale: 18.31; groundTexture: walkernoise; grid: none"></a-entity>
        <a-light type="ambient" color="#FFF" intensity="0.7" position="0 0.0 0.0"></a-light>

        <Camera><Cursor/></Camera>
            <Members/>
            <VRModeSwitcher/>
          </Scene>
        </div>
      )
    } else {
      return (
        <div>
          <VRModeSwitcher/>
          <Members/>
        </div>
      )
    }

  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    vrMode: state.get('vrMode')
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)