import * as React from 'react'
import { replace, merge, get } from 'lodash'
import hoistStatics from 'hoist-non-react-statics'

import {
  I18nAppProviderContextTypes,
  TranslationDictionary,
  PrimitiveReplacementDictionary,
  ComplexReplacementDictionary,
  WithAppProviderProps,
} from '../types'

import Intl from '../Intl'
import {Props as AppProviderProps} from '../AppProvider'

const REPLACE_REGEX = /{([^}]*)}/g;

export function translate(
  id: string,
  translations: TranslationDictionary | TranslationDictionary[] | undefined,
  replacements?: PrimitiveReplacementDictionary | ComplexReplacementDictionary,
) {
  const text = get(translations, id);

  if (!text) {
    return '';
  }

  if (replacements) {
    return replace(text, REPLACE_REGEX, (match: string) => {
      const replacement: string = match.substring(1, match.length - 1);

      if (!replacements.hasOwnProperty(replacement)) {
        throw new Error(
          `No replacement found for key '${replacement}'. The following replacements were passed: ${Object.keys(
            replacements,
          )
            .map((key) => `'${key}'`)
            .join(', ')}`,
        );
      }

      return replacements[replacement];
    });
  }
  
  /* check is has html value  */
  if ( /(<([^>]+)>)/i.test(text) ){
      return (
        <span dangerouslySetInnerHTML={{__html: text}} />
      )
  }
  
  return text;
}

export function withAppProvider<OwnProps>() {
  return function addProvider<C>(
    WrappedComponent:
      | React.ComponentClass<OwnProps & WithAppProviderProps> & C
      | React.SFC<OwnProps & WithAppProviderProps> & C,
  ): React.ComponentClass<OwnProps> & C {
    
    // eslint-disable-next-line react/prefer-stateless-function
    class WithProvider extends React.Component<OwnProps, never> {
      static contextTypes = WrappedComponent.contextTypes
        ? merge(WrappedComponent.contextTypes, I18nAppProviderContextTypes)
        : I18nAppProviderContextTypes;
        
      render() {
        const { I18n, gqlClient } = this.context;
        const I18nContext = {...I18n};

        if (!I18n) {
          throw new Error(
            `The <AppProvider> component is required as of React. See`,
          );
        }

        return <WrappedComponent {...this.props} I18n={I18nContext} gqlClient={gqlClient} />;
      }
    }

    const FinalComponent = hoistStatics(
      WithProvider,
      WrappedComponent
    );
    
    return FinalComponent;
  };
}

export function createI18nContext({i18n, gqlClient }: AppProviderProps = {}) {
  const intl = new Intl(i18n);
  
  return {I18n: { intl }, gqlClient};
}