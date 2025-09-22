//import React from 'react'

import { Toggle } from "./Toggle"

export const Login = ({username, password, handleLogin,handleUsername,handlePassword}) => {

  return (
    <Toggle buttonLabel= 'Show login'>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text"
            value={username}
            name='Username'
            placeholder='Username'
            onChange={handleUsername}
          />
        </div>
        <div className="div">
          <input type="text"
            value={password}
            name='Password'
            placeholder='Password'
            onChange={handlePassword}
          />
        </div>
        <button>
          Login
        </button>
      </form>
    </Toggle>


  )

}
