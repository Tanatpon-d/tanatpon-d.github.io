# Deploy to GitHub Pages Instructions

## ขั้นตอนการ Deploy

### 1. สร้าง GitHub Repository
1. ไปที่ https://github.com/new
2. สร้าง repository ใหม่ชื่อ `tanatpon-d.github.io` 
   - **สำคัญ**: ชื่อต้องเป็น `username.github.io` เท่านั้น
3. เลือก **Public** repository
4. **ไม่ต้อง** เพิ่ม README, .gitignore หรือ license

### 2. เชื่อมต่อ Repository
หลังจากสร้าง repository แล้ว รันคำสั่งนี้:

```bash
# เพิ่ม remote repository
git remote add origin https://github.com/tanatpon-d/tanatpon-d.github.io.git

# Push code ไปยัง main branch
git branch -M main
git push -u origin main
```

### 3. Deploy ไปยัง GitHub Pages
รันคำสั่ง deploy:

```bash
npm run deploy
```

### 4. ตั้งค่า GitHub Pages (ถ้าจำเป็น)
1. ไปที่ Settings ของ repository
2. เลือก Pages จากเมนูด้านซ้าย
3. ตรวจสอบว่า Source เป็น "Deploy from a branch"
4. Branch ควรเป็น `gh-pages` และ folder เป็น `/ (root)`

### 5. เข้าถึงเว็บไซต์
หลังจาก deploy สำเร็จ (รอประมาณ 2-5 นาที) เว็บไซต์จะเข้าถึงได้ที่:
https://tanatpon-d.github.io

## คำสั่งที่ใช้บ่อย

### อัพเดทเว็บไซต์
```bash
# แก้ไขโค้ด
# commit การเปลี่ยนแปลง
git add .
git commit -m "Update portfolio"
git push

# Deploy ใหม่
npm run deploy
```

### รัน Development Server
```bash
npm start
# หรือกำหนด port
PORT=3001 npm start
```

### Build สำหรับ Production
```bash
npm run build
```

## Workflow สำหรับการอัพเดท (Step-by-Step)

### ขั้นตอนที่ 1: แก้ไขโค้ด
```bash
# แก้ไขไฟล์ใน src/ folder
# ตัวอย่าง: เปลี่ยนข้อมูล Hero, About, Skills เป็นต้น
```

### ขั้นตอนที่ 2: ทดสอบใน Local
```bash
# รันเซิร์ฟเวอร์ที่ localhost:3000
npm start
# จากนั้นทดสอบการเปลี่ยนแปลงใน browser
```

### ขั้นตอนที่ 3: Build Production
```bash
npm run build
# จะสร้าง build/ folder ใหม่ที่มีไฟล์ optimized
```

### ขั้นตอนที่ 4: Copy Build Files ไปยัง Root
```bash
# Copy ทุกไฟล์จาก build/ ไปยัง root directory
cp -r build/* .
# หรือใช้ Windows Command:
# xcopy /S /Y build . >nul
```

### ขั้นตอนที่ 5: Commit และ Push
```bash
git add .
git commit -m "Update: [อธิบายการเปลี่ยนแปลง]"
# ตัวอย่าง: git commit -m "Update: เปลี่ยนชื่อและเพิ่มทักษะใหม่"
git push
```

### ขั้นตอนที่ 6: Deploy ไปยัง GitHub Pages
```bash
npm run deploy
# คำสั่งนี้จะ:
# 1. Build ใหม่
# 2. Push ไปยัง gh-pages branch
# 3. GitHub Pages จะ update โดยอัตโนมัติ
```

---

## วิธีง่ายสำหรับการ Deploy (All-in-One)
หากต้องการรวมทุกขั้นตอนให้เป็นคำสั่งเดียว:

```bash
# Build + Copy + Commit + Push
npm run build && cp -r build/* . && git add -A && git commit -m "Update portfolio" && git push

# แล้วตามด้วย Deploy
npm run deploy
```

---

## ตรวจสอบว่า Deploy สำเร็จหรือไม่

### 1. ตรวจสอบ GitHub
- ไปที่ https://github.com/Tanatpon-d/tanatpon-d.github.io
- เช็ค branch `gh-pages` มีการอัพเดทล่าสุด
- ตรวจสอบการ commit ใหม่ที่ main branch

