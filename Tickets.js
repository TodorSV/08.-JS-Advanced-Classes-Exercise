function tickets(databaseTickets, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let result = [];
  databaseTickets.map((lineEl) => {
    // ticket has a destination, a price, and a status
    let [destination, price, status] = lineEl.split("|"); // Split and take database of tickets
    price = Number(price); // Parse the price
    result.push(new Ticket(destination, price, status));
  });

  // Always sort in ascending order (the default behavior for alphabetical sort).
  //If two tickets compare the same, use order of appearance. See the examples for more information.

  return result.sort((a, b) => {
    if (typeof a[criteria] === "number") {
      return a[criteria] - b[criteria];
    } else {
      return a[criteria].localeCompare(b[criteria]);
    }
  });
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
