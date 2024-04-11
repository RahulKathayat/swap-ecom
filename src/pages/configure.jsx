import React,{useState} from 'react'
import { Footer } from '@/widgets/layout';
import {
  Input,
  Checkbox,
  Button,
  Typography,
  Select,Option
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from "axios";

export function Configure() {
  const [checkTerms, setCheckTerms] = useState(false);
  const handleTermsChange = () => {
    setCheckTerms(!checkTerms);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      company: '',
      job: '',
      phone: '',
      website: '',
      websitetype: '',
      country: '',
      message: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
      company: Yup
        .string()
        .max(255)
        .required('Company is required'),
      job: Yup
        .string()
        .max(255)
        .required('Job Title is required'),
      phone: Yup
        .number()
        .required('Contact is required'),
      website: Yup
        .string()
        .max(255)
        .required('Website Url is required'),
      websitetype: Yup
        .string()
        .max(255)
        .required('Website Type is required'),
      country: Yup
        .string()
        .max(255),
        // .required('Country is required'),
      message: Yup
        .string()
        .max(400),
    }),
    onSubmit: async (values, helpers) => {
      try {
        if(checkTerms){
          toast.loading('Sending Form Data');
          console.log(values);
          await axios
              .post(`${import.meta.env.VITE_BASE_URL}/v1/widgetConfigurations/addConfig`, values)
              .then((response) => {
                console.log(response);
                toast.dismiss();
                toast.success('Success');
                formik.resetForm();
              })
              .catch((error) => {
                toast.dismiss();
                toast.error('Error Occured');
                console.log("Error Signing in the user ", error);
                formik.resetForm();
              });
        }
        else{
          toast.error('Accept Terms');
        }
      } catch (err) {
        toast.dismiss();
        toast.error('Error Occured');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });
  return (
    <>
        <section className="relative block h-[12vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",margin:"15px",padding:"15px",flexDirection:"column"}}>
            <div style={{maxWidth:"600px",marginTop:"20px"}}>
              <h1 style={{fontSize:"2.5rem",textAlign:"center"}}>SEE VIRTUAL TRY-ON WORKING IN A CALL WITH US</h1>
              <p style={{fontSize:"1.3rem",marginTop:"3rem",textAlign:"center"}}>We'll show you how our try-on works, how to add it to your site and what it can do for your business.</p>
            </div>
            

            <div className="w-full lg:w-3/4 mt-20">
              <div className="text-center">
                <Typography variant="h2" className="font-bold mb-4">Configuration Form</Typography>
                <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Complete the form to get started with virtual try-on.</Typography>
              </div>
              <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={formik.handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Your email
                  </Typography>
                  <Input
                    type='email'
                    size="lg"
                    label="Email"
                    name="email"
                    error={(formik.touched.email && formik.errors.email)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Name
                  </Typography>
                  <Input
                    size="lg"
                    label="Name"
                    name="name"
                    error={!!(formik.touched.name && formik.errors.name)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Company
                  </Typography>
                  <Input
                    size="lg"
                    label="Company"
                    name="company"
                    error={!!(formik.touched.company && formik.errors.company)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.company}
                  />
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Job Title
                  </Typography>
                  <Input
                    size="lg"
                    label="Job"
                    name="job"
                    error={!!(formik.touched.job && formik.errors.job)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.job}
                  />
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Phone
                  </Typography>
                  <Input
                    type="number"
                    size="lg"
                    label="Phone"
                    name="phone"
                    error={!!(formik.touched.phone && formik.errors.phone)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Website URL
                  </Typography>
                  <Input
                    size="lg"
                    label="Website URL"
                    name="website"
                    error={!!(formik.touched.website && formik.errors.website)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.website}
                  />               
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Website Type
                  </Typography>
                  {/* <Select
                    label="WebsiteType"
                    name="websitetype"
                    value={formik.values.websitetype}
                    error={!!(formik.touched.websitetype && formik.errors.websitetype)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    outline={false}
                    size="lg"
                    // options={websitetype}
                  /> */}
                  <Select 
                    label="Website Type"
                    name="websitetype"
                    value={formik.values.websitetype}
                    error={!!(formik.touched.websitetype && formik.errors.websitetype)}
                    onChange={(value) => formik.setFieldValue('websitetype', value)}
                    onBlur={formik.handleBlur}
                    size='lg'
                  >
                    <Option value="">Select an option</Option>
                    <Option value='shopify'>Shopify</Option>
                    <Option value='non-shopify'>Non-Shopify</Option>
                  </Select>
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Country
                  </Typography>
                  <Input
                    size="lg"
                    label="Country"
                    name="country"
                    error={!!(formik.touched.country && formik.errors.country)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.country}
                  />
                  <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                    Message (Optional)
                  </Typography>
                  <Input
                    size="lg"
                    label="Message"
                    name="message"
                    error={!!(formik.touched.message && formik.errors.message)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />
                </div>
                <Button className="mt-6" fullWidth type="submit">
                  Sign In
                </Button>

                <div className="flex items-center justify-between gap-2 mt-6">
                  <Checkbox
                    checked={checkTerms}
                    onChange={handleTermsChange}
                    label={
                      <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center justify-start font-medium"
                      >
                        <a
                          href="#"
                          className="font-normal text-black transition-colors hover:text-gray-900 underline"
                        >
                          Terms and Conditions
                        </a>
                      </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                  />
                </div>
              </form>

            </div>

        </div>
        <Footer />
    </>
  )
}

export default Configure