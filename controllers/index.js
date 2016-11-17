'use strict';

var events = require('../models/events');


/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
   'events': events.all,
   'title': 'Save the Date',
    'tagline': 'Live your life with no mo FOMO'
    };
  response.render('index.html', contextData);
}

module.exports = {
  'index': index
};
