import { useState } from "react";
import Input from "./Input";

export default function EducationFieldset({ formData, setFormData }) {
  const [educationData, setEducationData] = useState({
    schoolName: "",
    titleOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ ...formData, ...educationData });
    setEducationData({
      schoolName: "",
      titleOfStudy: "",
      educationStartDate: "",
      educationEndDate: "",
    });
  }
  return (
    <>
      <fieldset>
        <legend>Education</legend>
        <Input
          type="text"
          label="schoolName"
          labelText="School Name:"
          value={educationData.schoolName}
          handleChange={(e) => setEducationData({...educationData, schoolName:e.target.value})}
        ></Input>
        <Input
          type="text"
          label="titleOfStudy"
          labelText="Title of study:"
          value={educationData.titleOfStudy}
          handleChange={(e) => setEducationData({...educationData, titleOfStudy:e.target.value})}
        ></Input>
        <Input
          type="date"
          label="educationStartDate"
          labelText="From:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
          value={educationData.educationStartDate}
          handleChange={(e) => setEducationData({...educationData, educationStartDate:e.target.value})}
        ></Input>
        <Input
          type="date"
          label="educationEndDate"
          labelText="To:"
          min="1930-01-01"
          value={educationData.educationEndDate}
          handleChange={(e) => setEducationData({...educationData, educationEndDate:e.target.value})}
        ></Input>
        <button onClick={handleSubmit}>Submit</button>
      </fieldset>
    </>
  );
}
