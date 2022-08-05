import * as Yup from 'yup';

const AdressSchema = Yup.object().shape({
  city: Yup.string().min(4, 'Too Short').required('Required'),
  country: Yup.string().min(4, 'Too Short').required('Required'),
});

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  birthDate: Yup.date().required('Required'),
  childrenAmount: Yup.number()
    .required('Enter child amount')
    .min(0, 'Enter positive number'),
  adresses: Yup.array().of(AdressSchema).min(1),
  role: Yup.string().oneOf(['admin', 'user']),
});
