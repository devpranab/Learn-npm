//customize code of package/module

//date-format module
let format = require('date-format');
//let time = format.asString(new Date()); // defaults to ISO8601 format
//let time = format(format.ISO8601_WITH_TZ_OFFSET_FORMAT, new Date()); // in ISO8601 with timezone
//let time = format('hh:mm:ss.SSS', new Date()); // just the time

//Format string can be anything, but the following letters will be replaced (and leading zeroes added if necessary):
let time = format('dd/MM/YYYY', new Date());
console.log(time);