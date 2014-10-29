Package.describe({
  name: 'hitchcott:polyfill-injector',
  summary: 'Inject polyfills with zero redundancy based on User Agent',
  version: '0.0.1',
  git: 'https://github.com/hitchcott/meteor-polyfill-injector'
});

Npm.depends({
  "polyfill-service" : "http://github.com/hitchcott/polyfill-service/tarball/728854a9073609eca580460e3320cdf1731d8c95"
})

Package.onUse(function(api) {

 api.versionsFrom('1.0');

  api.use([
    'webapp',
    'coffeescript',
    'meteorhacks:inject-initial@1.0.2'
  ], 'server')

  api.addFiles([
    'polyfill-injector.coffee'
  ], 'server');
});