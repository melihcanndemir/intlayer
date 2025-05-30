import { t, type Dictionary } from 'intlayer';

const projectConfigDetailsContent = {
  key: 'project-config-detail',
  content: {
    title: t({
      en: 'Project configuration',
      'en-GB': 'Project configuration',
      fr: 'Configuration du projet',
      es: 'Configuración del proyecto',
      de: 'Projektkonfiguration',
      ja: 'プロジェクトの構成',
      ko: '프로젝트 구성',
      zh: '项目配置',
      it: 'Configurazione del progetto',
      pt: 'Configuração do projeto',
      hi: 'प्रोजेक्ट कॉन्फ़िगरेशन',
      ar: 'تكوين المشروع',
      ru: 'Конфигурация проекта',
    }),
    i18nSection: {
      title: t({
        en: 'Internationalization',
        'en-GB': 'Internationalization',
        fr: 'Internationalisation',
        es: 'Internacionalización',
        de: 'Internationalisierung',
        ja: '国際化',
        ko: '국제화',
        zh: '国际化',
        it: 'Internazionalizzazione',
        pt: 'Internacionalização',
        hi: 'अनेक्षांश',
        ar: 'التدويل الدولي',
        ru: 'Интернационализация',
      }),
      localeListTitle: t({
        en: 'Available locales',
        'en-GB': 'Available locales',
        fr: 'Locales disponibles',
        es: 'Locales disponibles',
        de: 'Verfügbare Lokalisierungen',
        ja: '利用可能なロケール',
        ko: '사용 가능한 로케일',
        zh: '可用的地区',
        it: 'Localizzazioni disponibili',
        pt: 'Localizações disponíveis',
        hi: 'उपलब्ध स्थान',
        ar: 'المواقع المتاحة',
        ru: 'Доступные локализации',
      }),
      defaultLocaleTitle: t({
        en: 'Default locale',
        'en-GB': 'Default locale',
        fr: 'Locale par défaut',
        es: 'Locale predeterminada',
        de: 'Standard-Lokalisierung',
        ja: 'デフォルトのロケール',
        ko: '기본 로케일',
        zh: '默认地区',
        it: 'Localizzazione predefinita',
        pt: 'Localização padrão',
        hi: 'डिफ़ॉल्ट स्थान',
        ar: 'الموقع الافتراضي',
        ru: 'Локализация по умолчанию',
      }),
    },

    editorSection: {
      title: t({
        en: 'Editor',
        'en-GB': 'Editor',
        fr: 'Éditeur',
        es: 'Editor',
        de: 'Editor',
        ja: 'エディタ',
        ko: '편집기',
        zh: '编辑器',
        it: 'Editor',
        pt: 'Editor',
        hi: 'संपादक',
        ar: 'المحرر',
        ru: 'Редактор',
      }),
      applicationURL: {
        title: t({
          en: 'Application URL',
          'en-GB': 'Application URL',
          fr: "URL de l'application",
          es: 'URL de la aplicación',
          de: 'Anwendungs-URL',
          ja: 'アプリケーション URL',
          ko: '애플리케이션 URL',
          zh: '应用程序 URL',
          it: "URL dell'applicazione",
          pt: 'URL do aplicativo',
          hi: 'एप्लीकेशन URL',
          ar: 'عنوان URL التطبيق',
          ru: 'URL-адрес приложения',
        }),
        label: t({
          en: "Click to navigate to the application's URL",
          'en-GB': "Click to navigate to the application's URL",
          fr: "Cliquez pour accéder à l'URL de l'application",
          es: 'Haga clic para navegar a la URL de la aplicación',
          de: 'Klicken Sie hier, um zur Anwendungs-URL zu navigieren',
          ja: 'アプリケーション URL に移動するにはクリックしてください',
          ko: '애플리케이션 URL으로 이동하려면 클릭하세요',
          zh: '点击查看应用程序的 URL',
          it: "Clicca per andare all'URL dell'applicazione",
          pt: 'Clique para acessar a URL do aplicativo',
          hi: 'एप्लीकेशन URL पर जाने के लिए क्लिक करें',
          ar: 'انقر للانتقال إلى عنوان URL التطبيق',
          ru: 'Нажмите, чтобы перейти к URL-адресу приложения',
        }),
      },
      cmsURL: {
        title: t({
          en: 'CMS URL',
          'en-GB': 'CMS URL',
          fr: 'URL du CMS',
          es: 'URL del CMS',
          de: 'CMS-URL',
          ja: 'CMS URL',
          ko: 'CMS URL',
          zh: 'CMS URL',
          it: 'URL del CMS',
          pt: 'URL do CMS',
          hi: 'CMS URL',
          ar: 'عنوان URL للمحرك المرئي',
          ru: 'URL-адрес CMS',
        }),
        label: t({
          en: 'Click to navigate to the CMS URL',
          'en-GB': 'Click to navigate to the CMS URL',
          fr: 'Cliquez pour accéder à l’URL du CMS',
          es: 'Haga clic para navegar a la URL del CMS',
          de: 'Klicken Sie hier, um zur CMS-URL zu navigieren',
          ja: 'CMS URLに移動するにはクリックしてください',
          ko: 'CMS URL로 이동하려면 클릭하세요',
          zh: '点击查看CMS URL',
          it: 'Clicca per andare all’URL del CMS',
          pt: 'Clique para acessar a URL do CMS',
          hi: 'क्लिक करें के लिए CMS URL पर जाएं',
          ar: 'انقر للانتقال إلى عنوان URL للمحرك المرئي',
          ru: 'Нажмите, чтобы перейти к URL-адресу CMS',
        }),
      },
    },

    noConfig: {
      message: t({
        en: 'No configuration pushed. Please push your configuration first using the CLI.',
        'en-GB':
          'No configuration pushed. Please push your configuration first using the CLI.',
        fr: "Aucune configuration poussée. Veuillez d'abord pousser votre configuration à l'aide de la CLI.",
        es: 'No hay configuración empujada. Por favor, empuje su configuración primero utilizando la CLI.',
        de: 'Keine Konfiguration hochgeladen. Bitte laden Sie zuerst Ihre Konfiguration über die CLI hoch.',
        ja: 'コンフィグレーションがプッシュされていません。CLIを使用して、最初にコンフィグレーションをプッシュしてください。',
        ko: '설정이 푸시되지 않았습니다. 먼저 CLI를 사용하여 설정을 푸시하세요.',
        zh: '未推送配置。请先使用CLI推送配置。',
        it: 'Nessuna configurazione caricata. Caricare prima la configurazione utilizzando la CLI.',
        pt: 'Nenhuma configuração enviada. Por favor, envie sua configuração primeiro usando a CLI.',
        hi: 'कोई विन्यास पुश्पित नहीं है। कृपया पहले CLI का उपयोग करें से अपने विन्यास पुश्पित करें।',
        ar: 'لا تم تحميل التكوين. يرجى تحميل التكوين الخاص بك أولاً باستخدام CLI.',
        ru: 'Не загружена конфигурация. Пожалуйста, сначала загрузите конфигурацию с помощью CLI.',
      }),
    },
    updateConfig: {
      message: t({
        en: 'You can update your configuration using the CLI.',
        'en-GB': 'You can update your configuration using the CLI.',
        fr: 'Vous pouvez mettre à jour votre configuration en utilisant la CLI.',
        es: 'Puede actualizar su configuración utilizando la CLI.',
        de: 'Sie können Ihre Konfiguration mit der CLI aktualisieren.',
        ja: 'CLI を使用して、構成を更新できます。',
        ko: 'CLI를 사용하여 구성을 업데이트할 수 있습니다.',
        zh: '您可以使用 CLI 更新您的配置。',
        it: 'È possibile aggiornare la configurazione utilizzando la CLI.',
        pt: 'Você pode atualizar sua configuração usando a CLI.',
        hi: 'आप CLI के साथ अपनी विन्यास को अद्यतन कर सकते हैं।',
        ar: 'يمكنك تحديث تكوينك باستخدام CLI.',
        ru: 'Вы можете обновить конфигурацию с помощью CLI.',
      }),
    },
    pushConfigDocLink: {
      text: t({
        en: 'See how to push your configuration',
        'en-GB': 'See how to push your configuration',
        fr: 'Voir comment pousser votre configuration',
        es: 'Ver cómo empujar su configuración',
        de: 'Siehe, wie Sie Ihre Konfiguration hochladen',
        ja: 'コンフィグレーションをプッシュする方法を見る',
        ko: '설정을 푸시하는 방법을 보십시오',
        zh: '查看如何推送您的配置',
        it: 'Vedi come caricare la tua configurazione',
        pt: 'Veja como enviar sua configuração',
        hi: 'अपनी विन्यास कैसे पुश करें देखें',
        ar: 'شاهد كيفية تحميل التكوين الخاص بك',
        ru: 'Посмотрите, как загрузить вашу конфигурацию',
      }),
      label: t({
        en: 'Click to go to the related documentation',
        'en-GB': 'Click to go to the related documentation',
        fr: 'Cliquez pour accéder à la documentation associée',
        es: 'Haga clic para ir a la documentación relacionada',
        de: 'Klicken Sie hier, um zur zugehörigen Dokumentation zu gelangen',
        ja: '関連ドキュメントに移動するにはクリックしてください',
        ko: '관련 문서로 이동하려면 클릭하세요',
        zh: '点击查看相关文档',
        it: 'Clicca per andare alla documentazione correlata',
        pt: 'Clique para acessar a documentação relacionada',
        hi: 'संबंधित दस्तावेज़ीकरण पर जाने के लिए क्लिक करें',
        ar: 'انقر للانتقال إلى الوثائق ذات الصلة',
        ru: 'Нажмите, чтобы перейти к соответствующей документации',
      }),
    },
  },
} satisfies Dictionary;

export default projectConfigDetailsContent;
