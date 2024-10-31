var Ticket = /** @class */ (function () {
    function Ticket(destinationName, price, status) {
        this.destinationName = destinationName;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function manageDataBaseOfTickets(arrayOfTickets, sortingCriteria) {
    var NewArrayOfTickets = arrayOfTickets.map(function (ticket) {
        var _a = ticket.split("|"), destination = _a[0], price = _a[1], status = _a[2];
        return new Ticket(destination, Number(price), status);
    });
    var sortedArrayOfTickets;
    if (sortingCriteria == "destination") {
        sortedArrayOfTickets = NewArrayOfTickets.sort(function (a, b) {
            return a.destinationName.localeCompare(b.destinationName);
        });
        console.log(sortedArrayOfTickets);
    }
    if (sortingCriteria == "status") {
        sortedArrayOfTickets = NewArrayOfTickets.sort(function (a, b) {
            return a.status.localeCompare(b.status);
        });
        console.log(sortedArrayOfTickets);
    }
    else {
        sortedArrayOfTickets = NewArrayOfTickets.sort(function (a, b) { return b.price - a.price; });
        console.log(sortedArrayOfTickets);
    }
}
manageDataBaseOfTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status");
