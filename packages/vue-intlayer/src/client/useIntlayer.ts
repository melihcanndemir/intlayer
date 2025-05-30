import type { LocalesValues } from '@intlayer/config/client';
import { DictionaryKeys } from '@intlayer/core';
import { computed, inject } from 'vue';
// @ts-ignore intlayer declared for module augmentation
import type { IntlayerDictionaryTypesConnector } from 'intlayer';
import { getIntlayer } from '../getIntlayer';
import { DeepTransformContent } from '../plugins';
import { computedProxy } from './computedProxy';
import { INTLAYER_SYMBOL, IntlayerProvider } from './installIntlayer';

/**
 * On the client side, Hook that picking one dictionary by its key and return the content
 *
 * If the locale is not provided, it will use the locale from the client context
 */
export const useIntlayer = <T extends DictionaryKeys>(
  key: T,
  locale?: LocalesValues
): DeepTransformContent<IntlayerDictionaryTypesConnector[T]['content']> => {
  const intlayer = inject<IntlayerProvider>(INTLAYER_SYMBOL);
  const localeTarget = computed(() => locale ?? intlayer?.locale?.value);

  // one computed that fetches the raw dictionary
  const content = computed(() => getIntlayer(key, localeTarget.value));

  // wrap it with the proxy so every field is reactive
  return computedProxy(content);
};
