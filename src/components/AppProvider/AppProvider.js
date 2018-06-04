// @flow
import React from 'react'
import PropTypes from 'prop-types'

import Intl from './Intl'
import { createI18nContext } from './utils'
import {I18nAppProviderContextTypes, TranslationDictionary} from './types'

export type Props = {
  /** A locale object or array of locale objects that overrides default translations */
  i18n?: TranslationDictionary | TranslationDictionary[],
  gqlClient?: PropTypes.object
};

export type Context = {
    i18n: {intl: Intl;},
    gqlClient: PropTypes.object
};

export default class AppProvider extends React.Component<Props> {
    static childContextTypes = I18nAppProviderContextTypes;
    i18nContext: Context;
    
    constructor(props: Props) {
        super(props);
        this.i18nContext = createI18nContext({
          ...props
        });
    }
    
    componentWillReceiveProps({i18n, gqlClient}: Props) {
        if (i18n !== this.props.i18n) {
          this.i18nContext = createI18nContext({i18n, gqlClient});
        }
    }
    
    getChildContext(): Context {
        return this.i18nContext
    }
    
    render() {
        return React.Children.only(this.props.children);
    }
}