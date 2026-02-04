# Synchronize start and finish folders Walkthrough

The `start` folder has been synchronized with the features present in the `finish` folder, ensuring consistency for the exam constraints and requirements.

## Changes

### 1. `start/index.html`

- Added **Department Filter** dropdown before the employee table.
- Updated **Employee Detail Modal** to include an image column and adjusted the layout (width increased from 500px to 700px).

### 2. `start/script.js`

- Updated the `employees` array to include the `image` property for each employee record.

### 3. `start/images`

- Copied the `images` directory (containing employee photos and default image) from the `finish` folder.

## Verification Content

### Directory Structure Matches
The `start` folder now contains the `images` directory, matching the structure required by the updated `index.html`.

### Code Consistency
- `start/index.html` now contains the necessary HTML elements referenced in the assignment (filter, modal elements).
- `start/script.js` now contains the necessary data fields (`image`) required for the full Implementation.

## Next Steps
The student can now proceed with implementing the JavaScript logic as per the `EmployeeExamSpec.md` without running into missing HTML elements or data properties.
