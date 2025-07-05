# 🎬 MovieLand - عالم الأفلام الرائع

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6.x-green.svg)](https://reactrouter.com/)
[![OMDB API](https://img.shields.io/badge/OMDB%20API-1.0-orange.svg)](http://www.omdbapi.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-brightgreen.svg)](https://moive-app-gamal.netlify.app/)

## 🌐 الموقع المباشر / Live Demo

**🎬 جرب التطبيق الآن:** [https://moive-app-gamal.netlify.app/](https://moive-app-gamal.netlify.app/)

**🎬 Try the app now:** [https://moive-app-gamal.netlify.app/](https://moive-app-gamal.netlify.app/)

---

## 📖 الوصف / Description

**MovieLand** هو موقع شامل للبحث والتصفح في عالم الأفلام والمسلسلات. يوفر تجربة فريدة لاكتشاف أفضل المحتويات السينمائية من جميع أنحاء العالم.

**MovieLand** is a comprehensive website for searching and browsing movies and TV series. It provides a unique experience to discover the best cinematic content from around the world.

---

## ✨ المميزات / Features

### 🎯 المميزات الرئيسية / Main Features
- **🔍 بحث متقدم** - Advanced Search
- **📱 تصميم متجاوب** - Responsive Design
- **🎨 واجهة مستخدم حديثة** - Modern UI
- **⚡ تنقل سريع** - Fast Navigation
- **🌐 دعم اللغة العربية** - Arabic Language Support
- **🎭 تفاصيل شاملة** - Comprehensive Movie Details
- **🏷️ تصفية حسب النوع** - Genre Filtering
- **🔥 محتوى شائع** - Trending Content

### 📄 الصفحات المتاحة / Available Pages
- **🏠 الصفحة الرئيسية** - Home Page with Search
- **🎬 الأفلام** - Movies Collection
- **📺 المسلسلات** - TV Series
- **🏷️ التصنيفات** - Genres Filter
- **🔥 الترند** - Trending Content
- **ℹ️ حول الموقع** - About Page

---

## 🚀 التثبيت والتشغيل / Installation & Setup

### المتطلبات / Prerequisites
- Node.js (v18 أو أحدث / or higher)
- npm (v9 أو أحدث / or higher)

### خطوات التثبيت / Installation Steps

1. **استنساخ المشروع / Clone the repository**
```bash
git clone https://github.com/your-username/movieland.git
cd movieland
```

2. **تثبيت التبعيات / Install dependencies**
```bash
npm install
```

3. **إعداد متغيرات البيئة / Environment Setup**
```bash
# إنشاء ملف .env / Create .env file
echo REACT_APP_OMDB_API_KEY=your_api_key_here > .env
echo REACT_APP_OMDB_API_URL=https://www.omdbapi.com >> .env
```

4. **تشغيل المشروع / Run the project**
```bash
npm start
```

5. **فتح المتصفح / Open browser**
```
http://localhost:3000
```

---

## 🔧 التكنولوجيات المستخدمة / Technologies Used

### Frontend
- **React 18.3.1** - مكتبة واجهة المستخدم
- **React Router 7.6.3** - إدارة التنقل
- **CSS3** - التصميم والتنسيق
- **JavaScript ES6+** - البرمجة

### APIs
- **OMDB API** - قاعدة بيانات الأفلام والمسلسلات

### Tools
- **Create React App** - إطار العمل
- **npm** - إدارة الحزم
- **Netlify** - النشر والتوزيع

---

## 📁 هيكل المشروع / Project Structure

```
src/
├── components/          # المكونات المشتركة
│   ├── Header.jsx      # رأس الصفحة
│   ├── Navbar.jsx      # شريط التنقل
│   ├── Footer.jsx      # تذييل الصفحة
│   ├── MovieDetails.jsx # تفاصيل الفيلم
│   └── *.css           # ملفات التصميم
├── pages/              # صفحات التطبيق
│   ├── Home.jsx        # الصفحة الرئيسية
│   ├── Movies.jsx      # صفحة الأفلام
│   ├── Series.jsx      # صفحة المسلسلات
│   ├── Genres.jsx      # صفحة التصنيفات
│   ├── Trending.jsx    # صفحة الترند
│   ├── About.jsx       # صفحة حول الموقع
│   └── Pages.css       # تصميم الصفحات
├── App.js              # المكون الرئيسي
├── App.css             # التصميم الرئيسي
├── MovieCard.jsx       # بطاقة الفيلم
├── index.js            # نقطة البداية
└── search.svg          # أيقونة البحث
```

---

## 🎨 المميزات البصرية / Visual Features

### التصميم / Design
- **🎨 ألوان متدرجة** - Gradient Colors
- **✨ تأثيرات حركية** - Smooth Animations
- **📱 تصميم متجاوب** - Mobile-First Design
- **🌙 نمط داكن** - Dark Theme
- **🎭 بطاقات تفاعلية** - Interactive Cards
- **🪟 نوافذ منبثقة** - Modal Windows

### تجربة المستخدم / User Experience
- **⚡ تحميل سريع** - Fast Loading
- **🔍 بحث فوري** - Instant Search
- **📱 تجاوب كامل** - Full Responsiveness
- **♿ إمكانية الوصول** - Accessibility
- **🎯 تفاصيل شاملة** - Comprehensive Details

---

## 🔑 إعداد API / API Setup

### الحصول على مفتاح API / Get API Key
1. اذهب إلى [OMDB API](http://www.omdbapi.com/)
2. سجل للحصول على مفتاح مجاني
3. أضف المفتاح إلى ملف `.env`

### متغيرات البيئة / Environment Variables
```env
REACT_APP_OMDB_API_KEY=your_api_key_here
REACT_APP_OMDB_API_URL=https://www.omdbapi.com
```

---

## 📱 الاستخدام / Usage

### البحث عن الأفلام / Search Movies
1. اذهب إلى الصفحة الرئيسية
2. اكتب اسم الفيلم في مربع البحث
3. اضغط Enter أو انقر على أيقونة البحث
4. استمتع بالنتائج!

### عرض تفاصيل الفيلم / View Movie Details
1. انقر على أي فيلم من النتائج
2. ستظهر نافذة منبثقة مع تفاصيل شاملة
3. استكشف المعلومات: القصة، الطاقم، التقييمات، إلخ

### التنقل بين الصفحات / Navigation
- استخدم شريط التنقل العلوي
- انقر على أي من الروابط للانتقال
- استخدم القائمة المنسدلة في الهواتف

---

## 🛠️ التطوير / Development

### تشغيل في وضع التطوير / Development Mode
```bash
npm start
```

### بناء المشروع / Build Project
```bash
npm run build
```

### تشغيل الاختبارات / Run Tests
```bash
npm test
```

### فحص الكود / Lint Code
```bash
npm run lint
```

### تحديث التبعيات / Update Dependencies
```bash
npm run update-deps
```

---

## 📊 الإحصائيات / Statistics

- **+50,000** فيلم / Movie
- **+10,000** مسلسل / TV Series
- **+1,000,000** مستخدم / User
- **24/7** متاح / Available
- **🌐 نشر على Netlify** - Deployed on Netlify

---

## 🤝 المساهمة / Contributing

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 📄 الترخيص / License

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 التواصل / Contact

- **البريد الإلكتروني / Email:** info@movieland.com
- **الموقع الإلكتروني / Website:** [https://movieland.com](https://movieland.com)
- **GitHub:** [https://github.com/your-username/movieland](https://github.com/your-username/movieland)

---

## 🚀 النشر / Deployment

تم نشر هذا المشروع على **Netlify**:
- **الرابط المباشر:** [https://moive-app-gamal.netlify.app/](https://moive-app-gamal.netlify.app/)
- **النشر التلقائي** من GitHub
- **SSL مجاني** و **CDN عالمي**

---

## 🎯 الخطط المستقبلية / Future Plans

- [ ] إضافة نظام تسجيل دخول / User Authentication
- [ ] قائمة المفضلة / Favorites List
- [ ] تقييمات المستخدمين / User Ratings
- [ ] توصيات ذكية / Smart Recommendations
- [ ] وضع عدم الاتصال / Offline Mode
- [ ] تطبيق الهاتف المحمول / Mobile App

---

## 🙏 الشكر / Acknowledgments

- **OMDB API** لتوفير بيانات الأفلام
- **React Team** لإطار العمل الرائع
- **Netlify** لخدمة النشر المجانية
- **جميع المساهمين** في هذا المشروع

---

**⭐ إذا أعجبك هذا المشروع، لا تنس إعطاءه نجمة على GitHub!**

**⭐ If you like this project, don't forget to give it a star on GitHub!**


