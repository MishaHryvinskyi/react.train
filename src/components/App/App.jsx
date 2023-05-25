// import clsx from "clsx";
// import Counter from './Counter/Counter';
import ColorPicker  from 'components/ColorPicker/ColorPicker';
import { Dropdown } from 'components/Dropdown/Dropdown';



const colorPickerOptions = [
  { label: 'red', color: '#F44336'},
  { label: 'green', color: '#4CAF50'},
  { label: 'blue', color: '#2196F3'},
  { label: 'grey', color: '#607D8B'},
  { label: 'pink', color: '#E91E63'},
  { label: 'indigo', color: '#3F51B5'},
];

function App() {
  return (
    <div>
    {/* <Counter /> */}
    <Dropdown/>
    <ColorPicker options={colorPickerOptions} />
    </div>
  );
}

export default App;
