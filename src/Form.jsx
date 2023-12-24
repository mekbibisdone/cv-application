import ContactFieldset from "./ContactFieldset";
import EducationFieldset from "./EducationFieldset";
import PracticalExperienceFieldset from "./PracticalExperienceFieldset";

export default function Form({ formData, setFormData }) {
  return (
    <form action="">
      <ContactFieldset
        formData={formData}
        setFormData={setFormData}
      ></ContactFieldset>
      <EducationFieldset
        formData={formData}
        setFormData={setFormData}
      ></EducationFieldset>
      <PracticalExperienceFieldset
        formData={formData}
        setFormData={setFormData}
      ></PracticalExperienceFieldset>
    </form>
  );
}
