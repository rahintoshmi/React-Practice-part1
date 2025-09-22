import "./App.css";
export default function Singer({singer}){
    return (
        <div className="address">
            <h3>
                Name: {singer.name}
            </h3>
            <h3>
                Age: {singer.age}
            </h3>
        </div>
    )
}