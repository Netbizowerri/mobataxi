/**
 * Moba Taxi — Playwright E2E Test Suite
 *
 * Generated via: neonwatty/qa-skills (Playwright E2E flow testing)
 * Covers: Homepage load, navigation, tabs, form flows, validation, accessibility
 *
 * Run:  npx playwright test
 * Dev:  npx playwright test --headed
 */

import { test, expect, type Page } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

async function fillDriverForm(page: Page) {
  await page.fill('input[name="fullName"]', "Jane Smith");
  await page.fill('input[name="email"]', "jane.smith@example.ca");
  await page.fill('input[name="phone"]', "+1 709 555-0188");
  await page.selectOption('select[name="province"]', "Newfoundland & Labrador");
  await page.selectOption('select[name="licenseClass"]', "Class 4 Professional License");
  await page.fill('input[name="vehicleInfo"]', "2020 Honda CR-V");
  await page.check('input[name="backgroundApproved"]');
}

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 1: Homepage Load & Core Sections
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 1 — Homepage Load", () => {
  test("page loads and title is correct", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Moba Taxi/i);
  });

  test("meta description exists and has meaningful content", async ({ page }) => {
    await page.goto(BASE_URL);
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
    expect(description!.toLowerCase()).toContain("newfoundland");
  });

  test("Open Graph tags are present", async ({ page }) => {
    await page.goto(BASE_URL);
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute("content");
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
    expect(ogTitle).toBeTruthy();
    expect(ogDesc).toBeTruthy();
    expect(ogImage).toMatch(/^https?:\/\//);
  });

  test("navbar is visible on load", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("text=Moba Taxi").first()).toBeVisible();
  });

  test("hero section and headline are visible", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator("h1")).toContainText("All in One App");
  });

  test("all page sections are rendered", async ({ page }) => {
    await page.goto(BASE_URL);
    const sections = ["#drivers", "#riders", "#how-it-works", "#why-choose-us", "#download-app", "#driver-signup"];
    for (const section of sections) {
      await expect(page.locator(section)).toBeAttached();
    }
  });

  test("JSON-LD structured data is present", async ({ page }) => {
    await page.goto(BASE_URL);
    const ldJson = await page.locator('script[type="application/ld+json"]').textContent();
    expect(ldJson).toBeTruthy();
    const parsed = JSON.parse(ldJson!);
    expect(parsed["@context"]).toBe("https://schema.org");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 2: Navbar Smooth Scroll Navigation
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 2 — Navbar Navigation", () => {
  test("clicking Drivers link scrolls to #drivers section", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('nav a[href="#drivers"]');
    await page.waitForTimeout(600);
    const section = page.locator("#drivers");
    await expect(section).toBeVisible();
  });

  test("clicking Riders link scrolls to #riders section", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('nav a[href="#riders"]');
    await page.waitForTimeout(600);
    await expect(page.locator("#riders")).toBeVisible();
  });

  test("logo click scrolls back to top", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('a[href="#drivers"]');
    await page.waitForTimeout(500);
    await page.click('header a[href="#"]');
    await page.waitForTimeout(500);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test("nav has aria-label for accessibility", async ({ page }) => {
    await page.goto(BASE_URL);
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 3: Mobile Menu
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 3 — Mobile Menu", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("mobile menu button is visible on small screens", async ({ page }) => {
    await page.goto(BASE_URL);
    const menuBtn = page.locator('button[aria-controls="mobile-menu"]');
    await expect(menuBtn).toBeVisible();
  });

  test("mobile menu opens and closes on toggle", async ({ page }) => {
    await page.goto(BASE_URL);
    const menuBtn = page.locator('button[aria-controls="mobile-menu"]');
    
    // Open
    await menuBtn.click();
    await expect(page.locator("#mobile-menu")).toBeVisible();
    expect(await menuBtn.getAttribute("aria-expanded")).toBe("true");

    // Close
    await menuBtn.click();
    await expect(page.locator("#mobile-menu")).not.toBeVisible();
    expect(await menuBtn.getAttribute("aria-expanded")).toBe("false");
  });

  test("mobile nav link closes menu and scrolls to section", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('button[aria-controls="mobile-menu"]').click();
    await expect(page.locator("#mobile-menu")).toBeVisible();
    await page.locator('#mobile-menu a[href="#riders"]').click();
    await page.waitForTimeout(600);
    await expect(page.locator("#mobile-menu")).not.toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 4: Download Section Tab Switcher
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 4 — Download Section Tabs", () => {
  test("Rider App tab is active by default", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#download-app").scrollIntoViewIfNeeded();
    const riderBtn = page.locator('button#tab-rider-btn');
    await expect(riderBtn).toHaveClass(/bg-amber-500/);
  });

  test("switching to Driver App tab updates content", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#download-app").scrollIntoViewIfNeeded();
    await page.click('button#tab-driver-btn');
    await expect(page.locator("#download-app")).toContainText("Driver Application");
  });

  test("iOS download link points to App Store", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#download-app").scrollIntoViewIfNeeded();
    const link = await page.locator('a#ios-download-link').getAttribute("href");
    expect(link).toContain("apps.apple.com");
  });

  test("Android download link points to Play Store", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#download-app").scrollIntoViewIfNeeded();
    const link = await page.locator('a#android-download-link').getAttribute("href");
    expect(link).toContain("play.google.com");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 5: How It Works Tab Switcher
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 5 — How It Works Tabs", () => {
  test("Riders tab is active by default", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#how-it-works").scrollIntoViewIfNeeded();
    await expect(page.locator("#how-it-works")).toContainText("Download the App");
  });

  test("switching to Drivers tab shows driver steps", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#how-it-works").scrollIntoViewIfNeeded();
    await page.locator("#how-it-works button", { hasText: "For Drivers" }).click();
    await page.waitForTimeout(400);
    await expect(page.locator("#how-it-works")).toContainText("Sign Up & Get Approved");
  });

  test("callout banner CTA changes when switching tabs", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#how-it-works").scrollIntoViewIfNeeded();
    await page.locator("#how-it-works button", { hasText: "For Drivers" }).click();
    await page.waitForTimeout(400);
    await expect(page.locator("#how-it-works")).toContainText("Start Applying Now");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 6: Driver Signup Form — Successful Submission (Mocked)
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 6 — Driver Signup Form Submission", () => {
  test("form is visible and all required fields are present", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    await expect(page.locator('input[name="fullName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="province"]')).toBeVisible();
    await expect(page.locator('select[name="licenseClass"]')).toBeVisible();
    await expect(page.locator('input[name="vehicleInfo"]')).toBeVisible();
    await expect(page.locator('input[name="backgroundApproved"]')).toBeVisible();
    await expect(page.locator('button#driver-signup-submit')).toBeVisible();
  });

  test("form shows success modal on successful Formspree submission", async ({ page }) => {
    // Mock the Formspree API endpoint to return 200
    await page.route("https://formspree.io/**", async (route) => {
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) });
    });

    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    await fillDriverForm(page);
    await page.click('button#driver-signup-submit');
    
    // Success modal should appear
    await expect(page.locator("text=THANK YOU!")).toBeVisible({ timeout: 5000 });
    await expect(page.locator("text=Submission Successful")).toBeVisible();
  });

  test("success modal shows captured applicant information", async ({ page }) => {
    await page.route("https://formspree.io/**", async (route) => {
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) });
    });

    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    await fillDriverForm(page);
    await page.click('button#driver-signup-submit');
    
    await expect(page.locator("text=THANK YOU!")).toBeVisible({ timeout: 5000 });
    await expect(page.locator("text=Newfoundland & Labrador").first()).toBeVisible();
    await expect(page.locator("text=Class 4 Professional License").first()).toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 7: Form Validation — Required Fields
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 7 — Form Validation", () => {
  test("submit button is present and enabled by default", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    const btn = page.locator('button#driver-signup-submit');
    await expect(btn).toBeEnabled();
  });

  test("clicking submit with empty form does not reach API", async ({ page }) => {
    let apiCalled = false;
    await page.route("https://formspree.io/**", async (route) => {
      apiCalled = true;
      await route.fulfill({ status: 200 });
    });

    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    await page.click('button#driver-signup-submit');
    
    // HTML5 required validation should prevent submission
    expect(apiCalled).toBe(false);
  });

  test("shows error toast on Formspree API failure", async ({ page }) => {
    await page.route("https://formspree.io/**", async (route) => {
      await route.fulfill({ status: 500, body: "Server Error" });
    });

    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    await fillDriverForm(page);
    await page.click('button#driver-signup-submit');
    
    // Error toast should appear instead of redirect
    await expect(page.locator('[role="alert"]')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('[role="alert"]')).toContainText("Submission failed");
  });

  test("phone number field accepts valid Canadian format", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    const phoneField = page.locator('input[name="phone"]');
    await phoneField.fill("+1 709 555-0199");
    const valid = await phoneField.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(valid).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FLOW 8: Form Reset
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Flow 8 — Form Reset", () => {
  test("Apply with Another Profile button resets form and hides modal", async ({ page }) => {
    await page.route("https://formspree.io/**", async (route) => {
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) });
    });

    await page.goto(BASE_URL);
    await page.locator("#driver-signup").scrollIntoViewIfNeeded();
    await fillDriverForm(page);
    await page.click('button#driver-signup-submit');
    await expect(page.locator("text=THANK YOU!")).toBeVisible({ timeout: 5000 });

    // Click reset button
    await page.locator("button", { hasText: "Dismiss & fill another form" }).click();
    
    // Modal should close
    await expect(page.locator("text=THANK YOU!")).not.toBeVisible();
    
    // Form should be reset
    const nameValue = await page.locator('input[name="fullName"]').inputValue();
    expect(nameValue).toBe("");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ACCESSIBILITY CHECKS
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Accessibility — Core Checks", () => {
  test("skip to main content link is present", async ({ page }) => {
    await page.goto(BASE_URL);
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
  });

  test("main landmark element exists", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('main#main-content')).toBeAttached();
  });

  test("all images have alt attributes", async ({ page }) => {
    await page.goto(BASE_URL);
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt, `Image missing alt: ${await img.getAttribute("src")}`).not.toBeNull();
    }
  });

  test("mobile menu button has accessible aria-label", async ({ page }) => {
    await page.goto(BASE_URL);
    const btn = page.locator('button[aria-controls="mobile-menu"]');
    const label = await btn.getAttribute("aria-label");
    expect(label).toBeTruthy();
    expect(label!.length).toBeGreaterThan(3);
  });
});
