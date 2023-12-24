import { useState } from "react";
import Input from "./Input";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    titleOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
    companyName: "",
    responsibilities: "",
    practicalStartDate: "",
    practicalEndDate: "",
  });
  function handleChange(e) {
    switch (e.target.name) {
      case "firstName":
        setFormData({ ...formData, firstName: e.target.value });
        break;
      case "lastName":
        setFormData({ ...formData, lastName: e.target.value });
        break;
      case "email":
        setFormData({ ...formData, email: e.target.value });
        break;
      case "phoneNumber":
        setFormData({ ...formData, phoneNumber: e.target.value });
        break;
      case "schoolName":
        setFormData({ ...formData, schoolName: e.target.value });
        break;
      case "titleOfStudy":
        setFormData({ ...formData, titleOfStudy: e.target.value });
        break;
      case "educationStartDate":
        setFormData({ ...formData, educationStartDate: e.target.value });
        break;
      case "educationEndDate":
        setFormData({ ...formData, educationEndDate: e.target.value });
        break;
      case "companyName":
        setFormData({ ...formData, companyName: e.target.value });
        break;
      case "responsibilities":
        setFormData({ ...formData, responsibilities: e.target.value });
        break;
      case "practicalStartDate":
        setFormData({ ...formData, practicalStartDate: e.target.value });
        break;
      case "practicalEndDate":
        setFormData({ ...formData, practicalEndDate: e.target.value });
        break;
    }
  }
  return (
    <form action="">
      <fieldset>
        <legend>General Information</legend>
        <Input
          type="text"
          label="firstName"
          labelText="First Name:"
          value={formData.firstName}
          handleChange={handleChange}
        ></Input>
        <Input
          type="text"
          label="lastName"
          labelText="Last Name:"
          value={formData.lastName}
          handleChange={handleChange}
        ></Input>
        <Input
          type="email"
          label="email"
          labelText="Email:"
          value={formData.email}
          handleChange={handleChange}
        ></Input>
        <Input
          type="tel"
          label="phoneNumber"
          labelText="Phone number:"
          value={formData.phoneNumber}
          handleChange={handleChange}
        ></Input>
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        <Input
          type="text"
          label="schoolName"
          labelText="School Name:"
          value={formData.schoolName}
          handleChange={handleChange}
        ></Input>
        <Input
          type="text"
          label="titleOfStudy"
          labelText="Title of study:"
          value={formData.titleOfStudy}
          handleChange={handleChange}
        ></Input>
        <Input
          type="date"
          label="educationStartDate"
          labelText="From:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
          value={formData.educationStartDate}
          handleChange={handleChange}
        ></Input>
        <Input
          type="date"
          label="educationEndDate"
          labelText="To:"
          min="1930-01-01"
          value={formData.educationEndDate}
          handleChange={handleChange}
        ></Input>
      </fieldset>
      <fieldset>
        <legend>Practical Experience</legend>
        <Input
          type="text"
          label="companyName"
          labelText="Company Name:"
          value={formData.companyName}
          handleChange={handleChange}
        ></Input>
        <label htmlFor="responsibilities">
          Responsibilities(start in a new line for each responsibility):
        </label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          cols="30"
          rows="10"
          value={formData.responsibilities}
          onChange={handleChange}
        ></textarea>
        <Input
          type="date"
          label="practicalStartDate"
          labelText="From:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
          value={formData.practicalStartDate}
          handleChange={handleChange}
        ></Input>
        <Input
          type="date"
          label="practicalEndDate"
          labelText="To:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
          value={formData.practicalEndDate}
          handleChange={handleChange}
        ></Input>
      </fieldset>
    </form>
  );
}
