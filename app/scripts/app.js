(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock! v0.3.2');
    //document.querySelector('app-router').go('/');

    document.routerGo = function(params) {
      var event = new CustomEvent("strx-router", { "detail" : params });
      document.dispatchEvent(event);
    };
  });

  document._storage = {};
  document.storage = function(name, data) {
    if (data) {
      document._storage[name] = data;
    }
    return document._storage[name];
  };
  document.storage('channelData', channelData);

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
