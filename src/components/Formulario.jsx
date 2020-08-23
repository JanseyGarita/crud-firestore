import React, { useEffect, useState } from "react"; //snippet: imr
const Formulario = (props) => {
  //snippet: sfc
  const initialCar = {
    id: -1,
    model: "",
    make: "",
  };
  const [car, setCar] = useState(initialCar);

  useEffect(() => {
    const fetchCurrCar = async () => {
      if (props.currCar !== -1) {
        const aux = await props.db
          .collection("carros")
          .doc(props.currCar)
          .get();
        setCar({ ...aux.data(), id: aux.id });
      }
    };
    fetchCurrCar();
  }, [props.currCar, props.db]);

  const editarCarro = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };
  const guardar = async () => {
    if (props.currCar === -1) {
      await props.db.collection("carros").doc().set(car);
    } else {
      await props.db.collection("carros").doc(car.id).update(car);
    }
    setCar(initialCar);
  };
  return (
    <div className="container-fluid">
      <form>
        <div className="mb-3">
          <label htmlFor="modelo" className="form-label">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            id="modelo"
            name="model"
            onChange={editarCarro}
            value={car.model}
          />
          {/*<div id="emailHelp" className="form-text">
                Texto de ayuda
            </div>*/}
        </div>
        <div className="mb-3">
          <label htmlFor="marca" className="form-label text-capitalize">
            marca
          </label>
          <input
            type="text"
            className="form-control"
            id="marca"
            name="make"
            value={car.make}
            onChange={editarCarro}
          />
        </div>
        <button type="button" onClick={guardar} className="btn btn-primary">
          {car.id === -1 ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
