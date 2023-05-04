import axios from "axios";
const  OTPGenerator = () => {
    const [mobile , setMobile] = usestate('');
    const [error, setError] = usestate('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!/^[6-9]\d{9}$/.test(mobile)){
            setError('Invalid mobile number.');
            return;
        }
        try{
          const response = await axios.post(
            'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
            { mobile: parseInt (mobile) }
          );
          setSuccess(true);
          setMobile('')
          setTimeout(() => setSuccess(false) , 120000);
          }catch(err){
            setError(err.response.data.error);
          } 
        

    };
    return(
        <div>
            <h2>generateOTP</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mobile">Mobile number </label>
                <input
                className="field"
                type="number"
                id="mobile"
                value={mobile}
                onchange={(e) => setMobile(e.target.value)}
                />
                <button Class="button" type="submit">Get OTP</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className ="success">OTP SENT SUCCWSSFULLY.</p>}
        </div>
    );

};

export default OTPGenerator