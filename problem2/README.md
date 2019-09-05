# icc

# Challenge Summary
Problem #2
Write a function that reads through a file one line at a time and finds all lines that have these elements in them:

    1. The line starts with 'WARNING<n...>' where 'n' is a variable length integer, e.g. WARNING1, WARNING10759, etc. WARNING must be all caps and there must be at least one integer following it -- no spaces before the integer

    2. The line ends with one or more spaces followed by 3 asterisks " ***"

    3. There can be any text content between these 2 elements, or no content between them e.g "WARNING1 blahblah ***", or "WARNING1 ***" are valid lines.

    4. For all lines that match the specification above, print out the line number and the line content.

    5. Solve in Python.

## Approach & Efficiency
Use regex expressions to find matches for each line.