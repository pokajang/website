import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const consoleErrors = [];
const failedRequests = [];

page.on("console", message => {
  if (message.type() === "error") consoleErrors.push(message.text());
});

page.on("requestfailed", request => {
  const errorText = request.failure()?.errorText ?? "";
  if (errorText !== "net::ERR_ABORTED") {
    failedRequests.push(`${request.method()} ${request.url()} ${errorText}`);
  }
});

await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });

const title = await page.title();
const h1 = await page.locator("h1").innerText();
const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
const imageCount = await page.locator("img").count();
const missingAlt = await page.locator("img:not([alt])").count();
const visibleButtons = await page.locator("button:visible").count();
const caregiverNav = await page.locator('a[href="#caregiver-app"]').first().isVisible();
const caregiverSection = await page.locator("#caregiver-app").isVisible();
const phoneMockup = await page.locator(".phone-frame").isVisible();
const caregiverText = await page.locator("#caregiver-app").innerText();
const caregiverGraphicRole = await page.locator(".phone-showcase").getAttribute("role");

await page.locator(".faq-item button").nth(1).click();
const faqVisible = await page.locator(".faq-answer").nth(1).isVisible();

await page.locator("#interest-form input[name=name]").fill("Audit User");
await page.locator("#interest-form input[name=email]").fill("audit@example.com");
await page.locator("#interest-form button").click();
const formSuccess = await page.locator("#form-success").isVisible();

await page.setViewportSize({ width: 390, height: 844 });
await page.reload({ waitUntil: "networkidle" });
const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
await page.locator(".menu-toggle").click();
const mobileMenuOpen = await page.locator(".nav-links").evaluate(element => element.classList.contains("is-open"));

await browser.close();

const results = {
  title,
  h1,
  imageCount,
  missingAlt,
  visibleButtons,
  caregiverNav,
  caregiverSection,
  phoneMockup,
  caregiverGraphicRole,
  desktopOverflow,
  mobileOverflow,
  faqVisible,
  formSuccess,
  mobileMenuOpen,
  consoleErrors,
  failedRequests
};

console.log(JSON.stringify(results, null, 2));

if (
  !title.includes("EXHOLD") ||
  !h1.includes("Move through everyday life") ||
  missingAlt > 0 ||
  !caregiverNav ||
  !caregiverSection ||
  !phoneMockup ||
  caregiverGraphicRole !== "img" ||
  /At home|Father|Short indoor walk recorded|surveillance-style monitoring|proven|guarantee/i.test(caregiverText) ||
  desktopOverflow ||
  mobileOverflow ||
  !faqVisible ||
  !formSuccess ||
  !mobileMenuOpen ||
  consoleErrors.length ||
  failedRequests.length
) {
  process.exit(1);
}
