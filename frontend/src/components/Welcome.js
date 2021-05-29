import React, {useEffect} from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import { API_URL } from '../reusable/urls'

import thoughts from '../reducers/thoughts'
import user from '../reducers/user'

const Welcome = () => {
    const accessToken = useSelector(store => store.user.accessToken)

    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () => {
        batch(() => {
            dispatch(user.actions.setUsername(null))
            dispatch(user.actions.setAccessToken(null))
        })
    }

    useEffect(() => {
        if (!accessToken) {
            history.push('/login')
        }
    }, [accessToken, history]) 

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'accessToken'//added quotations to accessToken
            }
        }

        fetch(API_URL('thoughts'), options) //in the lesson it's done with /signin instead
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    batch(() => {
                        dispatch(thoughts.actions.setThoughts(data.thoughts))
                        dispatch(thoughts.actions.setErrors(null))
                    })
                } else {
                    dispatch(thoughts.actions.setErrors(data))
                }
            })
    }, [accessToken, dispatch])

    return (
        <div>
            <div>
                <iframe src="https://giphy.com/embed/l0MYC0LajbaPoEADu" width="480" height="277" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <p>Congratulation to becoming a member of the coolest crowd there is!</p>
                <p>Don't get confused by the missing content on here. We are cool silently and inactively.</p>
            </div>
            <div>
                <p>Want to log out?</p>
                <h2 className="login-title">Now login to enter the memberarea <a href="/">here</a></h2>
                <button onClick={logout}>Logout</button>
            </div>

        </div>
    )
}

export default Welcome