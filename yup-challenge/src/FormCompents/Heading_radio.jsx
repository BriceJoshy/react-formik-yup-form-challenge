import React from "react";

const Heading_radio = () => {
  return (
    <div className="text-2xl font-medium p-4 flex flex-col ">
      Car Inquiry Form
      <div className="text-sm mt-2">Inquiry Type</div>
      <div className="flex flex-row gap-3 text-sm mt-4">
        <label htmlFor="">
          <input type="radio" name="" id="" value="New" />
          <span className="ml-2">New</span>
        </label>
        <label htmlFor="">
          <input type="radio" name="" id="" value="Used" />
          <span className="ml-2">Used</span>
        </label>
      </div>
    </div>
  );
};

export default Heading_radio;
