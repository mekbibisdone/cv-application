export default function CV({ formData }) {
  return (
    <>
      <section>
        <h1>Contact</h1>
        <h2>
          {formData.firstName || "First Name"} {formData.lastName || "LastName"}
        </h2>
        <a href="mailto:">{formData.email || "email@domain.com"}</a>
        <a href="tel:">{formData.phoneNumber || "+xxxxxxxx"}</a>
      </section>
      <section>
        <h1>Education</h1>
        <h2>{formData.schoolName || "School Name"} </h2>
        <h2>{formData.titleOfStudy || "Title of study"}</h2>
        <h3>From:</h3>
        <time>{formData.educationStartDate || "year:month:day"}</time>
        <h3>To:</h3>
        <time>{formData.educationEndDate || "year:month:day"}</time>
      </section>
      <section>
        <h1>Practical Experience</h1>
        <h2>{formData.companyName || "Company Name"}</h2>
        <h2>Responsibilities</h2>
        <ul>{formData.responsibilities}</ul>
        <h3>From:</h3>
        <time>{formData.practicalExperienceStartDate || "year:month:day"}</time>
        <h3>To:</h3>
        <time>{formData.practicalExperienceEndDate || "year:month:day"}</time>
      </section>
    </>
  );
}
