## Patient Medical Records

### Installation and Opening with localhost
```
git clone https://github.com/PRATAP-KUMAR/patient-records
cd patient-records
npm install
npm run dev
```

### Jest unit testing
npm run test


```
$ npm run test

> pratap_panabaka_side_project@0.0.0 test
> ./node_modules/.bin/react-scripts test --watchAll=false --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit

 PASS  src/tests/App.test.js
  ✓ Test Initial Loading of the App (31 ms)
  ✓ Show alert on clicking show button if no patient is selected (13 ms)
  ✓ Test getting patient details (56 ms)
  ✓ Clicking the next button should display next patient (62 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.948 s, estimated 2 s
Ran all test suites.
$ 
```

![Jest Unit Testing](https://github.com/user-attachments/assets/d6b26e77-841b-4bb9-a921-a6f6c5db63e8)

![Patients Medical Record](https://github.com/user-attachments/assets/799fc25a-9ab8-4c53-bd0e-afef82c8e90e)
