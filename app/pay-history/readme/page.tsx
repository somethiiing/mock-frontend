import Image from "next/image";
import PayHistoryPreview from "../../assets/pay-history.png";

export default function PayHistoryReadme() {
  return (
    <div
      style={{
        maxWidth: "500px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Pay History</h1>
      <p>This is a simple pay history page that displays a list of payments made by the user.</p>
      <p>Your goal is to call the API `fetchData` and display the data similar to the image below.</p>

      <h2>Functional Requirements:</h2>
      <ul>
        <li>Fetch the data from the API: `fetchData`</li>
        <li>Each line of data should be displayed as a row</li>
        <ul>
          <li>If the payment status is already sent, the "sent" text and amount earned should be green.</li>
          <li>If the payment status is pending, that text should be yellow instead.</li>
          <li>Each row should be clickable and expand to show more details</li>
          <ul>
            <li>The additional details should just be the list of names.</li>
          </ul>
        </ul>
        <li>Styling should look similar to the image below, not pixel perfect but should look nice.</li>
      </ul>

      <Image style={{ marginTop: "40px" }} alt="payhistory" src={PayHistoryPreview} />
    </div>
  );
}
