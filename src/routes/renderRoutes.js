import React from 'react'
import { Route} from 'react-router-dom'
import {} from './routesMap';


export default routes => routes.map((route, i) => <Route key={i} { ...route }></Route>)


/*
const routes = ()=>(
    <Router>
        {routes.map((route, i) => <Route key={i} {...route}/>)}
    </Router>
)

export default routes;
*/
