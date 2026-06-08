import "./styles.css";

const features = [
  {
    icon: "01",
    title: "Assisted braking",
    text: "Gentle speed control with manual brakes always available."
  },
  {
    icon: "02",
    title: "Obstacle awareness",
    text: "Front and side sensors can warn the user and slow the walker."
  },
  {
    icon: "03",
    title: "Caregiver connection",
    text: "Consent-based alerts, device status and optional activity summaries."
  },
  {
    icon: "04",
    title: "Home setup",
    text: "Delivery, fitting, training and after-sales support in Klang Valley."
  }
];

const useCases = [
  {
    image: "/images/home-walking.png",
    title: "Everyday movement at home",
    text: "Familiar rollator support for level indoor surfaces."
  },
  {
    image: "/images/lift-access.png",
    title: "High-rise living",
    text: "Compact movement through condominium corridors and lift lobbies."
  },
  {
    image: "/images/outdoor-walkway.png",
    title: "Level outdoor paths",
    text: "Designed for controlled use on smooth, accessible walkways."
  }
];

const faqs = [
  [
    "Is EXHOLD a medical device?",
    "EXHOLD is currently a business and engineering concept. Its final Malaysian medical-device classification must be confirmed with the Medical Device Authority before commercial sale."
  ],
  [
    "Does EXHOLD prevent falls?",
    "No such claim is made. The proposed product provides walking support, warnings and braking assistance, but effectiveness and safety require formal testing."
  ],
  [
    "Can it climb stairs or move by itself?",
    "No. The first version is not autonomous, does not climb stairs and does not lift or carry the user."
  ],
  [
    "Who is the proposed first customer?",
    "Families in Klang Valley, especially adult children considering purchase or rental for an older parent who can still walk but needs additional support."
  ]
];

