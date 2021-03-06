import React from "react";

function More(props) {
  const { change } = props;
  return (
    <div className="more">
      <div className="moreInput">
        <label htmlFor="award" className="moreInfo">
          Awards
          <br />
          <input
            onChange={change}
            type="text"
            placeholder="List awards, separated by commas"
            id="awards"
          />
        </label>
        <label htmlFor="skill" className="moreInfo">
          Skills
          <br />
          <input
            onChange={change}
            type="text"
            placeholder="List skills, separated by commas"
            id="skills"
          />
        </label>
      </div>
    </div>
  );
}

export default More;
