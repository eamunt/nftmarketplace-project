import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM9.892 7.935C10.122 7.482 10.292 7.267 10.433 7.155C10.539 7.071 10.683 7 11 7C11.625 7 12 7.47 12 7.978C12 8.256 11.946 8.394 11.798 8.57C11.591 8.816 11.208 9.115 10.45 9.616L10 9.912V12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V10.983C12.542 10.609 12.997 10.251 13.327 9.859C13.804 9.293 14 8.689 14 7.978C14 6.508 12.867 5 11 5C10.316 5 9.711 5.176 9.192 5.587C8.708 5.97 8.378 6.497 8.108 7.032C8.04526 7.14947 8.00661 7.27828 7.99433 7.41089C7.98205 7.54349 7.99637 7.67722 8.03647 7.80421C8.07657 7.9312 8.14163 8.04891 8.22783 8.15042C8.31403 8.25193 8.41964 8.3352 8.53846 8.39534C8.65728 8.45548 8.78691 8.49128 8.91975 8.50065C9.0526 8.51001 9.18597 8.49275 9.31205 8.44987C9.43814 8.40699 9.55438 8.33936 9.65397 8.25094C9.75356 8.16253 9.83449 8.05511 9.892 7.935ZM12 15.5C12 15.2348 11.8946 14.9804 11.7071 14.7929C11.5196 14.6054 11.2652 14.5 11 14.5C10.7348 14.5 10.4804 14.6054 10.2929 14.7929C10.1054 14.9804 10 15.2348 10 15.5V16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17C11.2652 17 11.5196 16.8946 11.7071 16.7071C11.8946 16.5196 12 16.2652 12 16V15.5Z" fill="#A95EEA"/>
    </Svg>
  );
};

export default Icon;