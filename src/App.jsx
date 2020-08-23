import React, { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import { db } from "./Firebase";
import Tabla from "./components/Tabla";
const App = () => {
  //Lógica
  const [currCar, setCurrCar] = useState(-1);
  return (
    <div className="App">
      <div className="container-fluid p-0 m-0">
        <div className="row p-4">
          <div className="col-sm-12 col-md-5">
            <Formulario db={db} currCar={currCar} setCurrCar={setCurrCar}/>
          </div>
          <div className="col-sm-12 col-md-7">
            <Tabla db={db} setCurrCar={setCurrCar}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
