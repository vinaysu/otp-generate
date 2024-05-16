import axios from "axios";
import { useState } from "react";

const OTPGenerator = () => {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");

    const handleGetOTP = async () => {
        try {
            const response = await axios.post(
                "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
                { mobile: parseInt(mobile) }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const verifyResponse = await axios.post(
                "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
                { mobile: parseInt(mobile), otp: parseInt(otp) }
            );
            alert("success");
        } catch (err) {
            alert("error");
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Generate OTP</h2>
            <input value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <button className="button" onClick={handleGetOTP}>
                Get OTP
            </button>

            <div>
                <input value={otp} onChange={(e) => setOtp(e.target.value)} />
                <button className="button" onClick={handleVerifyOTP}>
                    Verify OTP
                </button>
            </div>
        </div>
    );
};

export default OTPGenerator;
