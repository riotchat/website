import i18next from 'i18next';
import NextI18Next from 'next-i18next'

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en-US',
	otherLanguages: ['en-GB', 'cs-CZ'],
	fallbackLng: 'en-US',
	browserLanguageDetection: true
})


export default NextI18NextInstance;

initReactI18next
	.init(i18next);

export function translate(string: any) {
	return i18next.t(string);
}

export var i18loaded = false;
export function loadi18() {
	return i18next.use(NextI18NextInstance)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en-US',
		interpolation: {
			escapeValue: false
		}
	}).then(() => i18loaded = true)
}

export function withTranslation(component: any) {
	if ((process as any).browser) {
		return NextI18NextInstance.withTranslation('common')(component);
	} else {
		return component;
	}
}