importScripts("../node_modules/systemjs/dist/system.src.js",
              "../node_modules/angular2/bundles/angular2-polyfills.js",
              "../node_modules/rxjs/bundles/Rx.js",
              "../node_modules/angular2/bundles/web_worker/worker.dev.js");

System.config({
  packages: {"app": {defaultExtension: "js"}}
});

System.import("app/background");
