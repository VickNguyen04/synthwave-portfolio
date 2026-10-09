export default function Scene({ title, subtitle }) {
  return (
    <div className="scene">
      <div className="sun" />
      <div className="grid-floor" />
      <div className="scene-title">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
