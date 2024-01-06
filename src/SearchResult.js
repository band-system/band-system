import { useState } from "react";
import SearchCard from "./SearchCard";

export function SearchResultUser({ datas }) {
  const [filter, setFilter] = useState("1");

  const handleFilter = value => {
    setFilter(value);
    if(filter === 1){
      datas.sort((a, b) => parseFloat(b.instrument_count) - parseFloat(a.instrument_count));
    }
    else if(filter === 2){
      datas.sort((a, b) => parseFloat(b.region_count) - parseFloat(a.region_count));
    }
    else{
      datas.sort((a, b) => parseFloat(b.style_count) - parseFloat(a.style_count));
    }
  };

  //(datas[0].photo);
  return(
    <div className='search-result'>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet" />
      <div className="search-filter-container">
        <span>&#xf0b0; Order by</span>
        <select className="search-filter" onChange={e => handleFilter(e.target.value)}>
        	<option key="1" value="1">Instrument</option>
        	<option key="2" value="2">Region</option>.
          <option key="3" value="3">Style</option>.
        </select>
      </div>
      
      <div className="search-detail">
        { datas.map(data => (
          <SearchCard id={data.user_id} name={data.name} filename={data.photo}/>
        )) }
      </div>
      
    </div>
  );
}

export function SearchResultBand({ datas }) {
  return(
    <div className='search-result'>
      { datas.map(data => (
        <SearchCard id={data.band_id} name={data.name} filename={data.photo}/>
      )) }
    </div>
  );
}