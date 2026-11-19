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
      // Number("") is 0, so reject an empty string before conversion.
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

// With +, a string operand triggers concatenation ("5" + 2 is "52");
// subtraction converts both operands to numbers ("5" - 2 is 3).
console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);

// typeof null === "object" is a historical JavaScript behavior.
console.log("typeof null:", typeof null);

// PART 2: Scoping & Hoisting

// const keeps the bank name fixed; let allows the transaction counter to change.
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;
transactionCounter += 1;
console.log("Bank:", BANK_NAME, "| Transactions:", transactionCounter);

// HOISTING DEMO

// During execution-context creation, declarations are set up; in the execution
// phase, statements run and assignments take effect in order.
console.log("var before declaration:", hoistedValue);
var hoistedValue = "assigned later";

try {
  console.log(temporalValue);
} catch (error) {
  console.log("let before declaration:", error.name);
}
let temporalValue = "outside the temporal dead zone";

announce();
function announce() {
  console.log("Function declaration hoisted successfully.");
}

try {
  notify();
} catch (error) {
  console.log("Function expression before assignment:", error.name);
}
// The var declaration is hoisted, but its function value is assigned here.
var notify = function () {
  console.log("Function expression called after assignment.");
};
notify();

// setTimeout callbacks run after this synchronous loop has finished. var shares
// one binding, while let creates a fresh lexical binding for each iteration.
// Thus var callbacks all read 3; let callbacks retain 0, 1, and 2.
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
