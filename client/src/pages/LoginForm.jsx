import './css/Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Login data', values);
        alert('Login Successful');
        resetForm();
    };

    return (
        <div className="login-container">
            <div className="row mx-auto d-flex  pt-5 justify-content-center  login-form">
                <div className="col-md-6">
                    <div className="card p-4 mt-5 shadow-sm">
                        <h2 className="text-center text-dark mb-4">Login</h2>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {() => (
                                <Form>
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
                                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-around gap-3'>
                                        <button type="submit" className="btn btn-primary w-50">Login</button>
                                        <span className='text-center text-md-start'>
                                            New User ? <Link to='/userregister'>Sign Up</Link>
                                        </span>
                                    </div>

                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
