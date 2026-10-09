import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact — YOUR_NAME</title>
      </Head>

      <h1 className="section-title">contact.sh</h1>

      <p style={{ color: 'var(--text-dim)', fontSize: 21, marginBottom: 30 }}>
        Muốn liên hệ hợp tác, thực tập, hay chỉ để chào hỏi? Điền form bên
        dưới hoặc nhắn trực tiếp qua email.
      </p>

      {/* Form này dùng mailto — bạn có thể thay bằng Formspree/API riêng sau */}
      <form
        className="panel"
        action="mailto:your-email@example.com"
        method="POST"
        encType="text/plain"
      >
        <div className="form-row">
          <label htmlFor="name">name</label>
          <input id="name" name="name" type="text" placeholder="Nguyen Van A" required />
        </div>
        <div className="form-row">
          <label htmlFor="email">email</label>
          <input id="email" name="email" type="email" placeholder="ban@email.com" required />
        </div>
        <div className="form-row">
          <label htmlFor="message">message</label>
          <textarea id="message" name="message" rows={5} placeholder="Nội dung..." required />
        </div>
        <button type="submit" className="btn btn-pink">
          EXECUTE ./send_message
        </button>
      </form>
    </Layout>
  );
}
