export default function Particles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="particles">
      {particles.map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() + "s",
          }}
        />
      ))}
    </div>
  );
}
