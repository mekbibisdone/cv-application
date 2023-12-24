export default function Input({ label, labelText, type, min = null, max = null }) {
  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <input type={type} name={label} id={label} min={min} max={max} />
    </>
  );
}
