import React from "react";

export default (props) => {
  return (
    <header className="site-header">
      <select value={props.selectedSource} onChange={(e) => {props.updateNews(e.target.value)}}>
        {props.sources.map((source) => {
          return <option value={source.id} key={source.id}>{source.name}</option>
        })}
      </select>
    </header>
  )
}
