import React from "react";

const Faq = () => {
  return (
    <div className="container my-5 p-4 border rounded shadow-lg bg-white">
      <h2 className="text-center mb-4 text-primary fw-bold">Organ Donation FAQ & Instructions</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed bg-info text-white fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is organ donation?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Organ donation is the process of giving an organ or a part of an organ to save or improve someone else's life.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-info text-white fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Who can donate organs?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Almost anyone can be an organ donor, regardless of age or medical history. Doctors will evaluate suitability at the time of donation.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-info text-white fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I register as an organ donor?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can register as an organ donor through your national donor registry, a local hospital, or an organ donation website.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 border rounded bg-light">
        <h4 className="text-success fw-bold">Instructions for Donors</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ Register online through the official organ donation website.</li>
          <li className="list-group-item">✅ Inform your family and friends about your decision.</li>
          <li className="list-group-item">✅ Carry an organ donor card.</li>
          <li className="list-group-item">✅ Keep your contact details updated in the donor registry.</li>
          <li className="list-group-item">✅ Understand the legal and medical aspects of organ donation.</li>
        </ul>
      </div>

      <div className="mt-5 p-4 text-center bg-warning text-dark border rounded">
        <h4 className="fw-bold">Need Help?</h4>
        <p className="mb-1">Call our 24/7 Organ Donation Helpline:</p>
        <p className="fs-4 fw-bold text-danger">📞 +1-800-ORG-DONATE</p>
        <p className="small">(Available 24/7 for any queries related to organ donation)</p>
      </div>
    </div>
  );
};

export default Faq;
