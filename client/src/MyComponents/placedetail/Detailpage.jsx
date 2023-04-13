// import React from 'react';
// import './App.css';
// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {

//   render() {

// };
// }

// export default App;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Detailpage = () => {
  return (
    <div className="maincontainer">
      <div class="container">
        <div class="py-5 text-center">
          <h2>Checkout form</h2>
          <p class="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Product name</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">-$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <div class="input-group-append">
                  <button type="button" class="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div class="invalid-feedback">Your username is required.</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="mb-3">
                <label for="address2">
                  Address 2 <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LA">Ladakh</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PY">Puducherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <div class="row">
                <p>Address Type</p>
                <div class="col-md-6 mb-3">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Home (All day delivery)</label>
                  <br />
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Work(Delivery between 10 AM - 5 PM)</label>
                  <br />
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    checked
                    required
                  />
                  <label class="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="button">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>

        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">&copy; 2020-2021 therichpost.com</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Detailpage;
