import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCOde] = useState("");
  const [input, setInput] = useState();
  function handleGenerateQrcode() {
    setQrCOde(input);
    setInput('')
  }
  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleGenerateQrcode()}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={300}
          background
          bgColor="#fff"
        />
      </div>
    </div>
  );
}
