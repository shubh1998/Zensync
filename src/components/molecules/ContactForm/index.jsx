import './contactForm.css'
import { useState, useEffect } from 'react'

const FORM_FIELDS = {
  NAME: 'name',
  EMAIL: 'email',
  SUBJECT: 'subject',
  MESSAGE: 'message'
}

const formInitialValues = {}
const formInitialErrors = {}

for (const key in FORM_FIELDS) {
  formInitialValues[FORM_FIELDS[key]] = ''
  formInitialErrors[FORM_FIELDS[key]] = ''
}
const ContactForm = () => {
  const [formValues, setFormValues] = useState(formInitialValues)
  const [formValuesError, setFormValuesError] = useState(formInitialErrors)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = ({ field, value }) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const validateForm = () => {
    const errors = {}
    if (!formValues.name.trim()) {
      errors[FORM_FIELDS.NAME] = 'Name is required!'
    } else if (formValues.name.length < 3 || formValues.name.length > 15) {
      errors[FORM_FIELDS.NAME] = 'Name should have at least 3 characters and a maximum of 15 characters!'
    }

    if (!formValues.email.trim()) {
      errors[FORM_FIELDS.EMAIL] = 'Email is required!'
    } else if (formValues.email.length < 3 || formValues.email.length > 50) {
      errors[FORM_FIELDS.EMAIL] = 'Email should have at least 3 characters and a maximum of 50 characters!'
    } else if (!validateEmail(formValues.email)) {
      errors[FORM_FIELDS.EMAIL] = 'Email is invalid!'
    }

    if (!formValues.subject.trim()) {
      errors[FORM_FIELDS.SUBJECT] = 'Subject is required!'
    } else if (formValues.subject.length < 3 || formValues.subject.length > 100) {
      errors[FORM_FIELDS.SUBJECT] = 'Subject should have at least 3 characters and a maximum of 100 characters!'
    }

    if (!formValues.message.trim()) {
      errors[FORM_FIELDS.MESSAGE] = 'Message is required!'
    }

    setFormValuesError(errors)
  }

  useEffect(() => {
    if (isSubmitted) {
      validateForm()
    }
  }, [formValues, isSubmitted])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    validateForm()

    if (Object.keys(formValuesError).length === 0) {
      console.log(formValues)
      setFormValuesError(formInitialErrors)
    }
  }

  return (
    <div className='contact-us-wrapper row mx-0 justify-content-center'>
      <div className='col-lg-6 col-md-8 col-sm-10 px-0'>
        <div className='d-flex justify-content-center'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <h5 className='title'>Contact us</h5>
            <p className='description'>Feel free to contact us if you need any assistance, any help or another question.
            </p>
            <div>
              <input
                type='text' id='name' placeholder='Name'
                className='form-control rounded border-white form-input'
                onChange={(e) => handleChange({ field: FORM_FIELDS.NAME, value: e.target.value })}
              />
              <small className='text-danger px-2 display-block'>{isSubmitted && formValuesError.name}</small>
            </div>
            <div>
              <input
                type='email' placeholder='Email'
                className='form-control rounded border-white form-input'
                onChange={(e) => handleChange({ field: FORM_FIELDS.EMAIL, value: e.target.value })}
              />
              <small className='text-danger px-2 display-block'>{isSubmitted && formValuesError.email}</small>
            </div>
            <div>
              <input
                type='text' placeholder='Subject'
                className='form-control rounded border-white form-input'
                onChange={(e) => handleChange({ field: FORM_FIELDS.SUBJECT, value: e.target.value })}
              />
              <small className='text-danger px-2 display-block'>{isSubmitted && formValuesError.subject}</small>
            </div>
            <div>
              <textarea
                id='message' rows='5' cols='30' placeholder='Message'
                className='form-control rounded border-white form-text-area'
                onChange={(e) => handleChange({ field: FORM_FIELDS.MESSAGE, value: e.target.value })}
              />
              <small className='text-danger px-2 display-block'>{isSubmitted && formValuesError.message}</small>
            </div>
            <div className='submit-button-wrapper'>
              <button type='submit' className='btn btn-primary-blue text-uppercase mt-1 py-3 px-5'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
