import './App.scss'
import Wheel from "./Wheel";
import Rectangle from './Rectangle';
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { SwitchChange } from "../functions/functions";
function App() {
  return (
    <>
        <Switch id='switch'
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            onChange={SwitchChange}
        />
        <Wheel />
        <Rectangle />
    </>
  )
}

export default App
