import React, { useContext } from 'react'
import { userContext } from './App'
function Context() {

    const user = useContext(count)
    return (
        <div>
            <h1>The total changing in list is:{user} </h1>
        </div>
    )
}

export default Context
