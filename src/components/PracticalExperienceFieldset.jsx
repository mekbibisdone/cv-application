import { useState } from "react";
import Input from "./Input";

export default function PracticalExperienceFieldset({
  formData,
  setFormData,
  edit,
  setEdit,
}) {
  const [practicalExperienceData, setPracticalExperienceData] = useState({
    companyName: "",
    responsibilities: "",
    practicalExperienceStartDate: "",
    practicalExperienceEndDate: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ ...formData, ...practicalExperienceData });
    setPracticalExperienceData({
      companyName: "",
      responsibilities: "",
      practicalExperienceStartDate: "",
      practicalExperienceEndDate: "",
    });
  }
  function turnEditOff() {
    setEdit(false);
    setPracticalExperienceData({
      companyName: formData.companyName,
      responsibilities: formData.responsibilities,
      practicalExperienceStartDate: formData.practicalExperienceStartDate,
      practicalExperienceEndDate: formData.practicalExperienceEndDate,
    });
  }
  return (
    <>
      <fieldset onFocus={edit ? turnEditOff : null}>
        <legend>Practical Experience</legend>
        <Input
          type="text"
          label="companyName"
          labelText="Company Name:"
          value={
            edit ? formData.companyName : practicalExperienceData.companyName
          }
          handleChange={(e) =>
            setPracticalExperienceData({
              ...practicalExperienceData,
              companyName: e.target.value,
            })
          }
        ></Input>
        <label htmlFor="responsibilities">
          Responsibilities(start in a new line for each responsibility):
        </label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          cols="30"
          rows="10"
          value={
            edit
              ? formData.responsibilities
              : practicalExperienceData.responsibilities
          }
          onChange={(e) =>
            setPracticalExperienceData({
              ...practicalExperienceData,
              responsibilities: e.target.value,
            })
          }
        ></textarea>
        <Input
          type="date"
          label="practicalExperienceStartDate"
          labelText="From:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
          value={
            edit
              ? formData.practicalExperienceStartDate
              : practicalExperienceData.practicalExperienceStartDate
          }
          handleChange={(e) =>
            setPracticalExperienceData({
              ...practicalExperienceData,
              practicalExperienceStartDate: e.target.value,
            })
          }
        ></Input>
        <Input
          type="date"
          label="practicalExperienceEndDate"
          labelText="To:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
          value={
            edit
              ? formData.practicalExperienceEndDate
              : practicalExperienceData.practicalExperienceEndDate
          }
          handleChange={(e) =>
            setPracticalExperienceData({
              ...practicalExperienceData,
              practicalExperienceEndDate: e.target.value,
            })
          }
        ></Input>
        <button onClick={handleSubmit}>Submit</button>
      </fieldset>
    </>
  );
}
