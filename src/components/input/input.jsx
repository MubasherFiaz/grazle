import React, { useState } from "react";
// @ import styles
import "./index.css";

const Input = ({
  id,
  type,
  value,
  className,
  isbeforeImg,
  onChange,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div class="input-group mb-3 position-relative">
      {isbeforeImg ? (
        <span class="input-group-text">
          <img src={isbeforeImg} alt="email" />
        </span>
      ) : null}
      <input
        id={id}
        type={!showPassword && type === "password" ? "password" : "text"}
        placeholder={placeholder}
        className={`${className} form-control loginInput`}
        onChange={onChange}
        value={value}
      />
      {type === "password" ? (
        <i
          class={`fa ${!showPassword ? `fa-eye` : `fa-eye-slash`} `}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        ></i>
      ) : null}
    </div>
  );
};

export default Input;
