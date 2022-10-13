import React from "react";
import Envelope from "./Envelope";

export default function App() {
  const toPerson = "Mr. Sender";
  const fromPerson = "Mrs Receiver";
  const addressTo = (
    <>
      {" "}
      <p>123 Fake Str.</p>
      <p>Boston, MA 02118</p>
    </>
  );

  const addressFrom = (
    <>
      <p>123 Fake Str.</p>
      <p>San Fransisco, CA 94101</p>
    </>
  );
  return (
    <div>
      <Envelope
        toPerson={toPerson}
        fromPerson={fromPerson}
        addressTo={addressTo}
        addressFrom={addressFrom}
      ></Envelope>
    </div>
  );
}