import React from 'react';
import PropTypes from 'prop-types';
import {Input} from "./Filter.styled"

export function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
      />
    </label>
  );
};
Filter.propTypes = {
  searchByName: PropTypes.func.isRequired,
};