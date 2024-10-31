class Ticket {
  destinationName: string;
  price: number;
  status: string;

  constructor(destinationName: string, price: number, status: string) {
    this.destinationName = destinationName;
    this.price = price;
    this.status = status;
  }
}

function manageDataBaseOfTickets(
  arrayOfTickets: string[],
  sortingCriteria: string
) {
  let NewArrayOfTickets = arrayOfTickets.map((ticket) => {
    let [destination, price, status] = ticket.split("|");
    return new Ticket(destination, Number(price), status);
  });

  let sortedArrayOfTickets: object[];

  if (sortingCriteria == "destination") {
    sortedArrayOfTickets = NewArrayOfTickets.sort((a, b) =>
      a.destinationName.localeCompare(b.destinationName)
    );
    console.log(sortedArrayOfTickets);
  }
  if (sortingCriteria == "status") {
    sortedArrayOfTickets = NewArrayOfTickets.sort((a, b) =>
      a.status.localeCompare(b.status)
    );
    console.log(sortedArrayOfTickets);
  }else {
    sortedArrayOfTickets = NewArrayOfTickets.sort((a, b) => b.price - a.price);
    console.log(sortedArrayOfTickets);
  }
}

manageDataBaseOfTickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
