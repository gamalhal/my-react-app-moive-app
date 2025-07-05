# 🤝 دليل المساهمة / Contributing Guide

شكراً لاهتمامك بالمساهمة في مشروع MovieLand! نرحب بجميع المساهمات من المجتمع.

Thank you for your interest in contributing to MovieLand! We welcome all contributions from the community.

---

## 📋 كيفية المساهمة / How to Contribute

### 🐛 الإبلاغ عن الأخطاء / Report Bugs

1. تأكد من أن الخطأ لم يتم الإبلاغ عنه مسبقاً
2. استخدم قالب "Bug Report" عند إنشاء issue جديد
3. وصف الخطأ بالتفصيل مع خطوات إعادة الإنتاج
4. أرفق لقطات شاشة إذا كان ذلك مفيداً

### 💡 اقتراح ميزات جديدة / Suggest New Features

1. استخدم قالب "Feature Request" عند إنشاء issue جديد
2. وصف الميزة المطلوبة بالتفصيل
3. اشرح لماذا ستكون هذه الميزة مفيدة
4. اقترح كيفية تنفيذها إذا أمكن

### 🔧 المساهمة بالكود / Code Contributions

#### إعداد بيئة التطوير / Development Setup

1. **Fork المشروع**
```bash
git clone https://github.com/your-username/movieland.git
cd movieland
```

2. **إنشاء فرع جديد**
```bash
git checkout -b feature/your-feature-name
```

3. **تثبيت التبعيات**
```bash
npm install
```

4. **إعداد متغيرات البيئة**
```bash
echo REACT_APP_OMDB_API_KEY=your_api_key_here > .env
echo REACT_APP_OMDB_API_URL=https://www.omdbapi.com >> .env
```

5. **تشغيل المشروع**
```bash
npm start
```

#### قواعد التطوير / Development Guidelines

##### 📝 قواعد الكود / Code Standards
- استخدم **ES6+** syntax
- اتبع **ESLint** rules
- استخدم **Prettier** للتنسيق
- اكتب **تعليقات واضحة** باللغة العربية أو الإنجليزية

##### 🎨 قواعد التصميم / Design Standards
- استخدم **CSS Variables** للألوان
- اتبع **Mobile-First** approach
- تأكد من **التجاوب** مع جميع الأجهزة
- استخدم **Semantic HTML**

##### 📱 قواعد المكونات / Component Guidelines
- استخدم **Functional Components** مع Hooks
- اتبع **Single Responsibility Principle**
- استخدم **PropTypes** للتحقق من البيانات
- اكتب **JSDoc** comments

#### مثال على إنشاء مكون جديد / Example: Creating a New Component

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './NewComponent.css';

/**
 * وصف المكون باللغة العربية
 * Component description in English
 */
const NewComponent = ({ title, description, onAction }) => {
  return (
    <div className="new-component">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onAction}>Action</button>
    </div>
  );
};

NewComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAction: PropTypes.func.isRequired
};

NewComponent.defaultProps = {
  description: 'Default description'
};

export default NewComponent;
```

#### اختبار التغييرات / Testing Changes

1. **تشغيل الاختبارات**
```bash
npm test
```

2. **فحص الكود**
```bash
npm run lint
```

3. **تنسيق الكود**
```bash
npm run format
```

4. **بناء المشروع**
```bash
npm run build
```

#### إرسال التغييرات / Submitting Changes

1. **Commit التغييرات**
```bash
git add .
git commit -m "feat: add new feature description"
```

2. **Push إلى الفرع**
```bash
git push origin feature/your-feature-name
```

3. **إنشاء Pull Request**
- اذهب إلى GitHub repository
- انقر على "New Pull Request"
- اختر الفرع الخاص بك
- املأ قالب PR

---

## 📝 قواعد Commit Messages / Commit Message Guidelines

استخدم **Conventional Commits** format:

```
type(scope): description

[optional body]

[optional footer]
```

### الأنواع المتاحة / Available Types
- **feat**: ميزة جديدة / new feature
- **fix**: إصلاح خطأ / bug fix
- **docs**: تحديث الوثائق / documentation
- **style**: تغييرات في التصميم / styling changes
- **refactor**: إعادة هيكلة الكود / code refactoring
- **test**: إضافة أو تحديث الاختبارات / adding or updating tests
- **chore**: مهام الصيانة / maintenance tasks

### أمثلة / Examples
```bash
feat(search): add advanced search functionality
fix(navbar): resolve mobile menu display issue
docs(readme): update installation instructions
style(header): improve responsive design
refactor(api): optimize API calls
test(movies): add unit tests for movie components
chore(deps): update dependencies
```

---

## 🏷️ قوالب Issues / Issue Templates

### Bug Report Template
```markdown
## 🐛 وصف الخطأ / Bug Description
[وصف واضح للخطأ]

## 🔄 خطوات إعادة الإنتاج / Steps to Reproduce
1. اذهب إلى...
2. انقر على...
3. لاحظ الخطأ...

## ✅ السلوك المتوقع / Expected Behavior
[ما كان يجب أن يحدث]

## 📱 معلومات النظام / System Information
- المتصفح / Browser: [مثل Chrome 90]
- نظام التشغيل / OS: [مثل Windows 10]
- إصدار React / React Version: [مثل 18.3.1]

## 📸 لقطات شاشة / Screenshots
[إذا كان ذلك مفيداً]
```

### Feature Request Template
```markdown
## 💡 وصف الميزة / Feature Description
[وصف واضح للميزة المطلوبة]

## 🎯 المشكلة التي تحلها / Problem it Solves
[لماذا نحتاج هذه الميزة]

## 💭 الحل المقترح / Proposed Solution
[كيف يمكن تنفيذها]

## 🔄 البدائل / Alternatives
[هل هناك حلول أخرى؟]

## 📋 المهام / Tasks
- [ ] المهمة 1
- [ ] المهمة 2
- [ ] المهمة 3
```

---

## 📞 التواصل / Communication

### قنوات التواصل / Communication Channels
- **GitHub Issues**: للإبلاغ عن الأخطاء واقتراح الميزات
- **GitHub Discussions**: للمناقشات العامة
- **Email**: info@movieland.com للمسائل الخاصة

### اجتماعات المجتمع / Community Meetings
- اجتماعات أسبوعية عبر Zoom
- مناقشات تقنية شهرية
- hackathons ربع سنوية

---

## 🏆 الاعتراف / Recognition

### أنواع المساهمات / Types of Contributions
- **🐛 Bug Reports**: الإبلاغ عن الأخطاء
- **💡 Feature Requests**: اقتراح ميزات جديدة
- **🔧 Code Contributions**: المساهمة بالكود
- **📚 Documentation**: تحسين الوثائق
- **🎨 Design**: تحسينات التصميم
- **🌐 Translation**: الترجمة للغات أخرى

### برنامج الاعتراف / Recognition Program
- **Contributor Badge**: للمساهمين النشطين
- **Hall of Fame**: للمساهمين المميزين
- **Special Thanks**: في README للمساهمين الكبار

---

## 📄 الترخيص / License

بالمساهمة في هذا المشروع، فإنك توافق على أن مساهماتك ستكون مرخصة تحت نفس رخصة المشروع (MIT).

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT).

---

## 🙏 شكر خاص / Special Thanks

شكراً لجميع المساهمين الذين يساعدون في جعل MovieLand أفضل!

Thank you to all contributors who help make MovieLand better!

---

<div align="center">

**🎬 معاً نجعل عالم الأفلام أفضل! / Together we make the world of movies better! 🎬**

</div> 