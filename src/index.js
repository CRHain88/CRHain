var riot = require('riot');

require('./tags/offerings.tag');

document.addEventListener('DOMContentLoaded', function () {
    riot.mount('offerings');
});
