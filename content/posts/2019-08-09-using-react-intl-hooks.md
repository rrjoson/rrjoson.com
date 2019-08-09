---
date: 2019-08-09
title: 'Using react-intl-hooks'
template: post
thumbnail: '../thumbnails/js.png'
slug: using-react-intl-hooks
categories:
  - Tools
  - JavaScript
tags:
  - i18n
---

### Preparing an example

Let's say you want to internationalize a component that renders the text "Hello World"
```javascript
const Register = props=> {
  return <div>Hello World</div>
}

export default Register;
```

Let's also say that your team decided to use a single approach internationalizing your components and decided to use the HOC pattern from 'react-intl'.

### HOC pattern

```javascript
import { injectIntl } from 'react-intl';

const Register = props => {
  const t = props.intl.formatMessage;

  return <div>{t({ id: 'general.helloWorld' })}</div>
}

export default injectIntl(Register);
```

If you were to use the HOC approach, it would take you 4 steps:


```javascript
// 1. Import injectIntl
import { injectIntl } from 'react-intl';
```

```javascript
// 2. Wrap Register in an HOC
export default injectIntl(Register);
```

```javascript
// 3. Get formatMessage prop
const t = props.intl.formatMessage;
```

```javascript
// 4. Replace Hello World
t({ id: 'general.helloWorld' })
```

### React Hooks pattern
```javascript
import { useFormatMessage } from '@comparaonline/react-intl-hooks';

const Register = props => {
  const t = useFormatMessage();

  return <div>{t('general.helloWorld')}</div>
}

export default Register;
```

However, if we use a react hook from 'react-intl-hooks', it will only take 3 steps:

```javascript
// 1. Import useFormatMessage
import { useFormatMessage } from '@comparaonline/react-intl-hooks';
```

```javascript
// 2. Setup useFormatMessage hook
const t = useFormatMessage();
```

```javascript
// 3. Replace "Hello World"
t('general.helloWorld')
```

## Conclusion

We only a removed single step and might not seem much, but imagine if you have to internationalize a large codebase, it might just save you some time.