Package.describe({
  name: 'clinical:default-theme',
  version: '0.1.0',
  summary: 'Default color theme for ClinicalFramework apps.',
  git: 'https://github.com/clinical-meteor/default-theme',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('clinical:theming@0.4.5');
  api.addFiles('client/default-theme.js', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:default-theme');
});
