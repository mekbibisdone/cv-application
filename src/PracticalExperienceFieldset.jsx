import { useState } from "react";
import Input from "./Input";

export default function PracticalExperienceFieldset({ formData, setFormData }) {
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
  return (
    <>
      <fieldset>
        <legend>Practical Experience</legend>
        <Input
          type="text"
          label="companyName"
          labelText="Company Name:"
          value={practicalExperienceData.companyName}
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
          value={practicalExperienceData.responsibilities}
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
          value={practicalExperienceData.practicalExperienceStartDate}
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
          value={practicalExperienceData.practicalExperienceEndDate}
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
