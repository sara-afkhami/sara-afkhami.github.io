import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .required('فیلد الزامی'),
    phonenumber: Yup.number()
    .required('فیلد الزامی'),
  email: Yup.string().email('نامعتبر').required('فیلد الزامی'),
});

const WorkForm = () => {
  function notify() {
    toast.dark("Hey, see how easy!");
  }

  return (
      <>
        <Formik
        initialValues={{
          username: '',
          phonenumber:'',
          email: '',
          description:''
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
          notify();
        }}
      >
        {({ errors, touched }) => (
          <Form className='inner-form flex-column'>
            <div className='inner-div-form'>
              <Field placeholder='نام' className='formik-field twin-field' name="username" style={touched.username && errors.username ? { border: "2px solid red" } : {}} />
              <Field placeholder='شماره تماس' className='formik-field twin-field' name="phonenumber" style={touched.phonenumber && errors.phonenumber ? { border: "2px solid red" } : {}} />
            </div>
            <Field placeholder='آدرس ایمیل' className='formik-field' name="email" style={touched.email && errors.email ? { border: "2px solid red" } : {}} />
            <Field placeholder='توضیحات' className='formik-field' name="description" style={touched.description && errors.description ? { border: "2px solid red", height: "calc(100% - 200px)" } : {height: "calc(100% - 200px)"}} />
            
            {/* {touched.email && errors.email && <span style={{color: "red"}}>{errors.email}</span>} */}
            <button className='formik-button' name='username' type="submit">ثبت اطلاعات</button>
          </Form>
        )}

      </Formik>

      </>
  );
}
export default WorkForm;