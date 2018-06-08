// @flow
import React from 'react'
import { Button, Link } from './../'

class Boot extends React.Component<{}> {
    
    render() {
        
        return (
            <div>
                hello world Boot
                <Button color="blue">Click Me</Button>
                <Link to="/shop/products/product-demo">
                    Go to product
                </Link>
            </div>
        )
    }
}

export default Boot

