import { useState } from "react";
import "../css/donationContainer.css";
import StripeCheckout from "react-stripe-checkout";

function DonationContainer() {
  const [customAmount, setCustomAmount] = useState(0); // Store custom donation amount
  const [showCustomInput, setShowCustomInput] = useState(false); // Toggle custom input visibility
  const [confirmedAmount, setConfirmedAmount] = useState(null); // Confirm the donation amount
  const [showButton, setShowButton] = useState(true); // Toggle buttons
  const product = {
    name: "",
    price: 0
  }

  const handleAmount = (amount) => {
    // setProduct({
    //   name: `${amount}`,
    //   price: amount,
    // });
    product.name = `Purchase of ${amount} was made`;
    product.price = amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((err) => console.log(err));
  };

  const handleCustomDonate = () => {
        if (customAmount) {
          // setProduct({
          //   name: `${customAmount}`,
          //   price: customAmount
          // })
          // setConfirmedAmount(customAmount);
          product.name = `Purchase of ${customAmount} was made`;
          product.price = customAmount;
          setShowCustomInput(false); // Hide custom input after confirmation
        }
      };

  return (
    <>
      <body>
        <div class="donate-section">
          <div class="donation-container">
            <div class="donate-section-heading">Support Us</div>
            <div class="donate-section-para">
              Your donation helps us continue our work. Thank you for your
              support!
            </div>
            <div className="with-custom-donations">
            <StripeCheckout
              stripeKey={process.env.REACT_APP_KEY}
              token={makePayment}
            >
              <div id="donation-options" class="donation-options">
                <button
                  onClick={() => {
                    handleAmount(25);
                  }}
                  data-amount="25"
                  class="donation-button-1"
                >
                  Donate $25
                </button>
                <button
                  onClick={() => {
                    handleAmount(50);
                  }}
                  data-amount="50"
                  class="donation-button-2"
                >
                  Donate $50
                </button>
                <button
                  onClick={() => {
                    handleAmount(100);
                  }}
                  data-amount="100"
                  class="donation-button-3"
                >
                  Donate $100
                </button>
              </div>
            </StripeCheckout>
            <button
                  data-amount="custom"
                  id="donation-button-custom"
                  className="donation-button-custom"
                  onClick={() => {
                    setShowCustomInput(true);
                    setShowButton(true); 
                  }}
                >
                  Custom Amount
                </button>
                {showCustomInput && (
                  <div id="custom-donation">
                    {showButton && (
                      <>
                        <input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter Amount in USD"
                          value={customAmount || ""}
                          onChange={(e) => setCustomAmount(e.target.value)}
                        />
                        <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={makePayment}
                        >
                        <button
                          id="custom-donate-button"
                          onClick={handleCustomDonate}
                        >
                          Confirm Amount
                        </button>
                        </StripeCheckout>
                        <button
                          className="cancel-button"
                          onClick={() => {
                            setShowButton(false);
                            setShowCustomInput(false);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default DonationContainer;

// import React, { useState } from "react";
// import "../css/donationContainer.css"; // Your existing CSS file
// import StripeCheckout from "react-stripe-checkout"; // For Stripe payments

// function DonationContainer() {
//   const [customAmount, setCustomAmount] = useState(null); // Store custom donation amount
//   const [showCustomInput, setShowCustomInput] = useState(false); // Toggle custom input visibility
//   const [confirmedAmount, setConfirmedAmount] = useState(null); // Confirm the donation amount
//   const [showButton, setShowButton] = useState(true); // Toggle buttons

//   // Handle payment processing
//   const handleButtonClick = async (amount) => {
//     try {
//       const response = await fetch(`http://localhost:8282/payment`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount }), // Send donation amount to server
//       });

//       const { url } = await response.json();
//       if (url) {
//         window.location.href = url; // Redirect to Stripe payment page
//       } else {
//         console.error("No URL returned from the server");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleCustomDonate = () => {
//     if (customAmount) {
//       setConfirmedAmount(customAmount); // Set confirmed custom amount
//       setShowCustomInput(false); // Hide custom input after confirmation
//     }
//   };

//   return (
//     <div className="donate-section">
//       <div className="donation-container">
//         <div className="donate-section-heading">Support Us</div>
//         <div className="donate-section-para">
//           Your donation helps us continue our work. Thank you for your support!
//         </div>
//         <div id="donation-options" className="donation-options">
//           {/* Fixed donation buttons */}
//           <button
//             data-amount="25"
//             className="donation-button-1"
//             onClick={() => setConfirmedAmount(25)}
//           >
//             Donate $25
//           </button>
//           <button
//             data-amount="50"
//             className="donation-button-2"
//             onClick={() => setConfirmedAmount(50)}
//           >
//             Donate $50
//           </button>
//           <button
//             data-amount="100"
//             className="donation-button-3"
//             onClick={() => setConfirmedAmount(100)}
//           >
//             Donate $100
//           </button>
//           {/* Custom donation button */}
//           <button
//             data-amount="custom"
//             id="donation-button-custom"
//             className="donation-button-custom"
//             onClick={() => {
//               setShowCustomInput(true);
//               setShowButton(true); // Reset button state when custom amount is clicked
//             }}
//           >
//             Custom Amount
//           </button>
//         </div>

//         {/* Show custom amount input when the custom button is clicked */}
//         {showCustomInput && (
//           <div id="custom-donation">
//             {showButton && (
//               <>
//                 <input
//                   id="custom-amount"
//                   type="number"
//                   placeholder="Enter Amount in USD"
//                   value={customAmount || ""}
//                   onChange={(e) => setCustomAmount(e.target.value)}
//                 />
//                 <button id="custom-donate-button" onClick={handleCustomDonate}>
//                   Confirm Amount
//                 </button>
//                 <button
//                   className="cancel-button"
//                   onClick={() => {
//                     setShowButton(false);
//                     setShowCustomInput(false); // Hide custom input when canceled
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </>
//             )}
//           </div>
//         )}

//         {/* Display confirmed amount and trigger Stripe payment */}
//         {confirmedAmount && (
//           <div className="confirm-div">
//             <p className="confirm-donation">
//               Confirm Donation: ${confirmedAmount}
//             </p>
//             <button className="cancel-button" onClick={() => setConfirmedAmount(null)}>Cancel</button>
//             <StripeCheckout
//               stripeKey={process.env.REACT_APP_KEY} // Your Stripe key
//               token={() => handleButtonClick(confirmedAmount)}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DonationContainer;
