// @flow
import { merge } from 'lodash'
import {en as defaultTranslation} from './../../locales'

import {
    TranslationDictionary,
    PrimitiveReplacementDictionary,
    ComplexReplacementDictionary,
} from './types'

import { translate } from './utils'

export default class Intl {
  constructor(
    translation:
      | TranslationDictionary
      | TranslationDictionary[]
      | undefined,
  ) {
    this.setTranslation(translation);
  }

  setTranslation(
    translation: TranslationDictionary | TranslationDictionary[] | undefined,
  ) {
    const i18n = Array.isArray(translation)
      ? merge({}, ...translation)
      : translation;

    this.translation = i18n
      ? merge({}, defaultTranslation, i18n)
      : defaultTranslation;
  }
  
  translate(
    id: string,
    replacements?:
      | PrimitiveReplacementDictionary
      | ComplexReplacementDictionary,
  ): string {
    return translate(id, this.translation, replacements);
  }
}
