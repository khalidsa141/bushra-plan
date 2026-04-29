# نظام متابعة الخطة الاتصالية — بشرى الضيافة
## موسم حج 1447

---

## خطوات النشر (15 دقيقة فقط)

### الخطوة 1 — إعداد Firebase

1. اذهب إلى https://console.firebase.google.com
2. افتح مشروع `bushra-plan`
3. من القائمة الجانبية: **Build → Firestore Database**
   - انقر "Create database"
   - اختر "Start in test mode"
   - اختر أقرب منطقة (مثلاً europe-west)
4. من القائمة الجانبية: **Build → Authentication**
   - انقر "Get started"
   - فعّل **Email/Password**

### الخطوة 2 — نشر قواعد Firestore

1. ثبّت Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
firebase init firestore
```
2. انسخ محتوى `firestore.rules` إلى الملف المُنشأ
3. نشر القواعد:
```bash
firebase deploy --only firestore:rules
```

### الخطوة 3 — النشر على Vercel

**الطريقة الأسهل (بدون كود):**
1. اذهب إلى https://vercel.com وسجّل دخولك بـ GitHub
2. انقر **"Add New → Project"**
3. انقر **"Upload"** وارفع مجلد المشروع كاملاً
4. انقر **Deploy**
5. ستحصل على رابط مثل: `https://bushra-plan.vercel.app`

**أو عبر GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bushra-plan.git
git push -u origin main
```
ثم اربط الـ repo بـ Vercel

---

## أول تسجيل دخول

1. افتح الرابط
2. انقر **"إنشاء حساب"**
3. أول مستخدم يسجل يحصل تلقائياً على دور **Admin**
4. بعدها ادعُ الفريق من **لوحة التحكم**

---

## الصلاحيات

| الدور | عرض | إدخال بيانات | لوحة التحكم |
|-------|-----|--------------|-------------|
| Admin (مدير) | ✅ | ✅ | ✅ |
| Editor (محرر) | ✅ | ✅ | ❌ |
| Viewer (مشاهد) | ✅ | ❌ | ❌ |

---

## التقنيات المستخدمة

- **HTML/CSS/JS** — واجهة المستخدم
- **Firebase Auth** — تسجيل الدخول وإدارة المستخدمين
- **Firebase Firestore** — قاعدة البيانات والمزامنة الفورية
- **Chart.js** — الرسوم البيانية
- **Vercel** — الاستضافة والنشر

---

## هيكل قاعدة البيانات (Firestore)

```
/users/{uid}          — بيانات المستخدمين والأدوار
/plans/{weekKey}      — بيانات المهام الأسبوعية (w3..w12)
/social/{weekKey}     — بيانات المنصات الأسبوعية
/social/baseline      — خط الأساس للمتابعين
/invitations/{email}  — الدعوات المعلقة
```

---

## الدعم والمساعدة

بُني هذا النظام خصيصاً لفريق بشرى الضيافة — موسم حج 1447
