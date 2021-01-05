import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './Main/Main'
import About from './About/About'

const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
            </Switch>
        </>
    );
}

export default Content