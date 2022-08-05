import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { FormSchema } from './validationSchema';

function App() {
  const initialValues = {
    name: '',
    lastName: '',
    birthDate: '1980-01-01',
    childrenAmount: 0,
    adresses: [],
    role: 'user',
  };

  return (
    <>
      <h1>Form with formik and yup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, values, touched, isSubmitting }) => (
          <Form className='form'>
            <label htmlFor='name'>
              Name
              {(errors.name && touched.name) || isSubmitting ? (
                <ErrorMessage name='name' component='div' className='error' />
              ) : (
                ''
              )}
            </label>
            <Field name='name' />
            <label htmlFor='lastName'>
              Last Name
              {(errors.lastName && touched.lastName) || isSubmitting ? (
                <ErrorMessage
                  name='lastName'
                  component='div'
                  className='error'
                />
              ) : (
                ''
              )}
            </label>
            <Field name='lastName' />
            <label htmlFor='birthDate'>
              Birth Date
              {(errors.birthDate && touched.birthDate) || isSubmitting ? (
                <ErrorMessage
                  name='birthDate'
                  component='div'
                  className='error'
                />
              ) : (
                ''
              )}
            </label>
            <Field type='date' name='birthDate' />
            <label htmlFor='childrenAmount'>
              Children Amount
              {(errors.childrenAmount && touched.childrenAmount) ||
              isSubmitting ? (
                <ErrorMessage
                  name='childrenAmount'
                  component='div'
                  className='error'
                />
              ) : (
                ''
              )}
            </label>
            <Field type='number' name='childrenAmount' />
            <FieldArray
              name='adresses'
              render={(arrayHelpers) => (
                <div>
                  <p>Adresses</p>
                  <ErrorMessage
                    name='adresses'
                    component='div'
                    className='error mb-1'
                  />
                  {values.adresses && values.adresses.length > 0
                    ? values.adresses.map((adress, i) => (
                        <div key={i} className='adress-container'>
                          <label htmlFor={`adresses[${i}].country`}>
                            Country {i + 1}
                            {(errors.adresses && touched.adresses) ||
                            isSubmitting ? (
                              <ErrorMessage
                                name={`adresses[${i}].country`}
                                component='div'
                                className='error'
                              />
                            ) : (
                              ''
                            )}
                          </label>
                          <Field name={`adresses[${i}].country`} />

                          <label htmlFor={`adresses[${i}].city`}>
                            City {i + 1}
                            {(errors.adresses && touched.adresses) ||
                            isSubmitting ? (
                              <ErrorMessage
                                name={`adresses[${i}].city`}
                                component='div'
                                className='error'
                              />
                            ) : (
                              ''
                            )}
                          </label>
                          <Field name={`adresses.${i}.city`} />

                          <button
                            type='button'
                            onClick={() => arrayHelpers.remove(i)}
                          >
                            -
                          </button>
                        </div>
                      ))
                    : ''}
                  <button
                    type='button'
                    onClick={() => arrayHelpers.push({ country: '', city: '' })}
                  >
                    +
                  </button>
                </div>
              )}
            />

            <label htmlFor='role'>
              Role
              {(errors.role && touched.role) || isSubmitting ? (
                <ErrorMessage name='role' component='div' className='error' />
              ) : (
                ''
              )}
            </label>
            <Field as='select' name='role'>
              <option value='admin'>Admin</option>
              <option value='user'>User</option>
            </Field>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
