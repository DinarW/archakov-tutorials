import React from "react"
import parseDate from "./parseDate"

export default class Profile extends React.Component {
  render() {
    const { name, registredAt } = this.props;
    const correctDate = parseDate(registredAt)
    return (
      <div className='content'>
        <h2>Привет, <b>{name}!</b></h2>
        <p>Дата регистрации: {correctDate}</p>
      </div>
    )
  }
}
