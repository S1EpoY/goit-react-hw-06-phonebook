import React from "react";
import css from './FilteredSearch.module.css'

const Filter = ({handleChangeFilter}) => (
  <div className={css.filterBox}>
    <p>Finde contacts by name</p>
    <input style={{width: "160px", marginBottom: "16px"}} type="text" onChange={handleChangeFilter}/>
  </div>
);

export default Filter;
