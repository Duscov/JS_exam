const questions = [
    {
        id: 1,
        question: "What's the output?\n\nfunction sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();",
        options: ["Lydia and undefined", "Lydia and ReferenceError", "ReferenceError and 21", "undefined and ReferenceError"],
        correct: "undefined and ReferenceError"
    },
    {
        id: 2,
        question: "What's the output?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
        options: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3", "3 3 3 and 0 1 2"],
        correct: "3 3 3 and 0 1 2"
    },
    {
        id: 3,
        question: "What's the output?\n\n+true;\n!\"Lydia\";",
        options: ["1 and false", "false and NaN", "false and false"],
        correct: "1 and false"
    },
    {
        id: 4,
        question: "What's the output?\n\nconst shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
        options: ["20 and 62.83185307179586", "20 and NaN", "20 and 63", "NaN and 63"],
        correct: "20 and NaN"
    },
    {
        id: 5,
        question: "Which one is true?\n\nconst bird = { size: 'small' };\nconst mouse = { name: 'Mickey', small: true };",
        options: [
            "mouse.bird.size is not valid",
            "mouse[bird.size] is not valid",
            "mouse[bird['size']] is not valid",
            "All of them are valid"
        ],
        correct: "mouse[bird['size']] is not valid"
    },
    {
        id: 6,
        question: "What's the output?\n\nlet c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);",
        options: ["Hello", "Hey!", "undefined", "ReferenceError", "TypeError"],
        correct: "Hello"
    },
    {
        id: 7,
        question: "What's the output?\n\nlet a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
        options: ["true false true", "false false true", "true false false", "false true true"],
        correct: "true false false"
    },
    {
        id: 8,
        question: "What happens when we do this?\n\nfunction bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';",
        options: [
            "Nothing, this is totally fine!",
            "SyntaxError. You cannot add properties to a function this way.",
            "\"Woof\" gets logged.",
            "ReferenceError"
        ],
        correct: "Nothing, this is totally fine!"
    },
    {
        id: 9,
        question: "What's the output?\n\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person('Lydia', 'Hallie');\nconst sarah = Person('Sarah', 'Smith');\n\nconsole.log(lydia);\nconsole.log(sarah);",
        options: [
            "Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined",
            "Person {firstName: 'Lydia', lastName: 'Hallie'} and Person {firstName: 'Sarah', lastName: 'Smith'}",
            "Person {firstName: 'Lydia', lastName: 'Hallie'} and {}",
            "Person {firstName: 'Lydia', lastName: 'Hallie'} and ReferenceError"
        ],
        correct: "Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined"
    },
    {
        id: 10,
        question: "What's the output?\n\nfunction sum(a, b) {\n  return a + b;\n}\n\nsum(1, '2');",
        options: ["NaN", "TypeError", "\"12\"", "3"],
        correct: "\"12\""
    },
    {
        id: 11,
        question: "What's the output?\n\nlet number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);",
        options: ["1 1 2", "1 2 2", "0 2 2", "0 1 2"],
        correct: "0 2 2"
    },
    {
        id: 12,
        question: "What's the output?\n\nfunction checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log('You are an adult!');\n  } else if (data == { age: 18 }) {\n    console.log('You are still an adult.');\n  } else {\n    console.log(`Hmm.. You don't have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });",
        options: [
            "You are an adult!",
            "You are still an adult.",
            "Hmm.. You don't have an age I guess"
        ],
        correct: "Hmm.. You don't have an age I guess"
    },
    {
        id: 13,
        question: "What's the output?\n\nfunction getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);",
        options: ["number", "array", "object", "NaN"],
        correct: "object"
    },
    {
        id: 14,
        question: "What's the output?\n\nfunction getAge() {\n  'use strict';\n  age = 21;\n  console.log(age);\n}\n\ngetAge();",
        options: ["21", "undefined", "ReferenceError", "TypeError"],
        correct: "ReferenceError"
    },
    {
        id: 15,
        question: "What's value of sum?\n\nconst sum = eval('10*10+5');",
        options: ["105", "\"105\"", "TypeError", "\"10*10+5\""],
        correct: "105"
    },
    {
        id: 16,
        question: "What's the output?\n\nvar num = 8;\nvar num = 10;\n\nconsole.log(num);",
        options: ["8", "10", "SyntaxError", "ReferenceError"],
        correct: "10"
    },
    {
        id: 17,
        question: "What's the output?\n\nconst obj = { a: 'one', b: 'two', a: 'three' };\nconsole.log(obj);",
        options: [
            "{ a: 'one', b: 'two' }",
            "{ b: 'two', a: 'three' }",
            "{ a: 'three', b: 'two' }",
            "SyntaxError"
        ],
        correct: "{ a: 'three', b: 'two' }"
    },
    {
        id: 18,
        question: "What's the output?\n\nconst foo = () => console.log('First');\nconst bar = () => setTimeout(() => console.log('Second'));\nconst baz = () => console.log('Third');\n\nbar();\nfoo();\nbaz();",
        options: ["First Second Third", "First Third Second", "Second First Third", "Second Third First"],
        correct: "First Third Second"
    },
    {
        id: 20,
        question: "What is the event.target when clicking the button?\n\n<div onclick=\"console.log('first div')\">\n  <div onclick=\"console.log('second div')\">\n    <button onclick=\"console.log('button')\">\n      Click!\n    </button>\n  </div>\n</div>",
        options: ["Outer div", "Inner div", "button", "An array of all nested elements"],
        correct: "button"
    },
    {
        id: 21,
        question: "When you click the paragraph, what's the logged output?\n\n<div onclick=\"console.log('div')\">\n  <p onclick=\"console.log('p')\">\n    Click here!\n  </p>\n</div>",
        options: ["p div", "div p", "p", "div"],
        correct: "p div"
    },
    {
        id: 22,
        question: "What's the output?\n\nconst person = { name: 'Lydia' };\n\nfunction sayHi(age) {\n  return `${this.name} is ${age}`;\n}\n\nconsole.log(sayHi.call(person, 21));\nconsole.log(sayHi.bind(person, 21));",
        options: [
            "undefined is 21 Lydia is 21",
            "function function",
            "Lydia is 21 Lydia is 21",
            "Lydia is 21 function"
        ],
        correct: "Lydia is 21 function"
    },
    {
        id: 23,
        question: "What's the output?\n\nfunction sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());",
        options: ["object", "number", "function", "undefined"],
        correct: "number"
    },
    {
        id: 24,
        question: "Which of these values are falsy?\n\n0;\nnew Number(0);\n('');\n(' ');\nnew Boolean(false);\nundefined;",
        options: [
            "0, '', undefined",
            "0, new Number(0), '', new Boolean(false), undefined",
            "0, '', new Boolean(false), undefined",
            "All of them are falsy"
        ],
        correct: "0, '', undefined"
    },
    {
        id: 25,
        question: "What's the output?\n\n(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();",
        options: ["1 undefined 2", "undefined undefined undefined", "1 1 2", "1 undefined undefined"],
        correct: "1 undefined 2"
    },
    {
        id: 26,
        question: "What's the output?\n\n[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2]\n);",
        options: [
            "[0, 1, 2, 3, 1, 2]",
            "[6, 1, 2]",
            "[1, 2, 0, 1, 2, 3]",
            "[1, 2, 6]"
        ],
        correct: "[1, 2, 0, 1, 2, 3]"
    }
];

export default questions;
