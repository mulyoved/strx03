(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock! v0.3.2');
    //document.querySelector('app-router').go('/');

    window.routerGo = function(params) {
      var event = new CustomEvent("strx-router", { "detail" : params });
      document.dispatchEvent(event);
    };
  });

  console.log('configure storage');
  window._storage = {};
  window.storage = function(name, data) {
    if (data) {
      window._storage[name] = data;
    }
    return window._storage[name];
  };
  window.storage('channelData', channelData);
  console.log('configure storage completed', window);

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