document.querySelector("#app").innerHTML = `
  <div class="announcement">
    <span>Concept-stage product</span>
    Klang Valley pilot interest is now open
    <a href="#interest">Join the list</a>
  </div>

  <header class="site-header">
    <a class="logo" href="#top" aria-label="EXHOLD home">
      <span class="logo-mark">EX</span>HOLD
    </a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
      <span></span><span></span>
    </button>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#product">Product</a>
      <a href="#caregiver-app">CareGiver App</a>
      <a href="#living">Use cases</a>
      <a href="#service">Service</a>
      <a href="#safety">Safety</a>
      <a href="#pricing">Pricing</a>
    </nav>
    <a class="button button-small header-cta" href="#interest">Book a consultation</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-media">
        <img src="/images/hero.png" alt="Concept render of the EXHOLD smart robotic walker" />
      </div>
      <div class="hero-copy">
        <p class="eyebrow">Smart support for active ageing</p>
        <h1>Move through everyday life with greater confidence.</h1>
        <p class="hero-lead">
          A proposed smart robotic walker with assisted braking, obstacle awareness,
          caregiver connection and home-based support for Malaysian families.
        </p>
        <div class="hero-actions">
          <a class="button" href="#interest">Join Klang Valley pilot</a>
          <a class="button button-ghost" href="#product">Explore EXHOLD</a>
        </div>
        <p class="disclaimer">Concept render. Product has not yet completed regulatory or clinical validation.</p>
      </div>
    </section>

    <section class="metrics" aria-label="EXHOLD key concept specifications">
      <div><strong>620 mm</strong><span>Concept width</span></div>
      <div><strong>&le;18 kg</strong><span>Target device mass</span></div>
      <div><strong>120 kg</strong><span>Target user capacity</span></div>
      <div><strong>24 V</strong><span>Removable battery concept</span></div>
    </section>

    <section class="section intro" id="product">
      <div class="section-heading">
        <p class="eyebrow">Built around familiar support</p>
        <h2>Useful technology, without turning a walker into a machine to fear.</h2>
      </div>
      <div class="feature-grid">
        ${features.map(feature => `
          <article class="feature-card">
            <span class="feature-number">${feature.icon}</span>
            <h3>${feature.title}</h3>
            <p>${feature.text}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="product-story">
      <div class="product-story-image">
        <img src="/images/details.png" alt="Close-up concept details of EXHOLD controls, sensors, battery and powered wheel" loading="lazy" />
      </div>
      <div class="product-story-copy">
        <p class="eyebrow">Designed for clarity</p>
        <h2>Controls where users expect them. Support where it matters.</h2>
        <ul class="check-list">
          <li>Large, direct controls and emergency stop</li>
          <li>Manual braking remains available without power</li>
          <li>Removable battery and protected service access</li>
          <li>Foldable frame for storage and transport</li>
        </ul>
        <a class="text-link" href="#safety">See the safety boundaries <span>&rarr;</span></a>
      </div>
    </section>

    <section class="section caregiver-app" id="caregiver-app">
      <div class="caregiver-copy">
        <p class="eyebrow">CareGiver App</p>
        <h2>Simple visibility for families, without taking control away from the user.</h2>
        <p>
          The proposed caregiver app gives authorised family members a clear view of device
          status, selected alerts and support needs. The older user remains involved through
          consent settings and practical home setup.
        </p>
        <div class="app-benefits">
          <article>
            <span>Status</span>
            <strong>Device status</strong>
            <p>Battery level, connection, service reminders and latest device check-in.</p>
          </article>
          <article>
            <span>Alert</span>
            <strong>Helpful notifications</strong>
            <p>Emergency button alerts and configured device or maintenance notices.</p>
          </article>
          <article>
            <span>Care</span>
            <strong>Consent-based support</strong>
            <p>Only agreed information is shown to authorised caregivers.</p>
          </article>
        </div>
      </div>

      <div
        class="phone-showcase"
        role="img"
        aria-label="Concept CareGiver App screen showing device readiness, battery, connection, assist mode, maintenance and consent-based alerts."
      >
        <div class="phone-frame">
          <div class="phone-screen">
            <div class="app-topbar">
              <span>EXHOLD Care</span>
              <strong>Parent profile</strong>
            </div>
            <div class="status-card safe">
              <small>Current status</small>
              <strong>Device ready</strong>
              <span>Last device check-in 8 min ago</span>
            </div>
            <div class="app-grid">
              <div><small>Battery</small><strong>82%</strong></div>
              <div><small>Connection</small><strong>Online</strong></div>
              <div><small>Mode</small><strong>Assist</strong></div>
              <div><small>Service</small><strong>14 days</strong></div>
            </div>
            <div class="alert-list">
              <div>
                <span class="dot teal"></span>
                <p><strong>Activity summary</strong>Available only when the user consents.</p>
              </div>
              <div>
                <span class="dot purple"></span>
                <p><strong>Brake check</strong>Manual brake test due this week.</p>
              </div>
              <div>
                <span class="dot orange"></span>
                <p><strong>Emergency button</strong>No emergency alert triggered.</p>
              </div>
            </div>
            <div class="app-button">Request support call</div>
          </div>
        </div>
        <div class="app-side-card">
          <strong>Designed for adult children</strong>
          <p>Clear enough for quick checks, careful enough to avoid surveillance-style overreach.</p>
        </div>
      </div>
    </section>

    <section class="section use-cases" id="living">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Made for Malaysian routines</p>
          <h2>From the living room to the lift lobby.</h2>
        </div>
        <p>
          EXHOLD is proposed for older adults who can still walk and use a rollator,
          but may benefit from controlled movement and connected family support.
        </p>
      </div>
      <div class="use-case-grid">
        ${useCases.map(item => `
          <article class="use-case-card">
            <img src="${item.image}" alt="${item.title} concept scenario" loading="lazy" />
            <div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
          </article>
        `).join("")}
      </div>
      <p class="concept-note">All lifestyle images are concept renders, not evidence of tested deployment.</p>
    </section>

    <section class="service-section" id="service">
      <div class="service-image">
        <img src="/images/setup-training.png" alt="Concept scenario showing EXHOLD home setup and family onboarding" loading="lazy" />
      </div>
      <div class="service-copy">
        <p class="eyebrow">More than hardware</p>
        <h2>Delivered, adjusted and explained at home.</h2>
        <div class="steps">
          <div><span>1</span><p><strong>Speak to an advisor</strong>Complete a suitability check by phone, WhatsApp or video call.</p></div>
          <div><span>2</span><p><strong>Choose purchase or rental</strong>Review clear pricing, limitations and service terms.</p></div>
          <div><span>3</span><p><strong>Home delivery and fitting</strong>A trained team adjusts the device and demonstrates the brakes.</p></div>
          <div><span>4</span><p><strong>Ongoing support</strong>Maintenance reminders, diagnostics and scheduled servicing.</p></div>
        </div>
      </div>
    </section>

    <section class="section safety" id="safety">
      <div class="safety-copy">
        <p class="eyebrow">Safety before convenience</p>
        <h2>Smart assistance cannot replace suitable care.</h2>
        <p>
          EXHOLD is proposed as walking support only. It is not intended for stairs,
          escalators, severe balance impairment, body-weight support or unsupervised
          rehabilitation outside its validated use.
        </p>
        <div class="safety-tags">
          <span>Manual brake priority</span>
          <span>No autonomous navigation</span>
          <span>Consent-based alerts</span>
          <span>Professional advice when needed</span>
        </div>
      </div>
      <img src="/images/safety-architecture.png" alt="EXHOLD concept control and safety architecture" loading="lazy" />
    </section>

    <section class="section pricing" id="pricing">
      <div class="section-heading">
        <p class="eyebrow">Proposed access options</p>
        <h2>Own it or start with rental.</h2>
        <p>Indicative planning prices for proposal evaluation. Final prices depend on validation, suppliers and regulatory requirements.</p>
      </div>
      <div class="pricing-grid">
        <article class="price-card">
          <p class="plan-label">Direct purchase</p>
          <p class="price"><span>RM</span>14,900</p>
          <p class="price-note">One-time estimated price</p>
          <ul>
            <li>EXHOLD smart walker concept</li>
            <li>Klang Valley delivery and setup</li>
            <li>Initial caregiver app configuration</li>
            <li>Warranty terms to be confirmed</li>
          </ul>
          <a class="button button-dark" href="#interest">Register purchase interest</a>
        </article>
        <article class="price-card featured">
          <p class="plan-label">12-month rental</p>
          <p class="price"><span>RM</span>499<small>/month</small></p>
          <p class="price-note">Plus estimated RM600 setup fee</p>
          <ul>
            <li>Lower initial commitment</li>
            <li>Home fitting and onboarding</li>
            <li>Scheduled maintenance support</li>
            <li>Return conditions to be disclosed</li>
          </ul>
          <a class="button" href="#interest">Join rental pilot list</a>
        </article>
      </div>
    </section>

    <section class="section faq">
      <div class="section-heading">
        <p class="eyebrow">Questions before technology</p>
        <h2>What families should know.</h2>
      </div>
      <div class="faq-list">
        ${faqs.map(([question, answer], index) => `
          <article class="faq-item">
            <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
              <span>${question}</span><span class="faq-icon">+</span>
            </button>
            <div class="faq-answer" ${index === 0 ? "" : "hidden"}>
              <p>${answer}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="interest" id="interest">
      <div>
        <p class="eyebrow">Klang Valley pilot interest</p>
        <h2>Help shape support that fits real homes.</h2>
        <p>Register interest as a family, care provider, physiotherapist or pilot partner.</p>
      </div>
      <form class="interest-form" id="interest-form">
        <label>
          <span>Name</span>
          <input name="name" type="text" autocomplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autocomplete="email" required />
        </label>
        <label>
          <span>I am interested as</span>
          <select name="role">
            <option>Family member</option>
            <option>Older adult</option>
            <option>Care provider</option>
            <option>Healthcare professional</option>
            <option>Pilot or business partner</option>
          </select>
        </label>
        <button class="button button-light" type="submit">Register interest</button>
        <p class="form-note">Demo form only. No information is transmitted or stored.</p>
      </form>
      <div class="form-success" id="form-success" role="status" hidden>
        <strong>Interest recorded in this demo.</strong>
        <span>This frontend does not send or store personal data.</span>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-brand">
      <a class="logo logo-light" href="#top"><span class="logo-mark">EX</span>HOLD</a>
      <p>Smart support for active ageing.</p>
    </div>
    <div>
      <strong>Explore</strong>
      <a href="#product">Product</a>
      <a href="#caregiver-app">CareGiver App</a>
      <a href="#service">Home service</a>
      <a href="#pricing">Pricing</a>
    </div>
    <div>
      <strong>Important</strong>
      <a href="#safety">Safety boundaries</a>
      <a href="#interest">Pilot interest</a>
      <span>Concept-stage proposal</span>
    </div>
    <p class="footer-legal">
      EXHOLD is an academic business proposal and concept product. Product images are generated concept renders.
      No purchase is currently processed through this site.
    </p>
  </footer>
`;

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

nav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 30);
}, { passive: true });

document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.querySelector(".faq-icon").textContent = expanded ? "+" : "−";
    button.nextElementSibling.hidden = expanded;
  });
});

const form = document.querySelector("#interest-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  form.hidden = true;
  document.querySelector("#form-success").hidden = false;
});
