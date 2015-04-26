import React from 'react'
import './message-entry.amcss!'

export default class MessageEntry extends React.Component {
  componentWillMount() {
    this.messageActions = this.context.flux.getActions('message')
    this.setValue("I hear you like\nbanners\nGreenpeace\n!so I made you this.\nYou're\nwelcome🖖")
  }
  handleChange(event) {
    this.setValue(event.target.value)
  }
  setValue(value) {
    this.messageActions.changeMessage(value)
    this.setState({value: value})
  }

  render() {
    return <div className='MessageEntry'>
      <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
    </div>
  }
}

MessageEntry.contextTypes = {
  flux: React.PropTypes.object
}
