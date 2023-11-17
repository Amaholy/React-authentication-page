import React from 'react'

export default function Register(props) {
  return (
    <div className="container card p-4 mt-2 register-container">
      <form onSubmit={props.submit}>
        <h1 className="text-center">Форма регистрации</h1>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            placeholder="Введите имя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            placeholder="Введите почту"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            required
            placeholder="Введите пароль"
          ></input>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-danger">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  )
}
