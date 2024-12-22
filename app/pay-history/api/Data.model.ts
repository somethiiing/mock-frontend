interface Data {
  date: Date;
  amount: number;
  items: number;
  paymentStatus: "pending" | "Sent to Paypal";
  details: string[];
}

export type { Data };
