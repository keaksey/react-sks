// @flow
import React from "react"
import { Route } from "react-router-dom"

// function querystring(name: string, url: string = window.location.href) {
//     name = name.replace(/[[]]/g, "\\$&");
//     const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
//     const results = regex.exec(url);
    
//     if (!results) {
//         return null;
//     }
    
//     if (!results[2]) {
//         return "";
//     }
    
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

export function UnauthenticatedRoute({ component: C, props: cProps, ...rest }: any) {
  
  return (
        <Route
          {...rest}
          render={(params: any) => (<C {...params} {...cProps} />)}
        />
  );
}