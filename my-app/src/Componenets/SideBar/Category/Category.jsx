import "./Category.css";
import Input from "../../input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          title="Sweater"
          value="Sweater"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="T-shirt"
          title="T-shirt"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Jacket"
          title="Jacket"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Crop Top"
          title="Crop Top"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;