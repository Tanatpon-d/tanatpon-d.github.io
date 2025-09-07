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

## หมายเหตุ
- การ deploy ครั้งแรกอาจใช้เวลา 10-20 นาที กว่าจะเห็นเว็บไซต์
- การอัพเดทครั้งต่อไปจะเร็วกว่า (2-5 นาที)
- ถ้าเว็บไซต์ไม่แสดง ให้ตรวจสอบ:
  1. ชื่อ repository ถูกต้อง (`username.github.io`)
  2. GitHub Pages เปิดใช้งานแล้ว
  3. Branch `gh-pages` มีไฟล์อยู่