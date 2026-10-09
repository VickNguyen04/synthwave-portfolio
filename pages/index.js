import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Scene from '../components/Scene';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>YOUR_NAME — Portfolio</title>
      </Head>

      <Scene
        title="YOUR NAME"
        subtitle="Junior Developer // Java + Next.js"
      />

      <section style={{ marginTop: 48 }}>
        <p style={{ fontSize: 22, color: 'var(--text-dim)', maxWidth: 620 }}>
          Mình là developer tự học, thích build sản phẩm hoàn chỉnh từ backend
          Java tới frontend Next.js. Hiện đang tìm cơ hội thực tập / vị trí
          junior developer để học hỏi và đóng góp.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
          <Link href="/projects" className="btn">
            VIEW PROJECTS
          </Link>
          <Link href="/contact" className="btn btn-pink">
            CONTACT ME
          </Link>
        </div>
      </section>

      <section style={{ marginTop: 64 }}>
        <h2 className="section-title">stack.json</h2>
        <div className="tag-row">
          {[
            'Java',
            'Spring Boot',
            'Next.js',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'Git',
          ].map((tech) => (
            <span className="tag-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>
    </Layout>
  );
}
