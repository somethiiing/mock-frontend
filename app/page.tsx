import Link from "next/link";

function Card({ name, url }: { name: string; url: string }) {
  return (
    <Link href={url}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "content",
          padding: "20px",
          border: "1px solid black",
          borderRadius: "8px",
        }}
      >
        {name}
      </div>
    </Link>
  );
}

export default function Home() {
  const links = [
    {
      name: "Pay History",
      url: "/pay-history/readme",
    },
    {
      name: "Gallery",
      url: "/gallery/readme",
    },
    {
      name: "Carousel",
      url: "/carousel/readme",
    },
    {
      name: "Tic-Tac-Toe",
      url: "tictactoe/readme",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {links.map(({ name, url }) => (
          <Card key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  );
}
