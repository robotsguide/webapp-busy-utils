/* globals define, uuid, CryptoJS */

(function() {
  /**
   * import node-uuid
   */
  define('node-uuid', [], function() {
    'use strict';
    return {default: uuid};
  });

  /**
   * import crypto-js
   */
  define('crypto-js', [], function() {
    'use strict';
    return {default: CryptoJS};
  });
})();
