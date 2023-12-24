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

  return (
    <>
      <main>
        <section>
          <h1>Form</h1>
          <Form formData={formData} setFormData={setFormData}></Form>
        </section>
        <section>
          <h1>CV</h1>
          <CV formData={formData}></CV>
        </section>
      </main>
    </>
  );
}

export default App;
