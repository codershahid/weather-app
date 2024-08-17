import React from "react";

const Searchbar = ({ updateCity, city }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const city = formData.get("city");
          updateCity(city);
        }}
      >
        <label htmlFor="city">
          <p>City:</p>
          <input type="text" id="city" name="city" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Searchbar;
