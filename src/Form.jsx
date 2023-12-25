import ContactFieldset from "./ContactFieldset";
import EducationFieldset from "./EducationFieldset";
import PracticalExperienceFieldset from "./PracticalExperienceFieldset";

export default function Form({ formData, setFormData, edit, setEdit }) {
  return (
    <form action="">
      <ContactFieldset
        formData={formData}
        setFormData={setFormData}
        edit={edit}
        setEdit={setEdit}
      ></ContactFieldset>
      <EducationFieldset
        formData={formData}
        setFormData={setFormData}
        edit={edit}
        setEdit={setEdit}
      ></EducationFieldset>
      <PracticalExperienceFieldset
        formData={formData}
        setFormData={setFormData}
        edit={edit}
        setEdit={setEdit}
      ></PracticalExperienceFieldset>
    </form>
  );
}
