import Input from "./Input";

export default function Form() {
  return (
    <form action="">
      <fieldset>
        <legend>General Information</legend>
        <Input type="text" label="first-name" labelText="First Name:"></Input>
        <Input type="text" label="last-name" labelText="Last Name:"></Input>
        <Input type="email" label="email" labelText="Email:"></Input>
        <Input type="tel" label="tel" labelText="Phone number:"></Input>
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        <Input type="text" label="school-name" labelText="School Name:"></Input>
        <Input
          type="text"
          label="title-of-study"
          labelText="Title of study:"
        ></Input>
        <Input
          type="date"
          label="start-date-education"
          labelText="From:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
        ></Input>
        <Input
          type="date"
          label="end-date-education"
          labelText="To:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
        ></Input>
      </fieldset>
      <fieldset>
        <legend>Practical Experience</legend>
        <Input
          type="text"
          label="company-name"
          labelText="company-name"
        ></Input>
        <label htmlFor="responsibilities">
          Responsibilities(start in a new line for each responsibility):
        </label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          cols="30"
          rows="10"
        ></textarea>
        <Input
          type="date"
          label="start-date-practical"
          labelText="From:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
        ></Input>
        <Input
          type="date"
          label="end-date-practical"
          labelText="To:"
          min="1930-01-01"
          max={new Date().toISOString().split("T")[0]}
        ></Input>
      </fieldset>
    </form>
  );
}
