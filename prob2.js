/**
 * Problem 2
 * Write an algorithm that will take two dates and tell 
 * you if they are more than a month apart, less than a 
 * month apart or exactly a month apart.
 */
var print = console.log;

var daysInMonth = function (month, year) {
  var days = {
    1: 31,
    2: 28, //29 on leap
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };

  if (month == 2 && isLeapYear(year)) {
    return 29;
  }

  return days[month];
};

var isLeapYear = function (year) {
  if (year % 4 > 0) return false;
  if (year % 100 > 0) return true;
  if (year % 400 > 0) return false;
  return true;
};

var getPieceOfMonth = function (date, part) {
  var date = date.split('/');
  if (part === 'm')
    return Number(date[0]);
  if (part === 'd')
    return Number(date[1]);
  if (part === 'y')
    return Number(date[2]);
}

var checkDifference = function (date1, date2) {
  var fd = getPieceOfMonth(date1, 'd');
  var fm = getPieceOfMonth(date1, 'm');
  var fy = getPieceOfMonth(date1, 'y');
  var sd = getPieceOfMonth(date2, 'd');
  var sm = getPieceOfMonth(date2, 'm');
  var sy = getPieceOfMonth(date2, 'y');
  if (sy - fy === 1 && sm === 1 && fm === 12 && (fd + 31) % 31 === sd) return 0;
  if (sy - fy > 0) return 1;
  if (Math.abs(fm - sm) > 1) return 1;
  if (fm === sm && fy === sy) return -1;
  if (sd === (fd + daysInMonth(fm, fy)) % daysInMonth(fm, fy)) return 0;
  return false;
};

function main () {
  var first = process.argv[2];
  var second = process.argv[3];
  var difference = checkDifference(first, second);
  switch(difference) {
    case -1:
      print('Less than a month between ', first, ' and ', second);
      break;
    case 1:
      print('More than a month between ', first, ' and ', second);
      break;
    case 0:
      print('Exactly a month between ', first, ' and ', second);
      break;
    default:
      print('Wrong');
      break;
  }
};

main();