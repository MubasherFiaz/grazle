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
  onBlur,
  name,
  placeholder,
  isError,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">
      <div class="input-group position-relative">
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
          name={name}
          onBlur={onBlur}
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
      <p className="text-danger text-start">{isError}</p>
    </div>
  );
};

export default Input;
