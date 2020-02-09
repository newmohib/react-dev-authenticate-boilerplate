/**
 *
 * Form
 *
 */

import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const Input = React.memo((props) => {
  let { name, type, autoFocus, ...rest } = props
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{lable}</label> */}
      <input
        {...rest}
        // value={value}
        autoFocus={autoFocus}
        name={name}
        type={type}
        id={name}
        className="form-control"
        
      />
      {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
    </div>
  );
})

Input.propTypes = {};


export const DateInput = React.memo(({ onChange, dateValue, handleChangeDate, name, ...rest }) => {
  //console.log(props);
  console.log("value", dateValue);
  return (
    <div className="form-group">
      <div className="react-datepicker-wrapper">
        <DatePicker
          {...rest}
          onChange={(value) => handleChangeDate(value)}
          // selected={value}
          name={name}
          id={name}
         // minDate={new Date()}
         // maxDate={addDays(new Date(), 5)}
          selected={dateValue}
          className="form-control"
          placeholderText="DD MMMM  YYYY"
          isClearable={true}
          showWeekNumbers

          dateFormat=" d MMMM yyyy "
          //dateFormat="MMMM d, yyyy"
          //scrollableYearDropdown
          //yearDropdownItemNumber={15}
         
          //showMonthYearPicker

          showMonthDropdown
          showYearDropdown
          dropdownMode="select"

         // timeInputLabel="Time:"
        //  showTimeInput
        />
        {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
      </div>
    </div>
  );
});

DateInput.propTypes = {};



export const Select = React.memo((props, { ...rest }) => {

  let languageList = [{ id: '1', optionName: "DE" }, { id: '2', optionName: "BD" }];
  //let { name, errors, lable, options, defaultValue, ...rest } = props;

  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{lable}</label> */}
      <select //name={name} id={name} {...rest} value={defaultValue}
        className="form-control" >
        <option value="" />
        {languageList.map(item =>
          <option
            key={item.id}
            value={item.optionName}
          >{item.optionName}
          </option>
        )}
      </select>
      {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
    </div>
  );
});

