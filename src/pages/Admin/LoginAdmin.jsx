import React from 'react'

const LoginAdmin = () => {
  return (
    <div id="content">
        <h1>Welcome!</h1>
        <form action="" method="get">
            <div className="input-bar">
                <label for="name">username</label>
                <input type="text" id="name" className="input" />
                <box-icon name='user'></box-icon>
            </div>
            <div className="input-bar">
                <label for="password">password</label>
                <input type="password" id="password" className="input" />
                <box-icon name='lock-alt' ></box-icon>
            </div>
        </form>
        <button type="submit" id="btn">Login</button>
    </div>
  )
}

export default LoginAdmin