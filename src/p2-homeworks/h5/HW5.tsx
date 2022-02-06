import React from 'react'
import Header from './Header'
import Rts from './Rts'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Rts/>
            </HashRouter>
        </div>
    )
}

export default HW5
