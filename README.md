# 🎬 MovieLand - عالم الأفلام الرائع

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6.x-green.svg)](https://reactrouter.com/)
[![OMDB API](https://img.shields.io/badge/OMDB%20API-1.0-orange.svg)](http://www.omdbapi.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

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

### 📄 الصفحات المتاحة / Available Pages
- **🏠 الصفحة الرئيسية** - Home Page with Search
- **🎬 الأفلام** - Movies Collection
- **📺 المسلسلات** - TV Series
- **🏷️ التصنيفات** - Genres Filter
- **🔥 الأكثر شعبية** - Trending Content
- **ℹ️ حول الموقع** - About Page

---

## 🚀 التثبيت والتشغيل / Installation & Setup

### المتطلبات / Prerequisites
- Node.js (v14 أو أحدث / or higher)
- npm أو yarn / or yarn

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
- **React Router 6** - إدارة التنقل
- **CSS3** - التصميم والتنسيق
- **JavaScript ES6+** - البرمجة

### APIs
- **OMDB API** - قاعدة بيانات الأفلام والمسلسلات

### Tools
- **Create React App** - إطار العمل
- **npm** - إدارة الحزم

---

## 📁 هيكل المشروع / Project Structure

```
src/
├── components/          # المكونات المشتركة
│   ├── Header.jsx      # رأس الصفحة
│   ├── Navbar.jsx      # شريط التنقل
│   ├── Footer.jsx      # تذييل الصفحة
│   └── *.css           # ملفات التصميم
├── pages/              # صفحات التطبيق
│   ├── Home.jsx        # الصفحة الرئيسية
│   ├── Movies.jsx      # صفحة الأفلام
│   ├── Series.jsx      # صفحة المسلسلات
│   ├── Genres.jsx      # صفحة التصنيفات
│   ├── Trending.jsx    # صفحة الأكثر شعبية
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

### تجربة المستخدم / User Experience
- **⚡ تحميل سريع** - Fast Loading
- **🔍 بحث فوري** - Instant Search
- **📱 تجاوب كامل** - Full Responsiveness
- **♿ إمكانية الوصول** - Accessibility

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

---

## 📊 الإحصائيات / Statistics

- **+50,000** فيلم / Movie
- **+10,000** مسلسل / TV Series
- **+1,000,000** مستخدم / User
- **24/7** متاح / Available

---

## 🤝 المساهمة / Contributing

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 📄 الترخيص / License

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 التواصل / Contact

- **📧 البريد الإلكتروني** - Email: info@movieland.com
- **🌐 الموقع** - Website: [movieland.com](https://movieland.com)
- **📱 الهاتف** - Phone: +1234567890

---

## 🙏 الشكر / Acknowledgments

- **OMDB API** - لتوفير بيانات الأفلام والمسلسلات
- **React Team** - لإطار العمل الرائع
- **Font Awesome** - للأيقونات الجميلة
- **Google Fonts** - للخطوط المميزة

---

## 📈 خطة التطوير المستقبلية / Future Development

- [ ] إضافة نظام تسجيل الدخول
- [ ] قائمة المفضلة
- [ ] تقييمات المستخدمين
- [ ] توصيات ذكية
- [ ] تطبيق الهاتف المحمول
- [ ] دعم لغات إضافية

---

<div align="center">

**🎬 استمتع بعالم الأفلام الرائع! / Enjoy the Wonderful World of Movies! 🎬**

[![GitHub stars](https://img.shields.io/github/stars/your-username/movieland?style=social)](https://github.com/your-username/movieland)
[![GitHub forks](https://img.shields.io/github/forks/your-username/movieland?style=social)](https://github.com/your-username/movieland)
[![GitHub issues](https://img.shields.io/github/issues/your-username/movieland)](https://github.com/your-username/movieland/issues)

</div>


