module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
