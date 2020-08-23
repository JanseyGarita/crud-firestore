import React, { useEffect, useState } from "react";
const Tabla = (props) => {
  const [cars, setCars] = useState([]);

  const updateCar = (id) => {
    props.setCurrCar(id);
  };
  const deleteCar = (id) => {
    props.db.collection("carros").doc(id).delete();
  };

  const initialQuery = () => {
    if (cars.length === 0) {
      props.db.collection("carros").onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setCars(data);
      });
    }
  };
  useEffect(initialQuery, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, i) => (
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>
              <button
                className="mr-1 btn btn-secondary"
                onClick={() => {
                  updateCar(car.id);
                }}
              >
                Editar
              </button>
              <button
                className="ml-1 btn btn-danger"
                onClick={() => {
                  deleteCar(car.id);
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
