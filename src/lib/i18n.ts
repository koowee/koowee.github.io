// No astro:* imports here, so plain `node --test` can load this file.

export type Locale = 'en' | 'fi';
export const DEFAULT_LOCALE: Locale = 'en';

export const ui = {
  en: {
    hero: 'Apps for iPhone, iPad and Mac',
    comingSoon: 'Coming soon',
    onAppStore: 'On the App Store',
    support: 'Support',
    privacy: 'Privacy',
    privacyPolicy: 'Privacy policy',
    contact: 'Contact',
    contactText: 'Questions or feedback? Send an email and you will get a reply in English or Finnish.',
    faq: 'Frequently asked questions',
    lastUpdated: 'Last updated',
    notFoundTitle: 'Page not found',
    backHome: 'Back to the home page',
    apps: 'Apps',
    about: 'About',
    language: 'Language',
    appIcon: 'app icon',
    sitePrivacy: 'Site privacy',
    screenshots: 'Screenshots',
    downloadOnAppStore: 'Download on the App Store',
    supportSubject: 'support',
  },
  fi: {
    hero: 'Sovelluksia iPhonelle, iPadille ja Macille',
    comingSoon: 'Tulossa',
    onAppStore: 'App Storessa',
    support: 'Tuki',
    privacy: 'Tietosuoja',
    privacyPolicy: 'Tietosuojaseloste',
    contact: 'Yhteystiedot',
    contactText: 'Kysyttävää tai palautetta? Lähetä sähköpostia, vastaan suomeksi tai englanniksi.',
    faq: 'Usein kysyttyä',
    lastUpdated: 'Päivitetty',
    notFoundTitle: 'Sivua ei löytynyt',
    backHome: 'Takaisin etusivulle',
    apps: 'Sovellukset',
    about: 'Tietoa',
    language: 'Kieli',
    appIcon: 'sovelluksen kuvake',
    sitePrivacy: 'Sivuston tietosuoja',
    screenshots: 'Kuvakaappaukset',
    downloadOnAppStore: 'Lataa App Storesta',
    supportSubject: 'tuki',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

/** Adds the locale prefix to a locale-less path ('/cadence/' → '/fi/cadence/'). */
export function localizedPath(locale: Locale, path: string): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

/** Strips the locale prefix from a full path ('/fi/cadence/' → '/cadence/'). */
export function stripLocale(path: string): string {
  if (path === '/fi' || path === '/fi/') return '/';
  return path.startsWith('/fi/') ? path.slice(3) : path;
}

/** The same page in the target locale. Pages outside the localized tree (404) go to that locale's home. */
export function counterpartPath(path: string, target: Locale): string {
  if (path.endsWith('.html')) return localizedPath(target, '/');
  return localizedPath(target, stripLocale(path));
}
