"use strict";

// PART 1: Types & Coercion

function parseAmount(input) {
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid input type. Enter an amount as a string or number.");
  }

  let value = input;

  if (typeof value === "string") {
    value = value.trim();
    if (value === "") {
      // Number("") becomes 0, so check for a blank string first.
      throw new Error("Amount cannot be empty.");
    }
  }

  const amount = Number(value);
  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  return amount;
}

const amountTests = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (const input of amountTests) {
  try {
    console.log("parseAmount result:", parseAmount(input));
  } catch (error) {
    console.log("parseAmount error:", error.message);
  }
}

// A string makes + join the values ("5" + 2 is "52").
// The - operator converts them to numbers first ("5" - 2 is 3).
console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);

// typeof null === "object" is a historical JavaScript behavior.
console.log("typeof null:", typeof null);

// PART 2: Scoping & Hoisting

// The bank name stays the same, so use const. The transaction count can change, so use let.
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;
transactionCounter += 1;
console.log("Bank:", BANK_NAME, "| Transactions:", transactionCounter);

// HOISTING DEMO

// First, JavaScript prepares declarations (the creation phase).
// Then it runs the code in order and applies assignments (the execution phase).
// var is ready as undefined before its assignment, so this logs undefined.
console.log("var before declaration:", hoistedValue);
var hoistedValue = "assigned later";

// let can't be read before its declaration because it's in the temporal dead zone.
try {
  console.log(temporalValue);
} catch (error) {
  console.log("let before declaration:", error.name);
}
let temporalValue = "outside the temporal dead zone";

// Function declarations can be called before the line where they are written.
announce();
function announce() {
  console.log("announce runs before its definition.");
}

try {
  notify();
} catch (error) {
  console.log("Function expression before assignment:", error.name);
}
// notify is hoisted as a var, but gets its function only when this line runs.
var notify = function () {
  console.log("notify runs after its function is assigned.");
};
notify();

// setTimeout runs after each loop finishes. var reuses one binding for every pass,
// while let gives each pass its own binding. That's why var logs 3 each time and
// let keeps the values 0, 1, and 2.
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 100);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("let loop:", i);
  }, 100);
}
