import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <Header />

      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-image-frame" aria-hidden="true">
            <img src="/images/about.jpg" alt="Elizabeth Duffy sitting outdoors" />
          </div>

          <div className="about-copy">
            <h1>Hello, I’m Elizabeth.</h1>
            <p>
              My callings in life are being a mother and a writer. Balancing them so that both can thrive is an ever-evolving skill I am constantly honing. When they thrive, I thrive. When I thrive, they thrive. It is a wonderfully positive feedback loop on a rollercoaster that I have always wanted to be riding.
            </p>
            <p>
              I write heartwarming picture books with characters rooted in who they are. I hope that my readers see themselves in my books, and once they leave the pages, I hope they experience more wonder in everyday moments and feel excited to try new things.
            </p>
            <p>
              I live in Portland, Oregon with my spouse, child, and two cats. I enjoy drinking tea on my front porch, adventuring with my loved ones, and learning about new things in the PNW. I am an active member of the SCBWI.
            </p>
          </div>
        </div>
      </section>

      <section className="about-fun-facts">
        <div className="container fun-facts-card">
          <h2>Fun Facts</h2>
          <ul className="fun-facts-list">
            <li className="fun-facts-item">
              <strong>My cats:</strong>
              <p>
                I have two black cats named Stevie and Georgie. Stevie was born on the streets to a mama cat who did a wonderful job keeping her safe and cared for until Stevie could come to her forever home with me. Georgie was born in the lap of luxury to a mama cat who was just as gorgeous and dramatic as Georgie is. Stevie is fiercely independent and Georgie is attached to my hip. They have taught me how everyone receives love differently. It is important to me that I meet them where they’re at, and respect their individual boundaries, so that they both know without a doubt how loved they are.
              </p>
            </li>
            <li className="fun-facts-item">
              <strong>Favorite tea:</strong>
              <p>
                Harney & Sons Victorian London Fog is my favorite tea. I am naturally an early riser. I enjoy steeping a small pot of tea in the mornings to sip while I write before the rest of the house wakes up.
              </p>
            </li>
            <li className="fun-facts-item">
              <strong>What inspires me:</strong>
              <p>
                I am inspired by the world around me, but most of all, by my loved ones. They are not just my family, they are my best friends, my muses, my mentors, and my support system.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
