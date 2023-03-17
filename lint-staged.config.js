module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'craco test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
  // this will Format css and scss
  '*.{css,scss}': 'stylelint --fix',
};
