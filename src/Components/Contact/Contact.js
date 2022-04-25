import { forwardRef } from "react";
import { Wrapper } from "./Contact.styles";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";
import { Formik, Form, Field } from "formik";
import { UilMessage } from "@iconscout/react-unicons";

const Contact = forwardRef((props, ref) => {
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  const validateField = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <Wrapper className="contact section" id="contact" ref={ref}>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone className="contact__icon" size="35" />
            <div>
              <h3 className="contact__title">Phone</h3>
              <span className="contact__subtitle">Available on request</span>
            </div>
          </div>
          <div className="contact__information">
            <UilEnvelope className="contact__icon" size="35" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                charlesjeremiah@gmail.com
              </span>
            </div>
          </div>

          <div className="contact__information">
            <UilMapMarker className="contact__icon" size="35" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{ name: "", email: "", project: "", message: "" }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label className="contact__label">Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="contact__input"
                    validate={validateField}
                    autoComplete="off"
                  />
                  {errors.name && touched.name && (
                    <div className="contact__error">{errors.name}</div>
                  )}
                </div>
                <div className="contact__content">
                  <label className="contact__label">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="contact__input"
                    validate={validateEmail}
                    autoComplete="off"
                  />
                  {errors.email && touched.email && (
                    <div className="contact__error">{errors.email}</div>
                  )}
                </div>
              </div>
              <div className="contact__content">
                <label className="contact__label">Project</label>
                <Field
                  type="text"
                  name="project"
                  className="contact__input"
                  validate={validateField}
                />
                {errors.project && touched.project && (
                  <div className="contact__error">{errors.project}</div>
                )}
              </div>
              <div className="contact__content">
                <label className="contact__label">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  className="contact__input"
                  validate={validateField}
                />
                {errors.message && touched.message && (
                  <div className="contact__error">{errors.message}</div>
                )}
              </div>

              <div>
                <button className="button button--flex" type="submit">
                  Send Mesage
                  <UilMessage className="button__icon" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
  );
});

export default Contact;
