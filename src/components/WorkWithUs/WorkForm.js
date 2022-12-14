import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 10px",
  borderColor: "white",
};


const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .required('فیلد الزامی'),
  phonenumber: Yup.number()
    .required('فیلد الزامی'),
  email: Yup.string().email('نامعتبر').required('فیلد الزامی'),
});

const WorkForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          phonenumber: '',
          email: '',
          description: ''
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values, {resetForm}) => {
          // same shape as initial values
          setLoading(true)
          const object = values;
          axios
            .post(
              "https://sheet.best/api/sheets/dd13bc57-63be-4c25-a45a-78fce09043c5",
              object
            )
            .then((response) => {
              console.log("--->>> " + response.data);
              resetForm();
              setLoading(false)
            })
            .catch((error) => { console.log("error" + error); });
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='inner-form flex-column'>
            <div className='inner-div-form'>
              <Field placeholder='نام' className='formik-field twin-field' name="username" style={touched.username && errors.username ? { border: "2px solid red" } : {}} />
              <Field placeholder='شماره تماس' className='formik-field twin-field' name="phonenumber" style={touched.phonenumber && errors.phonenumber ? { border: "2px solid red" } : {}} />
            </div>
            <Field placeholder='آدرس ایمیل' className='formik-field' name="email" style={touched.email && errors.email ? { border: "2px solid red" } : {}} />
            <Field as="textarea" placeholder='توضیحات' className='formik-field' name="description" style={touched.description && errors.description ? { border: "2px solid red", height: "calc(100% - 250px)" } : { height: "calc(100% - 250px)" }} />

            {/* {touched.email && errors.email && <span style={{color: "red"}}>{errors.email}</span>} */}
            <button className='formik-button' name='username' type="submit" disabled={loading}>
              {loading && (
                <ClipLoader loading={loading} cssOverride={override} size={20} />
              )}
              {!loading && <span>ارسال</span>} {loading && <span>در حال ارسال</span>}
            </button>
          </Form>
        )}

      </Formik>

    </>
  );
}
export default WorkForm;