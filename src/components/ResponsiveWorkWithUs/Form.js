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

const WForm = ({ setIsOpen }) => {
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
                onSubmit={values => {
                    // same shape as initial values
                    setLoading(true);
                    const object = values;
                    axios
                        .post(
                            "https://sheet.best/api/sheets/dd13bc57-63be-4c25-a45a-78fce09043c5",
                            object
                        )
                        .then((response) => {
                            console.log("--->>> " + response.data);
                            setLoading(false)
                            setIsOpen(false)
                        })
                        .catch((error) => { console.log("error" + error); });
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='flex-column' style={{ height: '600px', justifyContent: 'space-between' }}>
                        <Field placeholder='نام' className='formik-field' name="username" style={touched.username && errors.username ? { border: "2px solid red", } : {}} />
                        <Field placeholder='شماره تماس' className='formik-field' name="phonenumber" style={touched.phonenumber && errors.phonenumber ? { border: "2px solid red" } : {}} />
                        <Field placeholder='آدرس ایمیل' className='formik-field' name="email" style={touched.email && errors.email ? { border: "2px solid red" } : {}} />
                        <Field as="textarea" placeholder='توضیحات' className='formik-field' name="description" style={touched.description && errors.description ? { border: "2px solid red", height: "calc(100% - 230px)" } : { height: "calc(100% - 250px)" }} />
                        <button className='formik-button' style={{ width: '100%', borderRadius: '20px', height: '40px' }} type="submit" disabled={loading}> 
                        {loading && (
                            <ClipLoader loading={loading} cssOverride={override} size={20} /> 
                        )}
                         {!loading && <span>ارسال</span>} {loading && <span>در حال ارسال</span>}</button>
                    </Form>
                )}
            </Formik>

        </>
    );
}
export default WForm;