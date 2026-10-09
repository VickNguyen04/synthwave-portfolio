# Synthwave Portfolio

Portfolio cá nhân xây bằng Next.js, phong cách **synthwave / retro 8-bit**
(mặt trời neon, grid horizon, hiệu ứng CRT, card project kiểu cartridge game).

## 1. Trước khi chạy — điền thông tin thật của bạn

Tìm và thay các placeholder sau trong code:

| Placeholder | File | Thay bằng |
|---|---|---|
| `YOUR_NAME` | `components/Nav.js`, các trang `pages/*.js` | Tên bạn |
| `YOUR_USERNAME` | `components/Footer.js` | Username GitHub |
| `YOUR_LINKEDIN` | `components/Footer.js` | Username LinkedIn |
| `your-email@example.com` | `components/Footer.js`, `pages/contact.js` | Email thật |
| Nội dung 3 project | `pages/projects.js` (mảng `PROJECTS`) | Tên, mô tả, tag, link demo/code project thật |
| Kỹ năng & timeline | `pages/about.js` (mảng `SKILLS`, `TIMELINE`) | Kỹ năng và mốc thời gian thật của bạn |

## 2. Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở trình duyệt vào `http://localhost:3000`.

## 3. Deploy miễn phí (khuyên dùng Vercel — công ty tạo ra Next.js)

1. Push code này lên một repo GitHub.
2. Vào [vercel.com](https://vercel.com), đăng nhập bằng GitHub.
3. Bấm **"New Project"**, chọn repo vừa push.
4. Bấm **Deploy** — không cần cấu hình gì thêm, Vercel tự nhận diện Next.js.
5. Sau ~1 phút, bạn có link dạng `ten-project.vercel.app`. Có thể gắn domain riêng sau nếu muốn.

## 4. Cấu trúc thư mục

```
pages/          → các trang: index (Home), about, projects, contact
components/     → Nav, Footer, Layout, Scene (mặt trời + grid neon)
styles/         → globals.css — toàn bộ màu sắc, font, hiệu ứng
```

Muốn đổi màu neon, sửa các biến ở đầu file `styles/globals.css` (phần `:root`).
