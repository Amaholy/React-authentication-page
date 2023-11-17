import React from 'react'

function Verification(props) {
  return (
    <div className="container card p-3 mt-2 register-container">
      <h3>{props.name}</h3>
      <h1>Спасибо, что присоединились к нам.</h1>
      <h3>Подтверждение отправлено на ваш email {props.email}</h3>
    </div>
  )
}

export default Verification
