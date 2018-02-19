@busybusy/utils
==============================================================================

[![npm version](https://badge.fury.io/js/busy-utils.svg)](https://badge.fury.io/js/busy-utils)

[![Build Status](https://travis-ci.org/busybusy/webapp-busy-utils.svg?branch=master)](https://travis-ci.org/busybusy/webapp-busy-utils)

[![Ember Observer Score](https://emberobserver.com/badges/busy-utils.svg)](https://emberobserver.com/addons/busy-utils)
[![Ember badge][ember-badge]][embadge]

[![Code Climate](https://codeclimate.com/github/busybusy/webapp-busy-utils/badges/gpa.svg)](https://codeclimate.com/github/busybusy/webapp-busy-utils)
[![Test Coverage](https://codeclimate.com/github/busybusy/webapp-busy-utils/badges/coverage.svg)](https://codeclimate.com/github/busybusy/webapp-busy-utils/coverage)
[![Issue Count](https://codeclimate.com/github/busybusy/webapp-busy-utils/badges/issue_count.svg)](https://codeclimate.com/github/busybusy/webapp-busy-utils)

[ember cli](https://ember-cli.com/) addon for utility functions

Installation
------------------------------------------------------------------------------

WARNING
This Package is deprecated! Please use @busy-web/utils going forward.

Install this addon using ember-cli
```
ember install @busybusy/utils
```

Usage
------------------------------------------------------------------------------

Use @busybusy/utils in your js files
```
import { Assert } from '@busybusy/utils';

Assert.test('some message', someTest === someValue);
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


License
------------------------------------------------------------------------------

[MIT License](https://opensource.org/licenses/mit-license.php)

[embadge]: http://embadge.io/
[ember-badge]: http://embadge.io/v1/badge.svg?start=2.14.0
