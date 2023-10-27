import { useDispatch, useSelector } from "react-redux";
import { changeColorAction } from "./store/colorSetup/action";
import { getBackgroundColor } from "./store/colorSetup/selector";
import { Button } from "./components/button";
import "./App.css";

function App() {
  const bgColor = useSelector(getBackgroundColor);
  const dispatch = useDispatch();

  const handleClick = (color) => {
    dispatch(changeColorAction(color));
  };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Button color="Blue" handleClick={() => handleClick("blue")} />
      <Button color="Red" handleClick={() => handleClick("red")} />
      <Button color="Green" handleClick={() => handleClick("green")} />
      <Button color="Pink" handleClick={() => handleClick("pink")} />
      <Button color="Dark" handleClick={() => handleClick("black")} />
    </div>
  );
}

export default App;
