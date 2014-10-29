polyfill = Npm.require('polyfill-service')

if Meteor.isServer
  unless Package.appcache
    WebApp.connectHandlers.use (req, res, next) ->
      if Inject.appUrl(req.url)
        polyString = polyfill.getPolyfills
          uaString: req.headers['user-agent']
          minify: true
          polyfills: []
        Inject.rawHead "polyfill", "<script>#{polyString}</script>", res
      next()

