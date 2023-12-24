export default function Input({
  label,
  labelText,
  type,
  min = null,
  max = null,
  value,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <input
        type={type}
        name={label}
        id={label}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
