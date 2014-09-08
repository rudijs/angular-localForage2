## Setup

- git clone git@github.com:rudijs/angular-localForage2.git
- cd angular-localForage2
- npm install
- bower install
- gulp karma

## Tests

Lets see if the failing tests on my setup also fail for you.

So running the AngularJS unit tests as is the 2nd test does not pass.
Only the localforage promise is resolved - not also the $q promises.

If you toggle these lines from uncommented to commented out in file:

app/modules/angular-localForage2_spec.js

Lines 16 and 17

and

Lines 19 and (20 + 21)

Then the tests pass.

