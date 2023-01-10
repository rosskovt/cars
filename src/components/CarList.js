import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const { name, cars } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return {
            cars: filteredCars,
            name: form.name,
        }
    });

    const dispatch = useDispatch();

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (<div key={car.id} className={`panel ${bold && 'bold'}`}>
            <p>{car.name} - ${car.cost}</p>
            <button className="button is-danger" onClick={() => handleCarDelete(car)}>Delete</button>
        </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
};

export default CarList;