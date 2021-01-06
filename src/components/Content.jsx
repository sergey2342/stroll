import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Main = React.lazy(() => import('./Main/Main'))
const About = React.lazy(() => import('./About/About'))
const Destinations = React.lazy(() => import('./Destinations/Destinations'))


const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={() => <Suspense fallback={null}><Main /></Suspense>} />
                <Route path="/about" component={() => <Suspense fallback={null}><About /></Suspense>} />
                <Route path="/destinations" component={() => <Suspense fallback={null}><Destinations /></Suspense>} />
            </Switch>
        </>
    );
}

export default Content