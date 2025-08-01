# Angular SSR Project with Built-in i18n

Цей проект демонструє використання Angular 19 з Server-Side Rendering (SSR) та вбудованою системою інтернаціоналізації (i18n).

## Особливості

- ✅ **Angular 19** з найновішими можливостями
- ✅ **Server-Side Rendering (SSR)** для кращого SEO
- ✅ **Static Site Generation (SSG)** з пререндерингом
- ✅ **Built-in i18n** підтримка української та англійської мов
- ✅ **Signals** для управління станом
- ✅ **Standalone Components** архітектура
- ✅ **TypeScript** з суворими типами
- ✅ **SCSS** для стилізації
- ✅ **ESLint + Prettier** для якості коду

## Швидкий старт

### Встановлення залежностей

```bash
npm install
```

### Розробка

```bash
npm start
```

Додаток буде доступний за адресою `http://localhost:4200`

### Збірка

#### Звичайна збірка (тільки англійська)

```bash
npm run build
```

#### Збірка з локалізацією (англійська + українська)

```bash
npm run build:i18n
```

#### SSR збірка з локалізацією

```bash
npm run build:ssr:i18n
```

#### Статична збірка з локалізацією

```bash
npm run build:static:i18n
```

### Запуск SSR сервера

```bash
npm run serve:ssr
```

### Витяг повідомлень для локалізації

```bash
npm run extract-i18n
```

## Структура проекту

```
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   └── contact/
│   ├── shared/
│   │   └── components/
│   │       └── nav-bar/
│   └── app.component.ts
├── assets/
│   ├── icons/
│   └── styles/
├── locale/
│   ├── messages.xlf      # Англійська (джерельна мова)
│   └── messages.uk.xlf   # Українська
└── main.ts
```

## Локалізація

Проект використовує Angular built-in i18n систему:

### Додавання нових повідомлень

1. Додайте атрибут `i18n` до HTML елементів:

```html
<h1 i18n="@@home.title">Welcome</h1>
<p i18n="@@home.description">Description</p>
```

2. Витягніть повідомлення:

```bash
npm run extract-i18n
```

3. Додайте переклади в `src/locale/messages.uk.xlf`

### Доступні мови

- **Англійська (en)** - джерельна мова
- **Українська (uk)** - перекладена мова

### URL структура

- **Англійська (за замовчуванням)**: `/`, `/contact`
- **Українська**: `/ua/`, `/ua/contact`

## Скрипти

| Команда                     | Опис                              |
| --------------------------- | --------------------------------- |
| `npm start`                 | Запуск в режимі розробки          |
| `npm run build`             | Збірка (тільки англійська)        |
| `npm run build:i18n`        | Збірка з локалізацією             |
| `npm run build:ssr:i18n`    | SSR збірка з локалізацією         |
| `npm run build:static:i18n` | Статична збірка з локалізацією    |
| `npm run serve:ssr`         | Запуск SSR сервера                |
| `npm run extract-i18n`      | Витяг повідомлень для локалізації |

## Розгортання

### Статичне розгортання

```bash
npm run deploy:static:i18n
```

### SSR розгортання

```bash
npm run deploy:ssr:i18n
```

## Технології

- **Angular 19** - фреймворк
- **Angular SSR** - серверний рендеринг
- **Angular i18n** - вбудована локалізація
- **TypeScript** - типізація
- **SCSS** - стилізація
- **Signals** - управління станом
- **Standalone Components** - архітектура

## Переваги Angular built-in i18n

1. **Кращий SEO** - повідомлення рендеряться на сервері
2. **Немає FOUT** - немає затримок завантаження перекладів
3. **Кращий performance** - менше JavaScript коду
4. **Автоматичне визначення мови** - на основі URL
5. **Пререндеринг** - статичні файли для кожної мови
6. **Type safety** - перевірка типів для повідомлень

## Міграція з ngx-translate

Проект був мігрований з ngx-translate на Angular built-in i18n:

### Що було змінено:

- ✅ Видалено `@ngx-translate/core` та `@ngx-translate/http-loader`
- ✅ Замінено `translate` pipe на `i18n` атрибути
- ✅ Оновлено конфігурацію Angular для підтримки i18n
- ✅ Створено XLF файли для локалізації
- ✅ Додано скрипти для збірки з різними мовами

### Переваги міграції:

- 🚀 Кращий performance
- 🔍 Кращий SEO
- 📦 Менший розмір бандла
- 🛡️ Type safety
- ⚡ Немає затримок завантаження
