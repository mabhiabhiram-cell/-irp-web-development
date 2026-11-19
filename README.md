# IRP Web Development Assignment

## Project overview

This project contains two independent assignment parts:

- A responsive IRP LMS home page built with semantic HTML and CSS.
- A Node.js script demonstrating amount validation, type coercion, scope, hoisting, the temporal dead zone, and asynchronous loop behavior.

## Technologies used

- HTML5
- CSS3 (Flexbox, CSS Grid, media queries, and custom properties)
- JavaScript (strict mode)
- Node.js

No frontend frameworks or package dependencies are required. The official IRP LMS logo and hero illustration are loaded from their hosted Cloudinary URLs.

## Project structure

```text
irp-web-development-assignment/
├── part-a-responsive-ui/
│   ├── index.html
│   └── style.css
├── part-b-javascript/
│   └── bank.js
└── README.md
```

## Open the frontend

Open `part-a-responsive-ui/index.html` directly in Google Chrome. An internet connection is needed to load the hosted images.

## Test responsive layouts

In Chrome, open Developer Tools with F12 and enable the Device Toolbar. Check these widths:

- Desktop: 1200px and 1440px
- Tablet: 768px, 900px, and 1024px
- Mobile: 375px, 390px, and 430px

Verify the sticky navigation, desktop hero columns, stacked mobile hero, and five-card desktop/tablet/mobile layouts. Check that the page has no horizontal overflow and that both hosted images load.

## Execute JavaScript

From the project root, run:

```sh
node part-b-javascript/bank.js
```

The script tests the seven required inputs (`"500"`, `" 250 "`, `""`, `"abc"`, `null`, `undefined`, and `"12.5.3"`). The first two return numeric amounts; the remaining inputs produce informative error messages. It also demonstrates string concatenation versus numeric subtraction, the historical `typeof null` result, `const` and `let`, `var` hoisting, the `let` temporal dead zone, function declaration and expression hoisting, and the difference between `var` and `let` in asynchronous loops.

The asynchronous output ends with:

```text
var loop: 3
var loop: 3
var loop: 3
let loop: 0
let loop: 1
let loop: 2
```

## GitHub repository submission

Create a public GitHub repository named `irp-web-development-assignment`, then from this project directory run:

```sh
git init
git add README.md part-a-responsive-ui/index.html part-a-responsive-ui/style.css part-b-javascript/bank.js
git commit -m "Build IRP LMS responsive assignment"
git branch -M main
git remote add origin https://github.com/<your-username>/irp-web-development-assignment.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username. Verify the repository and all five files are publicly visible before submitting its URL.
