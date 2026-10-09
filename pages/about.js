import Head from 'next/head';
import Layout from '../components/Layout';

const SKILLS = [
  { name: 'Java', level: 4 },
  { name: 'Spring Boot', level: 3 },
  { name: 'Next.js', level: 3 },
  { name: 'React', level: 3 },
  { name: 'SQL', level: 3 },
  { name: 'Git', level: 4 },
];

const TIMELINE = [
  { year: '2026', text: 'Đang tìm cơ hội thực tập / junior developer' },
  { year: '2025', text: 'Tự học full-stack: Java, Spring Boot, Next.js' },
  { year: '2024', text: 'Bắt đầu học lập trình' },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About — YOUR_NAME</title>
      </Head>

      <h1 className="section-title">about.exe</h1>

      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terminal-title">about.txt</span>
        </div>
        <div className="terminal-body">
          <p>
            &gt; Xin chào, mình là <strong>YOUR_NAME</strong>, một developer
            tự học đang trong hành trình trở thành full-stack dev.
          </p>
          <p>
            &gt; Mình thích build sản phẩm end-to-end: từ thiết kế database,
            viết API bằng Java/Spring Boot, đến dựng giao diện bằng Next.js.
          </p>
          <p className="cursor-blink">&gt; Hiện đang tìm cơ hội thực tập</p>
        </div>
      </div>

      <h2 className="section-title">skills.dat</h2>
      <div className="panel" style={{ marginBottom: 40 }}>
        {SKILLS.map((s) => (
          <div className="skill-row" key={s.name}>
            <span>{s.name}</span>
            <div className="meter">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`meter-block ${i < s.level ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">timeline.log</h2>
      <div className="panel">
        {TIMELINE.map((t) => (
          <div className="timeline-item" key={t.year}>
            <span className="tag">[{t.year}]</span>
            {t.text}
          </div>
        ))}
      </div>
    </Layout>
  );
}
