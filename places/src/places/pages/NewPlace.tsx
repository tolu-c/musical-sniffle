import Input from "../../shared/components/UI/FormElements/Input";

const NewPlace = () => {
  return (
    <form
      className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center justify-center gap-4
    "
    >
      <Input type="text" label="title" element="input" id="title" />
    </form>
  );
};

export default NewPlace;
