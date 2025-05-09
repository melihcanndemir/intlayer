import { t, type Dictionary } from 'intlayer';

const signUpContent = {
  key: 'sign-up-page',
  content: {
    title: t({
      en: 'Sign up',
      fr: 'Inscription',
      es: 'Registrarse',
      de: 'Registrieren',
      ja: 'サインアップ',
      ko: '가입하기',
      zh: '注册',
      it: 'Registrati',
      pt: 'Cadastre-se',
      hi: 'साइन अप करें',
      ar: 'سجل',
      ru: 'Зарегистрироваться',
      'en-GB': 'Sign up',
    }),
    title2: t({
      en: 'Create an account',
      fr: 'Créer un compte',
      es: 'Crear una cuenta',
      de: 'Ein Konto erstellen',
      ja: 'アカウントを作成',
      ko: '계정 만들기',
      zh: '创建账户',
      it: 'Crea un account',
      pt: 'Criar uma conta',
      hi: 'खाता बनाएं',
      ar: 'إنشاء حساب',
      ru: 'Создать аккаунт',
      'en-GB': 'Create an account',
    }),
    description: t({
      en: 'Enter your email and password to create an account.',
      fr: 'Entrez votre adresse e-mail et votre mot de passe pour créer un compte.',
      es: 'Ingrese su correo electrónico y contraseña para crear una cuenta.',
      de: 'Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein, um ein Konto zu erstellen.',
      ja: 'アカウントを作成するには、メールアドレスとパスワードを入力してください。',
      ko: '계정을 만들려면 이메일과 비밀번호를 입력하세요.',
      zh: '输入您的电子邮件和密码以创建一个账户。',
      it: 'Inserisci la tua email e la password per creare un account.',
      pt: 'Digite seu email e senha para criar uma conta.',
      hi: 'एक खाता बनाने के लिए अपना ईमेल और पासवर्ड दर्ज करें।',
      ar: 'أدخل بريدك الإلكتروني وكلمة المرور لإنشاء حساب.',
      ru: 'Введите свой адрес электронной почты и пароль, чтобы создать аккаунт.',
      'en-GB': 'Enter your email and password to create an account.',
    }),
  },
} satisfies Dictionary;

export default signUpContent;
