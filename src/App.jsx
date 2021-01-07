import React, { Suspense } from 'react'

// import ScrollUp from './components/ScrollUp/ScrollUp'
// import Nav from './components/Nav/Nav'
// import Footer from './components/Footer/Footer'
// import Content from './components/Content'

const ScrollUp = React.lazy(() => import('./components/ScrollUp/ScrollUp'))
const Nav = React.lazy(() => import('./components/Nav/Nav'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const Content = React.lazy(() => import('./components/Content'))


const App = () => {
    
    return (
        <>
            <Suspense fallback={null}><ScrollUp /></Suspense>
            <Suspense fallback={null}><Nav /></Suspense>
            <Suspense fallback={null}><Content /></Suspense>
            <Suspense fallback={null}><Footer /></Suspense>
        </>
    )
}

export default App