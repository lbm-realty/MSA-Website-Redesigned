import "../css/donationContainer.css";

function DonationContainer() {
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
            <div id="donation-options" class="donation-options">
              <button data-amount="25" class="donation-button-1">
                Donate $25
              </button>
              <button data-amount="50" class="donation-button-2">
                Donate $50
              </button>
              <button data-amount="100" class="donation-button-3">
                Donate $100
              </button>
              <button
                data-amount="custom"
                id="donation-button-custom"
                class="donation-button-custom"
              >
                Custom Amount
              </button>
            </div>
          </div>
        </div>
        <div class="black-box-2"></div>
      </body>
    </>
  );
}

export default DonationContainer;
