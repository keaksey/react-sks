// @flow
import React from 'react'
import { lowerCase, findIndex } from 'lodash'
import PropTypes from 'prop-types'

import {
    Tabs
} from '@shopify/polaris'

type Props = {
    location: PropTypes.object
};
class MenuTabs extends React.PureComponent<Props>{
    
    handleTabChange = (index, tabs, action) => {
        const { history } = this.props;
        const tab = tabs[index];
        history.push(tab.to);
        
        console.log('ppppp ', tab.to)
    }
    
    generateTab = (url: string, title: string = "", childrens: any = [], parent: any = null) => {
        return {
            content: title,
            accessibilityLabel: 'Account',
            to: `${url}`,
            id: `${lowerCase(title.replace(' ','-'))}`,
            childrens,
            parent
        }
    };
    
    render() {
        const tabs = [
            this.generateTab('/your/account', 'Account'),
            this.generateTab('/your/shop', 'Shop'),
            this.generateTab('/your/profile', 'Public Profile'),
            this.generateTab(
                '/your/products', 
                'Products',[
                    this.generateTab('/your/collections', 'All Products', 3),
                    this.generateTab('/your/collections', 'Collections', 3)
                ]
            )
        ]
        
        const { location } = this.props;
        
        let parentSelected = findIndex(tabs, (o) => {
            let l = o.to.replace('/your/', '');
            return location.pathname.match(l)
        } )
        
        const { childrens } = tabs[parentSelected];
        
        return (
            <div className="tabs-menus">
                <div className="tabs-parent-menu">
                    <Tabs tabs={tabs} selected={parentSelected}
                        onSelect={(index) => this.handleTabChange(index, tabs)}
                    />
                </div>
                <div className="tabs-child-menu">
                    {childrens && childrens.length > 0 &&
                        <Tabs tabs={childrens} selected={0} 
                            onSelect={(index) => this.handleTabChange(index, tabs, 'children')}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default MenuTabs

