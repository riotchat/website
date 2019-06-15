import i18next from 'i18next';
import NextI18Next from 'next-i18next'

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en-GB',
	otherLanguages: ['en-US', 'cs-CZ'],
	browserLanguageDetection: true
})

export default NextI18NextInstance;
export const {
	appWithTranslation,
	withTranslation,
} = NextI18NextInstance;

i18next
	.use(NextI18NextInstance)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en-GB',
		interpolation: {
			escapeValue: false
		}
	});

initReactI18next
	.init(i18next);