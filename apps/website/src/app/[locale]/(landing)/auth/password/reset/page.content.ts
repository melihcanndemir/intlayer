import { t, type Dictionary } from 'intlayer';

const resetPasswordContent = {
  key: 'reset-password-page',
  content: {
    title: t({
      en: 'Reset password',
      'en-GB': 'Reset password',
      fr: 'Réinitialiser le mot de passe',
      es: 'Restablecer contraseña',
      de: 'Passwort zurücksetzen',
      ja: 'パスワードをリセット',
      ko: '비밀번호 재설정',
      zh: '重置密码',
      it: 'Reimposta la password',
      pt: 'Redefinir senha',
      hi: 'पासवर्ड रीसेट करें',
      ar: 'إعادة تعيين كلمة المرور',
      ru: 'Сбросить пароль',
    }),
    title2: t({
      en: 'Reset your password',
      'en-GB': 'Reset your password',
      fr: 'Réinitialisez votre mot de passe',
      es: 'Restablezca su contraseña',
      de: 'Setzen Sie Ihr Passwort zurück',
      ja: 'あなたのパスワードをリセット',
      ko: '비밀번호를 재설정하세요',
      zh: '重置您的密码',
      it: 'Reimposta la tua password',
      pt: 'Redefina sua senha',
      hi: 'अपने पासवर्ड को रीसेट करें',
      ar: 'إعادة تعيين كلمة المرور الخاصة بك',
      ru: 'Сбросьте свой пароль',
    }),
    description: t({
      en: 'Enter your email to reset your password.',
      'en-GB': 'Enter your email to reset your password.',
      fr: 'Entrez votre adresse e-mail pour réinitialiser votre mot de passe.',
      es: 'Ingrese su correo electrónico para restablecer su contraseña.',
      de: 'Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen.',
      ja: 'パスワードをリセットするためにメールアドレスを入力してください。',
      ko: '비밀번호를 재설정하려면 이메일을 입력하세요.',
      zh: '输入您的电子邮件以重置密码。',
      it: 'Inserisci la tua email per reimpostare la tua password.',
      pt: 'Digite seu e-mail para redefinir sua senha.',
      hi: 'अपने पासवर्ड को रीसेट करने के लिए अपना ईमेल दर्ज करें।',
      ar: 'أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك.',
      ru: 'Введите вашу электронную почту, чтобы сбросить пароль.',
    }),
  },
} satisfies Dictionary;

export default resetPasswordContent;
