# Challenge Summary
**Problem #2**

Write a function that reads through a file one line at a time and finds all lines that have these elements in them:

    1. The line starts with 'WARNING<n...>' where 'n' is a variable length integer, e.g. WARNING1, WARNING10759, etc. WARNING must be all caps and there must be at least one integer following it -- no spaces before the integer

    2. The line ends with one or more spaces followed by 3 asterisks " ***"

    3. There can be any text content between these 2 elements, or no content between them e.g "WARNING1 blahblah ***", or "WARNING1 ***" are valid lines.

    4. For all lines that match the specification above, print out the line number and the line content.

    5. Solve in Python.

## Approach
Use regex expressions to find matches for each line.

## Instructions
Clone the repo from GitHub: https://github.com/rebecca-pete/icc.git

Run 'npm install --save express body-parser fs cors'.

Run 'npm i --save-dev nodemon'. This re-starts the server automatically anytime file changes are made.

Inside the command line interface, navigate to the **problem2** folder, type 'nodemon' and press ENTER.

Open a browser window, type the address 'http://localhost:3200/readFile', and press ENTER.

Open the command line interface to see the returned messages from the method.