### 2. ตรวจสอบเว็บไซต์
```bash
# รอ 1-3 นาที แล้วเยี่ยมชม:
https://tanatpon-d.github.io

# หากเห็น 404 ให้:
# 1. Refresh browser (Ctrl+Shift+Delete เพื่อลบ cache)
# 2. รอ 5 นาทีให้ GitHub Pages update
# 3. ตรวจสอบว่า index.html อยู่ที่ root directory
```

### 3. ตรวจสอบ GitHub Actions
- ไปที่ Repository Settings > Pages
- ตรวจสอบว่า Source เป็น "Deploy from a branch"
- Branch: `main` (หรือ `gh-pages` ถ้าใช้ gh-pages)

---

## เทคนิค Sync ให้ Local และ GitHub Pages เหมือนกัน

### ปัญหาทั่วไป: Local สะอาด แต่ GitHub Pages เก่า

**สาเหตุ**: Build files ใน root directory ไม่ตรงกับ src/ ที่อัพเดท

**แก้ไข**: ทำตามขั้นตอนนี้
```bash
# 1. Build ใหม่
npm run build

# 2. ลบไฟล์เก่า (ถ้าจำเป็น)
rm -rf static/
rm -f *.html *.json

# 3. Copy build files ไปยัง root
cp -r build/* .

# 4. Push ทั้งหมด
git add .
git commit -m "Sync: Update all files from latest build"
git push

# 5. Deploy
npm run deploy
```

### ปัญหา: ยังคงไม่ sync

```bash
# Hard reset (ถ้าสุดท้าย)
git reset --hard HEAD
npm run build
cp -r build/* .
git add -A
git commit -m "Hard sync: Force update all files"
git push --force
npm run deploy
```

---

## ไฟล์ที่ต้องอัพเดทเมื่อเปลี่ยนข้อมูล

| ส่วนของไซต์ | ไฟล์ | จำเป็นต้อง Rebuild |
|----------|------|------------------|
| ชื่อ, ตำแหน่ง | `src/components/Hero/Hero.tsx` | ✅ ใช่ |
| เกี่ยวกับตัวเอง | `src/components/About/About.tsx` | ✅ ใช่ |
| ประสบการณ์ | `src/components/Experience/Experience.tsx` | ✅ ใช่ |
| โปรเจกต์ | `src/components/Projects/Projects.tsx` | ✅ ใช่ |
| ทักษะ | `src/components/Skills/Skills.tsx` | ✅ ใช่ |
| ติดต่อ | `src/components/Contact/Contact.tsx` | ✅ ใช่ |
| Style ทั่วไป | `src/App.css` | ✅ ใช่ |
| รูปภาพ | `/public/` หรือ root | ⚠️ แค่ push ก็พอ |

---

## หมายเหตุและ Tips

- **การ deploy ครั้งแรก**: อาจใช้เวลา 10-20 นาทีกว่าจะเห็นผล
- **การอัพเดทครั้งต่อไป**: 1-3 นาทีเท่านั้น
- **Cache ของ Browser**: ถ้าไม่เห็นการเปลี่ยนแปลง ให้เคลียร์ cache (Ctrl+Shift+Delete)
- **gh-pages vs main branch**:
  - `main` = source code
  - `gh-pages` = built files (สำหรับ GitHub Pages)
  - ต้อง sync ทั้งสอง

---

## Quick Reference

```bash
# ทดสอบใน local
npm start

# บิลด์สำหรับ production
npm run build

# Deploy ทั้งหมด
npm run deploy

# หรือ (ผสมขั้นตอนเก่า + ใหม่)
npm run build && cp -r build/* . && git add -A && git commit -m "Update" && git push && npm run deploy
```

---

## ติดปัญหา?

1. **ตรวจสอบ git status**
   ```bash
   git status
   ```

2. **ดูการแก้ไขล่าสุด**
   ```bash
   git log --oneline -5
   ```

3. **อัพเดท dependencies**
   ```bash
   npm install
   npm audit fix
   ```

4. **ลบ cache และบิลด์ใหม่**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```