import { useState } from "react";

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

    return (
      <>
      <input onChange={handleToggle} type="checkbox" className={`toggle bg-pink-700 ${isChecked ? "active" : ""}`} />
      </>
  );
}

export default ToggleButton;
