import React, {useState} from 'react';
import './index.css';

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className='color-picker-container'>
      <h1 className='color-picker-title'>🎨 Color Picker</h1>

      <div className='color-display' style={{ backgroundColor: color }}>
        <p className='color-code'>{color}</p>
      </div>

      <label className='color-label'>Select a Color</label>
      <input className='color-input' type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
