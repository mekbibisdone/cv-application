import Form from "./Form";
import CV from "./CV";
import { useState } from "react";

function App() {
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
    practicalExperienceStartDate: "",
    practicalExperienceEndDate: "",
  });
  const [edit, setEdit] = useState(false);

  function handleEditClick(e) {
    e.preventDefault();
    setEdit(true);
  }

  return (
    <>
      <main>
        <section>
          <h1>Form</h1>
          <Form formData={formData} setFormData={setFormData} edit={edit} setEdit={setEdit}></Form>
        </section>
        <section>
          <h1>CV</h1>
          <CV formData={formData} handleEditClick={handleEditClick}></CV>
        </section>
      </main>
    </>
  );
}

export default App;
