(function() {
  'use strict';

  angular
    .module('belong')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
