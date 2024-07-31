/* eslint-disable react/prop-types */
import "../assets/css/components/input.css";
function Input(props) {
  return (
    <>
      <div className="input-wrapper">
        <input type={props.type} onChange={onchange} />
      </div>
    </>
  );
}

export default Input;
