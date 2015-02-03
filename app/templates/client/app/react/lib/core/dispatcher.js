'use strict';

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var PayloadSources = require('../constants/payload-sources');

var defaultDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = defaultDispatcher;
