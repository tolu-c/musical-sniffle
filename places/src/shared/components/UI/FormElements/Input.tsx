export interface InputProps {
  type: "email" | "password" | "text";
  element: "input" | "textarea";
  label: string;
  id: string;
}

const Input = ({ id, type, label, element }: InputProps) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label htmlFor={id} className="capitalize">
        {label}
      </label>
      {element === "input" && (
        <input
          type={type}
          id={id}
          name={label}
          placeholder={`Enter your ${label}`}
        />
      )}
      {element === "textarea" && <textarea name={label} id={id}></textarea>}
    </div>
  );
};

export default Input;
