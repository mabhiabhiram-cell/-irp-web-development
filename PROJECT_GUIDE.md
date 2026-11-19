# IRP LMS Project Guide

## Project title

**Practical Assignment: Responsive Web Design & JavaScript Foundations**

## What this project does

This project has two independent parts:

1. A responsive, single-page home page for the IRP LMS learning platform.
2. A small Node.js program that demonstrates input validation, JavaScript types, scope, hoisting, and asynchronous loops.

The banking example is a learning exercise only. It does not connect to a real bank, store accounts, or handle real transactions.

## Project structure

```text
Responsive Web design (JavaScript Foundation)/
├── part-a-responsive-ui/
│   ├── index.html
│   └── style.css
├── part-b-javascript/
│   └── bank.js
├── README.md
└── PROJECT_GUIDE.md
```

## Part A: Responsive IRP LMS home page

### Page structure and behavior

- The page uses semantic HTML elements such as `header`, `nav`, `main`, `section`, and `footer`.
- The sticky navigation links move to sections on the same page. The sign-in control is a visual button; it is not connected to an authentication service.
- The hero introduces the learning platform and links to the learning journey.
- The journey section contains five ordered steps: Learn, Practice, Build Projects, Prepare, and Get Placed.
- The logo and hero illustration are the official hosted Cloudinary assets specified in the assignment.

### Responsive layout

The design uses Flexbox to align the navigation and hero content, and CSS Grid for the hero and journey cards.

- **Desktop:** the hero has two columns and the five cards appear in one row.
- **Tablet:** the cards wrap into three columns.
- **Mobile:** the hero stacks vertically, desktop navigation links are hidden, and the cards use one column.

The navbar uses `position: sticky` so it remains visible while scrolling. Images scale within their containers to preserve their proportions, and the CSS uses responsive widths and spacing to avoid horizontal overflow.

### Design choices

The required colors are defined as custom properties in `:root`. Keeping colors in one place makes the palette easier to maintain. The layout uses a centered maximum width on larger screens, while media queries adjust spacing, type sizes, and columns on smaller screens.

## Part B: JavaScript bank account simulator

### Amount validation

`parseAmount(input)` checks the input in a deliberate order:

1. Reject `null` and `undefined`.
2. Accept only strings and numbers.
3. Trim surrounding spaces from strings.
4. Reject a blank string before conversion because `Number("")` evaluates to `0`.
5. Convert with `Number()` and reject `NaN`.
6. Reject zero and negative values.
7. Return the valid positive number.

The script calls the function with all seven required test inputs. Each call is wrapped in `try/catch`, so a bad input displays its error message without stopping the other tests.

### JavaScript concepts demonstrated

- **Type coercion:** `+` can join strings, while `-` converts operands to numbers. The program also demonstrates the historical `typeof null === "object"` result.
- **`const` and `let`:** the bank name is constant; the transaction counter can change.
- **Hoisting:** reading a `var` variable before its assignment gives `undefined`.
- **Temporal dead zone:** reading a `let` variable before its declaration throws a `ReferenceError`.
- **Function hoisting:** a function declaration can be called before its definition. A `var` function expression cannot be called before its assignment.
- **Asynchronous loops:** the `var` timeout callbacks share one loop variable and print `3`; each `let` iteration has its own binding and prints `0`, `1`, and `2`.

The file begins with `"use strict";` and can run directly in Node.js without installing packages.

## Development and testing approach

The assignment was split into the page and the JavaScript demonstration so each can be understood and tested independently. The page uses plain HTML and CSS rather than a framework, and the JavaScript examples use Node.js built-ins only.

To run the JavaScript from the project folder:

```sh
node part-b-javascript/bank.js
```

To inspect the responsive page, open `part-a-responsive-ui/index.html` in Chrome. Use Developer Tools' Device Toolbar to check the assignment's desktop, tablet, and mobile widths. The hosted images require an internet connection.

## Talking about the project in an interview

### Sample explanation

> “I built a responsive learning-platform home page and a separate JavaScript fundamentals demo. For the page, I used semantic HTML and CSS Grid and Flexbox, with media queries to adapt the layout from desktop to mobile. I kept the colors in CSS custom properties and used the official platform images. In the JavaScript part, I wrote a reusable amount validator that checks types and blank input before converting values. I also used small examples to explain hoisting, the temporal dead zone, and why `var` and `let` behave differently in asynchronous loops. I tested the script with Node.js and organized the project so each part is easy to review.”

### Useful points to explain

- **Why use Grid for the cards?** It provides a clear five-column desktop layout and makes it straightforward to switch to three columns on tablet and one on mobile.
- **Why check for a blank string before calling `Number()`?** JavaScript converts an empty string to zero, which would otherwise look like a valid amount.
- **Why do the `var` callbacks all print `3`?** The callbacks run after the loop and all reference the same `var` binding, whose value is then `3`.
- **What does the temporal dead zone mean here?** A `let` binding exists in its scope but cannot be accessed before its declaration runs.
- **What is outside the scope of this project?** Sign-in is only a visual control; there is no authentication, backend, database, or real banking functionality.

## Deployment note

The frontend is live at <https://irp-web-development-assignment-da780ecc.netlify.app>. Site-level SSO protection was turned off so visitors can open the page without signing in; the team's account-wide SSO setting was left unchanged. The deployed homepage and stylesheet both returned HTTP 200 during verification.

## Technologies used

- **HTML5** — semantic page structure and accessible content.
- **CSS3** — responsive styling, custom properties, Flexbox, Grid, and media queries.
- **JavaScript (ES6+)** — validation, types, declarations, hoisting, and callbacks.
- **Node.js** — runs the standalone JavaScript demonstration.
- **Git and GitHub** — version history and source-code hosting.
- **Netlify** — static frontend deployment.
- **Cloudinary** — hosts the official logo and hero illustration.
