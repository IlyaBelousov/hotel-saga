import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Login} from "../../features/f1-login/f1-ui/Login";
import {Page404} from "../c2-page404/Page404";
import {Hotels} from "../../features/f2-hotels/f2-ui/Hotels";

// export const LOGIN = '/login';
// export const HOTELS = '/';
// export const PAGE_NOT_FOUND = '*';
export const PATH = {
    MAIN: '/',
    LOGIN: '/login',
    PAGE_NOT_FOUND: '*'
}

export const Routes = () => {
    return <Switch>
        <Route path={PATH.LOGIN} render={() => <Login/>}/>
        <Route path={PATH.MAIN} exact render={() => <Hotels/>}/>
        <Route path={PATH.PAGE_NOT_FOUND}
               render={() => <Page404/>}
        />
    </Switch>
};

