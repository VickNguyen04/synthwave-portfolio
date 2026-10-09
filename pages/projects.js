import Head from 'next/head';
import Layout from '../components/Layout';

const PROJECTS = [
  {
    title: 'PROJECT_01',
    desc: 'Mô tả ngắn: dự án làm gì, giải quyết vấn đề gì cho ai.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    demo: '#',
    code: '#',
  },
  {
    title: 'PROJECT_02',
    desc: 'Mô tả ngắn: dự án làm gì, giải quyết vấn đề gì cho ai.',
    tags: ['Next.js', 'React', 'TypeScript'],
    demo: '#',
    code: '#',
  },
  {
    title: 'PROJECT_03',
    desc: 'Mô tả ngắn: dự án làm gì, giải quyết vấn đề gì cho ai.',
    tags: ['Java', 'Next.js', 'REST API'],
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects — YOUR_NAME</title>
      </Head>

      <h1 className="section-title">projects/</h1>

      <div className="cart-grid">
        {PROJECTS.map((p) => (
          <div className="cartridge" key={p.title}>
            <div className="cartridge-label">{p.title}</div>
            <p className="cartridge-desc">{p.desc}</p>
            <div className="tag-row">
              {p.tags.map((tag) => (
                <span className="tag-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="cart-links">
              <a href={p.demo} target="_blank" rel="noreferrer">
                DEMO
              </a>
              <a href={p.code} target="_blank" rel="noreferrer">
                CODE
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
