import React, { useContext, useEffect } from "react"
import './App.css'
import { ResponseDataContext } from '../src/api/Context';
import { BubbleGraph, FocusTopics, Sidebar, PieChart, NewsTable, Search} from "./components/index";

function App() {

  const { open, setOpen } = useContext(ResponseDataContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 880) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setOpen]);

  return (
    <>
      <div className="dt_assessment">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="main-content" style={open ? { marginLeft: window.innerWidth >= 880 ? '270px' : '0' } : {}}>
          <Search />
          <div className="container-fluid pt-4">
            <div className="row">
              <BubbleGraph />
              <PieChart />
            </div>
          </div>
          <div className="container-fluid pt-4">
            <div className="row">
              <NewsTable/>
              <FocusTopics/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
