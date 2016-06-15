# Four operation calculator
This calculator was built using Node.js, Express, and AngularJS. The user can select one of four different operations and input two numbers for calculation.

## API endpoints
The API has 4 endpoints:
+ /api/add
+ /api/subtract
+ /api/multiply
+ /api/divide

Each endpoint is designed to receive an object with the keys `firstNumber` and `secondNumber` with corresponding values that are of type number.  Each endpoint preforms its respective operation and returns and object `{number: *result*}`.

## License:
This project is licensed under the terms of the MIT license.
