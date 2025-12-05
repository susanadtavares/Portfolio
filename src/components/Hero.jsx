import "./Hero.css";
import bgVideo from "../assets/background.mp4";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content above the video */}
      <div className="hero-content">
        <h1>Creating. Learning. Improving.</h1>
        <p>Welcome! Glad you're here.</p>
      </div>

    </section>
  );
}
