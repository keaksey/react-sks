// @flow
import PropTypes from 'prop-types'
import { ValidationMap } from 'react'

import Intl from './Intl'

export const I18nAppProviderContextTypes: ValidationMap<any> = {
    I18n: PropTypes.any,
    gqlClient: PropTypes.any
};

export type WithAppProviderProps = {
  I18n: {intl: Intl};
}

export type TranslationDictionary = {
  [key: string]: string | ITranslationDictionary;
}

export type PrimitiveReplacementDictionary = {
  [key: string]: string | number;
}

export type ComplexReplacementDictionary = {
  [key: string]: string | number | React.ReactNode;
}