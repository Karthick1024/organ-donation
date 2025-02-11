import './css/userregistration.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Userregistration = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Too Short!').required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
            .required('Phone number is required'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form data', values);
        alert('Registration Successful');
        resetForm();
    };

    return (
        <>

            <div className="user-registration-container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-4 p-4 shadow-sm">
                            <h2 className="text-center  m-5 text-dark mb-4">Register</h2>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                {() => (
                                    <Form>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <Field type="text" name="name" className="form-control" />
                                            <ErrorMessage name="name" component="div" className="text-danger" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Phone Number</label>
                                            <Field type="text" name="phone" className="form-control" />
                                            <ErrorMessage name="phone" component="div" className="text-danger" />
                                        </div>


                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <Field type="email" name="email" className="form-control" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <Field type="password" name="password" className="form-control" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <Field type="password" name="confirmPassword" className="form-control" />
                                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                        </div>
                                        <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
                                            <button type="submit" className="btn btn-primary w-50 " >Register</button>
                                            <span className='mt-2'>Already have an Account ? <Link to='/login'>Login here</Link></span>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Userregistration
