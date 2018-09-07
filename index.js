// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  }).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(list_of_drivers, attribute_match) {
  return list_of_drivers.filter(function(driver) {
    key = Object.keys(attribute_match);

    return driver[key] === attribute_match[key];
  })
}

// function exactMatchToList(list_of_drivers, attribute, value) {
//   return list_of_drivers.filter(function(driver) {
//     return driver[attribute] === value;
//   }).map(function(driver) {
//     return driver.name;
//   });
// }
