export default function(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Электронная почта обязательна';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный формат электронной почты';
  }

  if (!values.password) {
    errors.password = 'Пароль обязателен';
  }

  return errors;
}