import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Main = React.lazy(() => import('./Main/Main'))
const About = React.lazy(() => import('./About/About'))
const Destinations = React.lazy(() => import('./Destinations/Destinations'))
const Contact = React.lazy(() => import('./Contact/Contact'))
const Blog = React.lazy(() => import('./Blog/Blog'))


const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={() => <Suspense fallback={null}><Main /></Suspense>} />
                <Route exact path="/about" component={() => <Suspense fallback={null}><About /></Suspense>} />
                <Route exact path="/destinations" component={() => <Suspense fallback={null}><Destinations /></Suspense>} />
                <Route exact path="/contact" component={() => <Suspense fallback={null}><Contact /></Suspense>} />
                <Route path="/blog" component={() => <Suspense fallback={null}><Blog /></Suspense>} />
                <Route path="*" component={() => <Suspense fallback={null}><div>404 Not Found</div></Suspense>} />
            </Switch>
        </>
    )
}

export default Content