import React, { useState } from "react";


function App() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleGenerateOTP = () => {
    // Check if mobile number is valid
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Invalid mobile number");
      return;
    }

    // Call the API to generate OTP
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile: mobile }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to generate OTP");
        }
        // Clear the input on successful OTP send
        setMobile("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Generate OTP</h1>
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter your mobile number"
      />
      <button onClick={handleGenerateOTP}>Generate OTP</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Mobile;
