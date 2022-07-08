// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import AddTutorial from "./components/AddTutorial";
// import Tutorial from "./components/Tutorial";
// import TutorialsList from "./components/TutorialsList";
// export const App = ()=> {
//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/tutorials" className="navbar-brand">
          
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/tutorials"} className="nav-link">
              
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/add"} className="nav-link">
              
//             </Link>
//           </li>
//         </div>
//       </nav>
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<TutorialsList/>} />
//           <Route path="/tutorials" element={<TutorialsList/>} />
//           <Route path="/add" element={<AddTutorial/>} />
//           <Route path="/tutorials/:id" element={<Tutorial/>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }


export const DataComponet = () =>{
    const getdata = async ()=>{
        const url = 'https://itsc-proyectofinal.azurewebsites.net/paciente';
        const rep = await fetch(url)
        console.log(rep);
    }
    return(<>
        { console.log(getdata()) } 
        </>
    )
}