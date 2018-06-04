// @flow
import React from "react"
import { Route, Redirect } from "react-router-dom"

function querystring(name: string, url: string = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);
    
    if (!results) {
        return null;
    }
    
    if (!results[2]) {
        return "";
    }
    
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function UnauthenticatedRoute({ component: C, props: cProps, ...rest }: any) {
  
  return (
        <Route
          {...rest}
          render={(params: any) => (<C {...params} {...cProps} />)}
        />
  );
}

export function AuthenticatedRoute({ component: C, props: cProps, ...rest }: any) {
    const redirect = querystring("redirect");
    
    return (
        <Route
            {...rest}
            render={(params: any) => {
                if ( !cProps.currentUser.isAuthenticated ){
                    return (<Redirect to={`/account/login?next=${redirect}`} />)
                }
                
                return (<C {...params} {...cProps} />)
            }}
        />
    );
}