import React, {useState} from 'react';
import './App.css';

function App() {

  const [showPanel, setshowPanel] = useState("-translate-x-full");
  const [opacityLink, setopacityLink] = useState("opacity-70");
  const [overflowToggle, setoverflowToggle] = useState("overflow-hidden");
  const [iconToggle, seticonToggle] = useState("far fa-bars text-2xl");
  const [showRightBar, setshowRightBar] = useState("-translate-x-full");



  let showPanelFunction = () =>{
    if(showPanel === "-translate-x-full"){
    setshowPanel('-translate-x-0');
    seticonToggle('far fa-times text-2xl');
    setoverflowToggle('overflow-hidden');

    }
    else{
    setshowPanel('-translate-x-full');
    seticonToggle('far fa-bars text-2xl');
    setoverflowToggle('overflow-hidden');
    setopacityLink('opacity-70');



    }
  }


  let functionOpacity = () =>{
    if(opacityLink === "opacity-70"){
      setopacityLink('opacity-100');
      setoverflowToggle('');

  
      }
      else{
      setopacityLink('opacity-70');
      setoverflowToggle('overflow-hidden')
  
      }

      if (window.innerWidth < 640) {
        setshowRightBar('-transform-x-0');
    }
  }

let closeSideBarMobilRight = () =>{
  setshowRightBar('-translate-x-full') 
  setopacityLink('opacity-70')
}


let closeAllSideBars = () =>{
  seticonToggle('far fa-bars text-2xl');
  setshowPanel('-translate-x-full');
  setoverflowToggle('overflow-hidden');


}
  return (
  <>
<div className="w-full h-16 bg-[#262626]  text-white flex items-center justify-between px-6">
  <div className="flex gap-2 items-center">
    <div className=" opacity-90 cursor-pointer" onClick={showPanelFunction}>
    <i className={iconToggle}></i>
    </div>
    <div className="h-24 w-40 md:w-52  bg-green-400 hidden sm:flex"></div>
  </div>


  <div className="flex items-center opacity-90 gap-5 sm:gap-10">
     <div className="font-bold text-2xl sm:mr-3">LOGO</div>
     <div className="flex items-center "><span className=" text-lg mr-2 ">Login</span> <i className="far fa-user-alt text-lg "></i></div>
     <select  className="bg-transparent border-none outline-none w-14 text-xl">
       <option className="text-black" value="ITA">ITA</option>
       <option className="text-black" value="EN">EN</option>
     </select>

  </div>
</div>




<div className={`absolute  top-0 sm:top-16 z-50 left-0 w-screen h-screen    py-5 pt-20 sm:pt-5 sm:w-[255px] bg-[#262626] text-white pl-6 pr-6 transition transform ${showPanel} ${overflowToggle}`}>
<i className="far fa-times sm:hidden text-2xl text-white absolute top-5 left-5 cursor-pointer" onClick={closeAllSideBars}></i>

<div className="flex gap-5 flex-col">
<a href="#" className="opacity-70 hover:opacity-100">HOME PAGE</a>
<a href="#" className="opacity-70 hover:opacity-100">DIRETTE</a>
<a href="#" onClick={functionOpacity} className={`flex items-center hover:opacity-100 gap-5 w-fit sm:w-auto justify-between opacity-70 ${opacityLink}`}>ON DEMAND <i className="fal fa-angle-right text-2xl"></i></a>
<a href="#" className="opacity-70 hover:opacity-100">ABBONAMENTI</a>
<a href="#" className="opacity-70 hover:opacity-100">SCUOLE</a>
<select  className="bg-transparent opacity-70 cursor-pointer hover:opacity-100 border-none outline-none w-14 text-xl">
       <option className="text-black" value="ITA">ITA</option>
       <option className="text-black" value="EN">EN</option>
     </select>
<a href="#" className="text-[red] font-bold sm:mt-7 mb-3 text-sm sm:mx-auto w-fit px-10 py-3 border border-red-600 sm:px-0 sm:py-0 sm:border-none">LOGIN</a>

<div className="h-16 mx-auto w-40 md:w-52 bg-green-400  flex sm:hidden"></div>

<a href="#" className="opacity-70 hover:opacity-100 text-center sm:text-left transform translate-y-3 sm:translate-y-0">Supporto</a>
<a href="#" className="opacity-70 hover:opacity-100 text-center sm:text-left">Vai al sito ufficiale</a>
</div>

<div className={`absolute flex gap-5 flex-col right-0 sm:right-[-87%] top-0 bg-[#0f0f0f] px-0 sm:px-14 py-2 pt-5 h-full w-full sm:w-auto transition transform sm:-translate-x-0 ${showRightBar}`}>

<div className="sm:hidden  cursor-pointer border-b border-[rgba(255, 255, 255, 0.623)] pb-2"  onClick={closeSideBarMobilRight}><div className="flex items-center gap-3 px-10 transform -translate-x-6"><i className="fal fa-angle-left cursor-pointer text-4xl"></i>ON DEMAND</div></div>
<a href="#" className="opacity-90 px-10 sm:px-0">OPERA</a>
<a href="#" className="opacity-90 px-10 sm:px-0">BALLETTO</a>
<a href="#" className="opacity-90 px-10 sm:px-0">CONCERTI</a>
<a href="#" className="opacity-90 px-10 sm:px-0">BAMBINI</a>
<a href="#" className="opacity-90 px-10 sm:px-0">PLAYLIST</a>
<a href="#" className="opacity-90 px-10 sm:px-0">DOCUMENTARI</a>
<a href="#" className="opacity-90 px-10 sm:px-0">BALLETTO</a>
<a href="#" className="opacity-90 px-10 sm:px-0">INTERVISTE</a>







</div>




</div>
</>
  );
}

export default App;
