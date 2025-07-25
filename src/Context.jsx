import React, { useContext} from 'react'
import { creatingContext } from './App'
function Context() {

    const countvalue = useContext(count)
    return (
        <div>
            <h1>The total changing in list is:{countvalue} </h1>
        </div>
    )
}

export default Context
