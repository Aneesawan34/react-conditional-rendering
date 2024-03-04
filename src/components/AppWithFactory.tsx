const AppWithFactory = () => {
  type Type = string;

  const Button = ({ label }: { label: string }) => <button>{label}</button>;
  const InputText = ({
    type,
    placeholder,
  }: {
    type: string;
    placeholder: string;
  }) => <input type={type} placeholder={placeholder} />;
  const CheckBox = ({ label }: { label: string }) => (
    <label>
      <input type="checkbox" /> {label}
    </label>
  );
  const createUIComponent = (type: Type, props: any) => {
    switch (type) {
      case "button":
        return <Button {...props} />;
      case "text":
        return <InputText {...props} />;
      case "checkbox":
        return <CheckBox {...props} />;
      default:
        break;
    }
  };
  const button = createUIComponent("button", { label: "Click me" });
  const inputText = createUIComponent("text", {
    type: "text",
    placeholder: "Enter name...",
  });
  const checkbox = createUIComponent("checkbox", { label: "Check me" });
  return (
    <div>
      {button}
      {inputText}
      {checkbox}
    </div>
  );
};

export default AppWithFactory;
