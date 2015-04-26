import React from 'react'
import FluxComponent from 'flummox/component'
import './frame.amcss!'

import Controls from './controls.jsx!'
import Output from './output.jsx!'

export default class Frame extends React.Component {
  render() {
    return <div className="Frame">
      <header>
        <h1 className="Frame-Logo">
          <span>Greenpeace</span><span>Text</span><span>Macro</span>
        </h1>
      </header>
      <main>
        <Controls></Controls>
        <FluxComponent connectToStores={['message','fonts','colors']}>
          <Output width={500} />
        </FluxComponent>
      </main>
      <footer>
        <p>Code adapted by <a href="http://twitter.com/gyaresu">Gareth</a> and available on <a target="_blank" href="https://github.com/gyaresu/typeslab">GitHub</a></p>
        {' '}
        <p>Original creation by <a href="http://glenmaddern.com" target="_blank">Glen Maddern</a></p>
      </footer>
    </div>
  }
}
