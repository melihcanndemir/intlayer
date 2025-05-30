import { type Dictionary, t } from 'intlayer';

export const dictionaryFormSchemaContent = {
  key: 'dictionary-form-schema',
  content: {
    requiredErrorName: t({
      en: 'Please enter a key for your dictionary',
      'en-GB': 'Please enter a key for your dictionary',
      fr: 'Veuillez saisir une clef pour votre dictionaire',
      es: 'Por favor, ingrese un clave para su diccionario',
      de: 'Bitte geben Sie einen Schlüssel für Ihr Wörterbuch ein',
      ja: '辞書のキーを入力してください',
      ko: '사전 키를 입력해 주세요',
      zh: '请输入字典的键',
      it: 'Si prega di inserire una chiave per il proprio dizionario',
      pt: 'Por favor, insira uma chave para seu dicionário',
      hi: 'कृपया अपने शब्दकोश के लिए एक कुंजी दर्ज करें',
      ar: 'الرجاء إدخال مفتاح لقاموسك',
      ru: 'Пожалуйста, введите ключ для вашего словаря',
    }),

    invalidTypeErrorName: t({
      en: 'Please enter a valid key for your dictionary',
      'en-GB': 'Please enter a valid key for your dictionary',
      fr: 'Veuillez saisir une clée valide pour votre dictionaire',
      es: 'Por favor, ingrese un clave válido para su diccionario',
      de: 'Bitte geben Sie einen gültigen Schlüssel für Ihr Wörterbuch ein',
      ja: '辞書の有効なキーを入力してください',
      ko: '유효한 사전 키를 입력해 주세요',
      zh: '请输入字典的有效键',
      it: 'Si prega di inserire una chiave valida per il proprio dizionario',
      pt: 'Por favor, insira uma chave válida para seu dicionário',
      hi: 'कृपया अपने शब्दकोश के लिए एक मान्य कुंजी दर्ज करें',
      ar: 'الرجاء إدخال مفتاح صالح لقاموسك',
      ru: 'Пожалуйста, введите действительный ключ для вашего словаря',
    }),

    requiredErrorProjectId: t({
      en: 'Please select a project',
      'en-GB': 'Please select a project',
      fr: 'Veuillez sélectionner un projet',
      es: 'Por favor, seleccione un proyecto',
      de: 'Bitte wählen Sie ein Projekt aus',
      ja: 'プロジェクトを選択してください',
      ko: '프로젝트를 선택해 주세요',
      zh: '请选择一个项目',
      it: 'Si prega di selezionare un progetto',
      pt: 'Por favor, selecione um projeto',
      hi: 'कृपया एक परियोजना चुनें',
      ar: 'الرجاء تحديد مشروع',
      ru: 'Пожалуйста, выберите проект',
    }),

    invalidTypeErrorProjectId: t({
      en: 'Please select a valid project',
      'en-GB': 'Please select a valid project',
      fr: 'Veuillez sélectionner un projet valide',
      es: 'Por favor, seleccione un proyecto válido',
      de: 'Bitte wählen Sie ein gültiges Projekt aus',
      ja: '有効なプロジェクトを選択してください',
      ko: '유효한 프로젝트를 선택해 주세요',
      zh: '请选择一个有效的项目',
      it: 'Si prega di selezionare un progetto valido',
      pt: 'Por favor, selecione um projeto válido',
      hi: 'कृपया एक मान्य परियोजना चुनें',
      ar: 'الرجاء تحديد مشروع صالح',
      ru: 'Пожалуйста, выберите действительный проект',
    }),
  },
} satisfies Dictionary;

export default dictionaryFormSchemaContent;
