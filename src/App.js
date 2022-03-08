import "./App.css";

import { Container, Row, Col } from "react-bootstrap";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Table from "./table";
import { ReactComponent as Plus } from "./assets/images/+.svg";

function App() {
  const FormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name is required"),
    pseudonym: Yup.string().required("Pseudonym is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address Is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.string()
      .required("Postal code is required")
      .length(5)
      .matches(/^[0-9]{5}/),
    driverLicense: Yup.string().required("Driver license is required"),
    primaryRole: Yup.string().required("Please define primary role"),
    additionalRole: Yup.string().required("Please define secondry role"),
    website: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please fill field"),
    facebook: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please fill field"),
    instagram: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please fill field"),
    twitter: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please fill field"),
  });

  //
  //
  return (
    <div style={{ margin: "40px auto", width: "80%" }}>
      <Container style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col xl="7" md="7" sm="12" xs="12">
            <div className="div">
              <h3>Name/Organization</h3>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  pseudonym: "",
                  email: "",
                  password: "",
                  address: "",
                  city: "",
                  country: "",
                  postalCode: "",
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Container style={{ padding: 0 }}>
                      <Row>
                        <Col md="6">
                          <label className="formLabel">First Name</label>

                          <Field
                            name="firstName"
                            className="input"
                            placeholder="First name"
                          />
                          {errors.firstName && touched.firstName ? (
                            <div
                              style={{
                                fontSize: 14,
                                color: "red",
                                margin: "0",
                              }}
                            >
                              {errors.firstName}
                            </div>
                          ) : null}
                        </Col>

                        <Col md="6">
                          <label className="formLabel">Last Name</label>
                          <Field
                            name="lastName"
                            className="input"
                            placeholder="Last name"
                          />
                          {errors.lastName && touched.lastName ? (
                            <div
                              style={{
                                fontSize: 14,
                                color: "red",
                                margin: "0",
                              }}
                            >
                              {errors.lastName}
                            </div>
                          ) : null}
                        </Col>

                        <Col md="12">
                          <label className="formLabel">Pseudonym</label>

                          <Field
                            name="pseudonym"
                            className="input"
                            type="text"
                            placeholder="Your pseudonym"
                          />
                          {errors.pseudonym && touched.pseudonym ? (
                            <div
                              style={{
                                fontSize: 14,
                                color: "red",
                                margin: "0",
                              }}
                            >
                              {errors.pseudonym}
                            </div>
                          ) : null}
                        </Col>

                        <Col md="6">
                          <div>
                            <label className="formLabel">Email</label>

                            <Field
                              name="email"
                              className="input"
                              type="email"
                              placeholder="sample@mail.com"
                            />
                            {errors.email && touched.email ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.email}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="6">
                          <div>
                            <label className="formLabel">Password</label>

                            <Field
                              name="password"
                              className="input"
                              type="password"
                              placeholder="**********"
                            />
                            {errors.password && touched.password ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="12">
                          <div className="link">
                            <a href="/">Change your password</a>
                          </div>
                        </Col>

                        <Col md="12">
                          <div controlId="formBasicPassword">
                            <label className="formLabel">Address</label>

                            <Field
                              name="address"
                              className="input"
                              type="text"
                              placeholder="Street Name"
                            />
                            {errors.address && touched.address ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.address}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="6">
                          <div>
                            <label className="formLabel">City</label>

                            <Field
                              name="city"
                              className="input"
                              type="text"
                              placeholder="Your city name"
                            />
                            {errors.city && touched.city ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.city}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="6">
                          <div controlId="formBasicPassword">
                            <label className="formLabel">Country</label>

                            <Field
                              name="country"
                              className="input"
                              type="text"
                              placeholder="Your country name"
                            />
                            {errors.country && touched.country ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.country}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="12">
                          <div controlId="formBasicPassword">
                            <label className="formLabel">Postal Code</label>

                            <Field
                              name="postalCode"
                              className="input"
                              type="number"
                              placeholder="postal code"
                            />
                            {errors.postalCode && touched.postalCode ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.postalCode}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>

          <Col xl="5" md="5" sm="12" xs="12">
            <div className="smallDiv">
              <h3>Digital Identity</h3>

              <Formik
                initialValues={{
                  driverLicense: "",
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Container style={{ padding: 0 }}>
                      <Row>
                        <Col md="12" xs="12">
                          <div style={{ marginBottom: 16 }}>
                            <label className="formLabel">
                              Uploaded document
                            </label>
                            <Field
                              name="driverLicense"
                              className="input"
                              type="email"
                              placeholder="Driver License"
                            />
                            {errors.driverLicense && touched.driverLicense ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.driverLicense}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="12">
                          <div>
                            <label class="cont">
                              Status: Confirmed
                              <input
                                type="radio"
                                checked="checked"
                                name="radio"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </Col>

                        <Col md="12">
                          <div className="link" style={{ marginTop: 36 }}>
                            <a href="/">Upload a new document</a>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="smallDiv">
              <h3>Roles</h3>

              <Formik
                initialValues={{
                  primaryRole: "",
                  additionalRole: "",
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Container style={{ padding: 0 }}>
                      <Row>
                        <Col md="12" xs="12">
                          <div>
                            <label className="formLabel">Primary Role</label>
                            <Field
                              name="primaryRole"
                              className="select"
                              as="select"
                            >
                              <option value="" label="Select" />
                              <option>Role</option>
                            </Field>
                            {errors.primaryRole && touched.primaryRole ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.primaryRole}
                              </div>
                            ) : null}
                          </div>
                        </Col>

                        <Col md="12" xs="12">
                          <div>
                            <label className="formLabel">
                              Additional Roles
                            </label>
                            <Field
                              name="additionalRole"
                              className="select"
                              as="select"
                            >
                              <option value="" label="Select" />
                              <option>Role</option>
                            </Field>

                            {errors.additionalRole && touched.additionalRole ? (
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "red",
                                  margin: "0",
                                }}
                              >
                                {errors.additionalRole}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col md="12">
            <div className="socialDiv">
              <h3>Social Information</h3>

              <Formik
                initialValues={{
                  website: "",
                  facebook: "",
                  instagram: "",
                  twitter: "",
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Container style={{ padding: 0, margin: 0 }}>
                    <Row>
                      <Col md="12">
                        <div style={{ marginBottom: 30 }}>
                          <label className="formLabel">Website</label>
                          <Field
                            name="website"
                            placeholder="www.yourwebsite.com"
                            className="websiteInp"
                          />
                          {errors.website && touched.website ? (
                            <div
                              style={{
                                fontSize: 14,
                                color: "red",
                                margin: "0",
                              }}
                            >
                              {errors.website}
                            </div>
                          ) : null}
                        </div>
                      </Col>

                      <Col md="12">
                        <Container style={{ padding: 0, margin: 0 }}>
                          <Row>
                            <Col md="1">
                              <label className="formLabel">Facebook</label>
                            </Col>

                            <Col md="">
                              <Field
                                name="facebook"
                                placeholder="www.yourwebsite.com"
                                className="websiteInp"
                                style={{ marginBottom: 16 }}
                              />
                              {errors.facebook && touched.facebook ? (
                                <div
                                  style={{
                                    fontSize: 14,
                                    color: "red",
                                    margin: "0",
                                  }}
                                >
                                  {errors.facebook}
                                </div>
                              ) : null}
                            </Col>
                          </Row>
                        </Container>
                      </Col>

                      <Col md="12">
                        <Container style={{ padding: 0, margin: 0 }}>
                          <Row>
                            <Col md="1">
                              <label
                                className="formLabel"
                                style={{ paddingTop: 15 }}
                              >
                                Instagram
                              </label>
                            </Col>

                            <Col md="11">
                              <Field
                                name="instagram"
                                placeholder="www.yourwebsite.com"
                                className="websiteInp"
                                style={{ marginBottom: 16, marginTop: 16 }}
                              />
                              {errors.instagram && touched.instagram ? (
                                <div
                                  style={{
                                    fontSize: 14,
                                    color: "red",
                                    margin: "0",
                                  }}
                                >
                                  {errors.instagram}
                                </div>
                              ) : null}
                            </Col>
                          </Row>
                        </Container>
                      </Col>

                      <Col md="12">
                        <Container style={{ padding: 0, margin: 0 }}>
                          <Row>
                            <Col md="1">
                              <label
                                style={{ paddingTop: 15 }}
                                className="formLabel"
                              >
                                Twitter
                              </label>
                            </Col>

                            <Col md="11">
                              <Field
                                name="twitter"
                                placeholder="www.yourwebsite.com"
                                className="websiteInp"
                                style={{ marginBottom: 16, marginTop: 16 }}
                              />
                              {errors.twitter && touched.twitter ? (
                                <div
                                  style={{
                                    fontSize: 14,
                                    color: "red",
                                    margin: "0",
                                  }}
                                >
                                  {errors.twitter}
                                </div>
                              ) : null}
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col md="12">
            <div className="socialDiv" style={{ height: "243px" }}>
              <h3>Team Members</h3>

              <Container>
                <Row>
                  <Col md="2">
                    <h6>Name</h6>
                  </Col>

                  <Col md="2">
                    <h6>Name</h6>
                  </Col>

                  <Col md="2">
                    <h6>Name</h6>
                  </Col>

                  <Col md="3">
                    <div className="round">
                      <Plus />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col md="12">
            <div className="socialDiv">
              <h3>Billing Information</h3>

              <Table />

              <div className="link">
                <a href="/">Change your password</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
