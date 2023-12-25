import { useState } from "react";
import Input from "./Input";

export default function ContactFieldset({
  formData,
  setFormData,
  edit,
  setEdit,
}) {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ ...formData, ...contactData });
    setContactData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  }

  function turnEditOff() {
    setEdit(false);
    setContactData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    });
  }

  return (
    <>
      <fieldset onFocus={edit ? turnEditOff : null}>
        <legend>General Information</legend>
        <Input
          type="text"
          label="firstName"
          labelText="First Name:"
          value={edit ? formData.firstName : contactData.firstName}
          handleChange={(e) =>
            setContactData({ ...contactData, firstName: e.target.value })
          }
        ></Input>
        <Input
          type="text"
          label="lastName"
          labelText="Last Name:"
          value={edit ? formData.lastName : contactData.lastName}
          handleChange={(e) =>
            setContactData({ ...contactData, lastName: e.target.value })
          }
        ></Input>
        <Input
          type="email"
          label="email"
          labelText="Email:"
          value={edit ? formData.email : contactData.email}
          handleChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        ></Input>
        <Input
          type="tel"
          label="phoneNumber"
          labelText="Phone number:"
          value={edit ? formData.phoneNumber : contactData.phoneNumber}
          handleChange={(e) =>
            setContactData({ ...contactData, phoneNumber: e.target.value })
          }
        ></Input>
        <button onClick={handleSubmit}>Submit</button>
      </fieldset>
    </>
  );
}
