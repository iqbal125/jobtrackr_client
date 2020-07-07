import * as Yup from 'yup';

export const formValidationSchema = Yup.object().shape({
  position: Yup.string()
    .min(3, 'Position must be at least 3 characters.')
    .max(50, 'Position name has too many characters.')
    .required('Job Position Required'),
  company: Yup.string()
    .min(3, 'Company name must be at least 3 characters.')
    .max(50, 'Company name has too many characters.')
    .required('Company Name Required'),
  status: Yup.string().required('Job status must be Green, Red, or Yellow.'),
  date_applied: Yup.date('Application date must be a valid date.').required(
    'Date of Application Required!'
  ),
  point_of_contact: Yup.string(),
  poc_email: Yup.string().email('Please enter a valid e-mail address.'),
  poc_phone: Yup.string(),
  location: Yup.string(),
  notes: Yup.string().max(1000, 'Too many characters.')
});

export const formFields = [
  {
    name: 'position',
    labelInnerText: 'Job Position',
    initialValue: '',
    type: 'input'
  },
  {
    name: 'company',
    labelInnerText: 'Company',
    initialValue: '',
    type: 'input'
  },
  {
    name: 'location',
    labelInnerText: 'Location',
    initialValue: '',
    type: 'input'
  },
  {
    name: 'date_applied',
    labelInnerText: 'Date Applied',
    initialValue: new Date(),
    type: 'date'
  },
  {
    name: 'status',
    labelInnerText: 'Application Status',
    initialValue: 'Just Applied',
    type: 'select',
    options: ['Just Applied', 'Phone Interview', 'Take Home Project', 'On-Site Interview', 'Offer']
  },
  {
    name: 'last_status_change',
    labelInnerText: 'Last Status Change Date',
    initialValue: null,
    type: 'date'
  },
  {
    name: 'point_of_contact',
    labelInnerText: 'Point of Contact Name',
    initialValue: '',
    type: 'input'
  },
  {
    name: 'poc_email',
    labelInnerText: 'Point of Contact Email',
    initialValue: '',
    type: 'input'
  },
  {
    name: 'poc_phone',
    labelInnerText: 'Point of Contact Phone',
    initialValue: '',
    type: 'input'
  },
  {
    name: 'last_followup',
    labelInnerText: 'Last Follow-Up Date',
    initialValue: null,
    type: 'date'
  },
  {
    name: 'last_followup_response',
    labelInnerText: 'Last Follow-Up Response Date',
    initialValue: null,
    type: 'date'
  },
  {
    name: 'notes',
    labelInnerText: 'Notes',
    initialValue: '',
    type: 'textarea'
  }
];
