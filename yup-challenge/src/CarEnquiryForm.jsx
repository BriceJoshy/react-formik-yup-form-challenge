import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CarEnquiryForm = () => {
  const initFormState = {
    inquiryType: "",
    carMake: "",
    budget: "",
    name: "",
    location: "",
    contactMethod: "",
    contactDate: "",
    contactTime: "",
    msgQuestion: "",
    referralSource: "",
  };

  const validationSchema = Yup.object({
    inquiryType: Yup.string().required("Select inquiry type"),
    carMake: Yup.string().required("Car make & model is required"),
    budget: Yup.string().required("Select a budget range"),
    name: Yup.string().required("Name is required"),
    location: Yup.string().required("Location is required"),
    contactMethod: Yup.string().required("Select a contact method"),
    contactDate: Yup.date().required("Preferred contact date is required"),
    contactTime: Yup.string().required("Preferred contact time is required"),
    msgQuestion: Yup.string().required("Please enter a message or question"),
    referralSource: Yup.string().required(
      "Please select how you heard about us"
    ),
  });

  const formik = useFormik({
    initialValues: initFormState,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <div className="px-40 py-6 text-sm font-medium font-mono">
      <form onSubmit={formik.handleSubmit}>
        <div className="p-4 flex flex-col bg-white h-full rounded-sm">
          <div className="font-medium text-2xl mb-5">Car Inquiry Form</div>

          {/* Inquiry Type */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Inquiry Type *</label>
            <div className="flex gap-4">
              {["new", "used"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="inquiryType"
                    value={type}
                    onChange={formik.handleChange}
                    checked={formik.values.inquiryType === type}
                  />{" "}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
            {formik.touched.inquiryType && formik.errors.inquiryType && (
              <div className="text-red-500">{formik.errors.inquiryType}</div>
            )}
          </div>

          {/* Inputs */}
          <div className="flex flex-row w-full gap-5">
            <div className="mt-6 flex flex-col w-1/2">
              {/* Car Make */}
              <label className="block font-semibold mb-1">
                Car Make & Model *
              </label>
              <input
                name="carMake"
                className="w-full rounded-sm px-4 py-2 border"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.carMake}
              />
              {formik.touched.carMake && formik.errors.carMake && (
                <div className="text-red-500">{formik.errors.carMake}</div>
              )}

              {/* Full Name */}
              <label className="mt-5 block font-semibold mb-1">
                Full Name *
              </label>
              <input
                name="name"
                className="w-full rounded-sm px-4 py-2 border"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>

            <div className="mt-6 flex flex-col w-1/2">
              {/* Budget */}
              <label className="block font-semibold mb-1">Budget *</label>
              <select
                name="budget"
                className="w-full border rounded p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.budget}
              >
                <option value="">Select</option>
                <option value="<5L">Below ₹5L</option>
                <option value="5-10L">₹5L–₹10L</option>
                <option value="10-20L">₹10L–₹20L</option>
                <option value=">20L">Above ₹20L</option>
              </select>
              {formik.touched.budget && formik.errors.budget && (
                <div className="text-red-500">{formik.errors.budget}</div>
              )}

              {/* Location */}
              <label className="mt-5 block font-semibold mb-1">
                Location *
              </label>
              <input
                name="location"
                className="w-full rounded-sm px-4 py-2 border"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
              {formik.touched.location && formik.errors.location && (
                <div className="text-red-500">{formik.errors.location}</div>
              )}
            </div>
          </div>

          {/* Contact Method */}
          <div className="mt-6">
            <label className="block font-semibold mb-1">
              Preferred Contact Method *
            </label>
            <div className="flex gap-4">
              {["email", "phone"].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    onChange={formik.handleChange}
                    checked={formik.values.contactMethod === method}
                  />{" "}
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </label>
              ))}
            </div>
            {formik.touched.contactMethod && formik.errors.contactMethod && (
              <div className="text-red-500">{formik.errors.contactMethod}</div>
            )}
          </div>

          {/* Contact Date & Time */}
          <div className="flex flex-row w-full gap-5 mt-5">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">
                Preferred Contact Date *
              </label>
              <input
                type="date"
                name="contactDate"
                className="w-full px-4 py-2 border rounded-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactDate}
              />
              {formik.touched.contactDate && formik.errors.contactDate && (
                <div className="text-red-500">{formik.errors.contactDate}</div>
              )}
            </div>
            <div className="w-1/2">
              <label className="block font-semibold mb-1">
                Preferred Contact Time *
              </label>
              <input
                type="time"
                name="contactTime"
                className="w-full px-4 py-2 border rounded-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactTime}
              />
              {formik.touched.contactTime && formik.errors.contactTime && (
                <div className="text-red-500">{formik.errors.contactTime}</div>
              )}
            </div>
          </div>

          {/* Message or Questions */}
          <div className="w-full mt-5">
            <label className="block font-semibold mb-1">
              Messages or Questions *
            </label>
            <textarea
              name="msgQuestion"
              className="w-full min-h-[100px] px-4 py-2 border rounded-sm resize-none"
              placeholder="Type your message here..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.msgQuestion}
            />
            {formik.touched.msgQuestion && formik.errors.msgQuestion && (
              <div className="text-red-500">{formik.errors.msgQuestion}</div>
            )}
          </div>

          {/* Referral Source */}
          <div className="w-full mt-5">
            <label className="block font-semibold mb-1">
              How did you hear about us? *
            </label>
            <select
              name="referralSource"
              className="w-full border rounded p-2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.referralSource}
            >
              <option value="">Select</option>
              <option value="website">Website</option>
              <option value="friend">Friend</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
            {formik.touched.referralSource && formik.errors.referralSource && (
              <div className="text-red-500">{formik.errors.referralSource}</div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-row mt-10 gap-6">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-4 py-2 rounded-sm"
            >
              Submit
            </button>
            <button
              type="button"
              className="border-[1px] text-black font-bold px-4 py-2 rounded-sm"
              onClick={formik.handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarEnquiryForm;
