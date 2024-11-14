import React from 'react';

const FormSubmit = () => {
  return (
    <div class="container">
      <h1>FormSubmit Demo</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/ac7d2a09acddfe8ce755e68040e9ad1b"
        method="POST"
      >
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="col">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea
            placeholder="Your Message"
            class="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for your email. We will get back to you shortly."
        ></input>
        <button type="submit" class="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default FormSubmit;
