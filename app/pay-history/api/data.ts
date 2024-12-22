import { Data } from "./Data.model";

const names = [
  "John",
  "Jane",
  "Doe",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Michael",
  "Sarah",
  "James",
  "Emma",
  "William",
  "Olivia",
  "Benjamin",
  "Sophia",
  "Lucas",
  "Isabella",
  "Henry",
  "Mia",
  "Alexander",
  "Charlotte",
  "Daniel",
  "Ava",
  "Matthew",
  "Amelia",
  "Joseph",
  "Harper",
];

function generateRandomData(): Data[] {
  let result: Data[] = [];
  let date = new Date();

  for (let i = 0; i < 20; i++) {
    const temp: Data = {
      date: new Date(date.setDate(date.getDate() - 3 * i)),
      amount: Number((Math.random() * 500 + 500).toFixed(2)),
      items: Math.floor(Math.random() * 20) + 1,
      paymentStatus: i < 4 ? "pending" : "Sent to Paypal",
      details: [],
    };

    for (let i = 0; i < temp.items; i++) {
      temp.details.push(names[Math.floor(Math.random() * names.length)]);
    }

    result.push(temp);
  }

  return result;
}

export const data = generateRandomData();
