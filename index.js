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

function exactMatch(list_of_drivers, query) {
  return list_of_drivers.filter(function(driver) {

    for (const key in list_of_drivers) {
      driver[key] = query[key];
    }
    return driver[key] === 'value';
  })
}

// function exactMatchToList(list_of_drivers, attribute, value) {
//   return list_of_drivers.filter(function(driver) {
//     return driver[attribute] === value;
//   }).map(function(driver) {
//     return driver.name;
//   });
// }
