export default function Form() {
  return (
    <form action="">
      <fieldset>
        <legend>General Information</legend>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" name="first-name" id="first-name" />
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" name="last-name" id="last-name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="tel">Phone number:</label>
        <input type="tel" name="tel" id="tel" />
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        <label htmlFor="school-name">School Name:</label>
        <input type="text" name="school-name" id="school-name" />
        <label htmlFor="title-of-study">Title of study:</label>
        <input type="text" name="title-of-study" id="title-of-study" />
        <label htmlFor="start-date-education">From:</label>
        <input type="date" name="start-date-education" id="start-date-education" min="1930-01-01" max={new Date().toISOString().split("T")[0]}/>
        <label htmlFor="end-date-education">To:</label>
        <input type="date" name="end-date-education" id="end-date-education" min="1930-01-01" max={new Date().toISOString().split("T")[0]} />
      </fieldset>
      <fieldset>
        <legend>Practical Experience</legend>
        <label htmlFor="company-name">Company name:</label>
        <input type="text" name="company-name" id="company-name" />
        <label htmlFor="responsibilities">Responsibilities(start in a new line for each responsibility):</label>
        <textarea name="responsibilities" id="responsibilities" cols="30" rows="10"></textarea>
        <label htmlFor="start-date-practical">From:</label>
        <input type="date" name="start-date-practical" id="start-date-practical" min="1930-01-01" max={new Date().toISOString().split("T")[0]}/>
        <label htmlFor="end-date-practical">To:</label>
        <input type="date" name="end-date-practical" id="end-date-practical" min="1930-01-01" max={new Date().toISOString().split("T")[0]} />
      </fieldset>
    </form>
  );
}
