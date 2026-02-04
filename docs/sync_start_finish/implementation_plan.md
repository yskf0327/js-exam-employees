# Implementation Plan - Synchronize start and finish folders

The goal is to resolve inconsistencies between the `start` and `finish` folders. The `start` folder is missing several features required by the specification and `start/script.js` comments.

## User Review Required
> [!IMPORTANT]
> This change modifies the provided `start` skeleton code.
> - Adds "Department Filter" HTML to `index.html`.
> - Adds "Image Modal" HTML to `index.html`.
> - Adds `image` property to `employees` data in `script.js`.
> - Adds `images` directory.

## Proposed Changes

### Start Folder
#### [MODIFY] [index.html](file:///c:/Users/mauve/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/10_work/12_javascript/exam/employee/start/index.html)
- Add the Department Filter HTML block before the table.
- Update the Modal HTML structure to support image display (split into columns).

#### [MODIFY] [script.js](file:///c:/Users/mauve/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/10_work/12_javascript/exam/employee/start/script.js)
- Add `image` property to each object in the `employees` array.

#### [NEW] [images](file:///c:/Users/mauve/OneDrive/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/10_work/12_javascript/exam/employee/start/images)
- Copy the entire `images` directory from `finish` to `start`.

## Verification Plan

### Manual Verification
1. Open `start/index.html` in a browser.
2. Verify the "Department Filter" dropdown appears.
3. Verify the Modal structure looks correct (though it won't show data until JS is implemented by the student, the layout should be ready).
4. Check `start/script.js` to ensure the `employees` data matches the expected structure.
