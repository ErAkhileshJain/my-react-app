import FormGroup from "./Bootstrap/FormGroup";

const Form = ( {FormData} ) => {
  console.log("FD--->", FormData);
  return (
    <div className="Form">Form... { FormData}</div>
  );
};

export default Form;
