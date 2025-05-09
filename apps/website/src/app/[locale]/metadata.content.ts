import { t, type Dictionary } from 'intlayer';
import { type Metadata } from 'next';

const metadataContent = {
  key: 'locale-metadata',
  content: {
    title: t({
      en: 'i18n Solution & CMS for React, Next.js, Vue | Intlayer',
      'en-GB': 'i18n Solution & CMS for React, Next.js, Vue | Intlayer',
      fr: 'Solution i18n & CMS pour React, Next.js, Vue | Intlayer',
      es: 'Solución i18n y CMS para React, Next.js, Vue | Intlayer',
      de: 'i18n-Lösung & KI-CMS für React, Next.js, Vue | Intlayer',
      ja: 'React、Next.js、Vue向け i18n CMS | Intlayer',
      ko: 'React, Next.js, Vue용 i18n 솔루션 및 CMS | Intlayer',
      zh: 'React、Next.js、Vue 的 i18n解决方案 CMS | Intlayer',
      it: 'Soluzione i18n e CMS per React, Next.js, Vue | Intlayer',
      pt: 'Solução i18n e CMS para React, Next.js, Vue | Intlayer',
      hi: 'React, Next.js, Vue के लिए i18n समाधान और CMS | Intlayer',
      ar: 'حل i18n و CMS مدعوم بالذكاء الاصطناعي لـ React و Next.js و Vue | Intlayer',
      ru: 'Решение i18n и CMS для React, Next.js, Vue | Intlayer',
    }),

    description: t({
      en: 'Boost your app scalability with Intlayer: an internationalization (i18n) and content management solution powered by AI. Designed for React, Next.js, Vue, Svelte and more.',
      'en-GB':
        'Boost your app scalability with Intlayer: an internationalization (i18n) and content management solution powered by AI. Designed for React, Next.js, Vue, Svelte and more.',
      fr: 'Boostez l’évolutivité de votre application avec Intlayer : une solution d’internationalisation (i18n) et de gestion de contenu propulsée par l’IA. Compatible avec React, Next.js, Vue, Svelte et plus.',
      es: 'Impulsa la escalabilidad de tu aplicación con Intlayer: una solución de internacionalización (i18n) y gestión de contenido impulsada por IA. Diseñada para React, Next.js, Vue, Svelte y más.',
      de: 'Steigern Sie die Skalierbarkeit Ihrer App mit Intlayer: eine Internationalisierungslösung (i18n) und ein KI-gestütztes Content-Management-System. Für React, Next.js, Vue, Svelte und mehr.',
      ja: 'Intlayerでアプリの拡張性を強化：AI搭載の国際化（i18n）およびコンテンツ管理ソリューション。React、Next.js、Vue、Svelteなどに対応。',
      ko: 'Intlayer로 앱 확장성을 높이세요: AI 기반 국제화(i18n) 및 콘텐츠 관리 솔루션. React, Next.js, Vue, Svelte 등 지원.',
      zh: '使用 Intlayer 提升应用可扩展性：一款由 AI 驱动的国际化 (i18n) 与内容管理解决方案。适用于 React、Next.js、Vue、Svelte 等。',
      it: 'Migliora la scalabilità della tua app con Intlayer: una soluzione di internazionalizzazione (i18n) e gestione dei contenuti alimentata dall’IA. Progettata per React, Next.js, Vue, Svelte e altri.',
      pt: 'Aumente a escalabilidade do seu app com o Intlayer: uma solução de internacionalização (i18n) e gestão de conteúdo com IA. Para React, Next.js, Vue, Svelte e mais.',
      hi: 'Intlayer के साथ अपने ऐप की स्केलेबिलिटी बढ़ाएं: एक अंतर्राष्ट्रीयकरण (i18n) और सामग्री प्रबंधन समाधान, जो AI द्वारा संचालित है। React, Next.js, Vue, Svelte आदि के लिए डिज़ाइन किया गया।',
      ar: 'عزز قابلية التوسع لتطبيقك مع Intlayer: حل للتدويل (i18n) وإدارة المحتوى مدعوم بالذكاء الاصطناعي. مصمم لـ React وNext.js وVue وSvelte والمزيد.',
      ru: 'Увеличьте масштабируемость вашего приложения с помощью Intlayer: решение для интернационализации (i18n) и управления контентом на базе ИИ. Поддержка React, Next.js, Vue, Svelte и других.',
    }),

    keywords: t<string[]>({
      en: [
        'translation',
        'localization',
        'multilingual',
        'Internationalization',
        'i18n',
        'Web Development',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Content Management System',
      ],
      fr: [
        'Traduction',
        'Localisation',
        'Multilingue',
        'SEO',
        'Internationalisation',
        'i18n',
        'Développement Web',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Content Management System',
      ],
      es: [
        'Traducción',
        'Localización',
        'Multilingüe',
        'SEO',
        'Internacionalización',
        'i18n',
        'Next.js',
        'Desarrollo Web',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Content Management System',
      ],
      'en-GB': [
        'translation',
        'localisation',
        'multilingual',
        'Internationalization',
        'i18n',
        'Web Development',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Content Management System',
      ],
      de: [
        'Übersetzung',
        'Lokalisierung',
        'Mehrsprachig',
        'SEO',
        'Internationalisierung',
        'i18n',
        'Webentwicklung',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Content-Management-System',
      ],
      it: [
        'Traduzione',
        'Localizzazione',
        'Multilingue',
        'SEO',
        'Internazionalizzazione',
        'i18n',
        'Sviluppo Web',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Sistema di gestione dei contenuti',
      ],
      ja: [
        '翻訳',
        'ローカリゼーション',
        '多言語',
        'SEO',
        '国際化',
        'i18n',
        'ウェブ開発',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'コンテンツ管理システム',
      ],
      ko: [
        '번역',
        '현지화',
        '다국어',
        'SEO',
        '국제화',
        'i18n',
        '웹 개발',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        '콘텐츠 관리 시스템',
      ],
      zh: [
        '翻译',
        '本地化',
        '多语言',
        'SEO',
        '国际化',
        'i18n',
        '网页开发',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        '内容管理系统',
      ],
      pt: [
        'Tradução',
        'Localização',
        'Multilíngue',
        'SEO',
        'Internacionalização',
        'i18n',
        'Desenvolvimento Web',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Sistema de Gestão de Conteúdo',
      ],
      hi: [
        'अनुवाद',
        'स्थानीयकरण',
        'बहुभाषी',
        'एसईओ',
        'अंतर्राष्ट्रीयकरण',
        'i18n',
        'वेब विकास',
        'Next.js',
        'जावास्क्रिप्ट',
        'Vite',
        'React',
        'CMS',
        'सामग्री प्रबंधन प्रणाली',
      ],
      ar: [
        'ترجمة',
        'توطين',
        'متعدد اللغات',
        'SEO',
        'التدويل',
        'i18n',
        'تطوير الويب',
        'Next.js',
        'جافا سكريبت',
        'Vite',
        'React',
        'CMS',
        'نظام إدارة المحتوى',
      ],
      ru: [
        'перевод',
        'локализация',
        'многоязычный',
        'SEO',
        'интернационализация',
        'i18n',
        'веб-разработка',
        'Next.js',
        'JavaScript',
        'Vite',
        'React',
        'CMS',
        'Система управления контентом',
      ],
    }),
    openGraph: {
      title: t({
        en: 'Internationalization (i18n) Next.js | Intlayer',
        fr: 'Internationalisation (i18n) Next.js | Intlayer',
        es: 'Internacionalización (i18n) Next.js | Intlayer',
        'en-GB': 'Internationalization (i18n) Next.js | Intlayer',
        de: 'Internationalisierung (i18n) Next.js | Intlayer',
        it: 'Internazionalizzazione (i18n) Next.js | Intlayer',
        ja: '国際化（i18n）Next.jsが簡単に | Intlayer',
        ko: '국제화 (i18n) Next.js를 쉽게 만드는 방법 | Intlayer',
        zh: '国际化（i18n）Next.js 轻松实现 | Intlayer',
        pt: 'Internacionalização (i18n) Next.js | Intlayer',
        hi: 'अंतर्राष्ट्रीयकरण (i18n) Next.js को आसानी से बनाया गया | Intlayer',
        ar: 'التدويل (i18n) يجعل Next.js سهلًا | Intlayer',
        ru: 'Интернационализация (i18n) Next.js стала простой | Intlayer',
      }),
    },
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;
