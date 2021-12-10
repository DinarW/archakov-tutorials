import React from "react"
import parseDate from "./parseDate"

export default class Profile extends React.Component {
  render() {
    const correctDate = parseDate(this.props.registredAt)
    return (
      <div className='content'>
        <h2>Привет, <b>{this.props.name}!</b></h2>
        <p>Дата регистрации: {correctDate}</p>
      </div>
    )
  }
}
