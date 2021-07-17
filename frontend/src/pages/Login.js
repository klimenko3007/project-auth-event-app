import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch, batch} from 'react-redux'
import { useHistory } from 'react-router-dom'

import {API_URL} from '../reusables/urls'
import user from '../reducers/user'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const accessToken = useSelector(store => store.user.accessToken)

  const onFormSubmit = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }

    fetch(API_URL('login'), options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        batch(() => {
          dispatch(user.actions.setUserName(data.username));
          dispatch(user.actions.setAccessToken(data.accessToken));
          dispatch(user.actions.setUserId(data.id))
          dispatch(user.actions.setErrors(null));
      });
      })
  }

  useEffect(()=> {
    if(accessToken) {
      history.push('/secret')
    }
  }, [accessToken, history])

  return (
    <div>
      This is login page
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
export default Login