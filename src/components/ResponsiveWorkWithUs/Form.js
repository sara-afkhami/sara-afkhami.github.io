import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .required('فیلد الزامی'),
    phonenumber: Yup.number()
        .required('فیلد الزامی'),
    email: Yup.string().email('نامعتبر').required('فیلد الزامی'),
});

const WForm = ({setShowForm}) => {

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
                    const object = values;
                    axios
                        .post(
                            "https://sheet.best/api/sheets/dd13bc57-63be-4c25-a45a-78fce09043c5",
                            object
                        )
                        .then((response) => {
                            console.log("--->>> " + response.data);
                            setShowForm(false)
                        })
                        .catch((error) => { console.log("error" + error); });
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='flex-column' style={{height: '90%', justifyContent: 'space-between'}}>
                        <Field placeholder='نام' className='formik-field' name="username" style={touched.username && errors.username ? { border: "2px solid red",  } : {}} />
                        <Field placeholder='شماره تماس' className='formik-field' name="phonenumber" style={touched.phonenumber && errors.phonenumber ? { border: "2px solid red" } : {}} />
                        <Field placeholder='آدرس ایمیل' className='formik-field' name="email" style={touched.email && errors.email ? { border: "2px solid red" } : {}} />
                        <Field as="textarea" placeholder='توضیحات' className='formik-field' name="description" style={touched.description && errors.description ? { border: "2px solid red", height: "calc(100% - 250px)" } : { height: "calc(100% - 250px)" }} />

                        {/* {touched.email && errors.email && <span style={{color: "red"}}>{errors.email}</span>} */}
                        <button className='formik-button' style={{width: '100%', borderRadius: '20px', height: '40px'}} name='username' type="submit">ارسال</button>
                    </Form>
                )}
            </Formik>

        </>
    );
}
export default WForm;