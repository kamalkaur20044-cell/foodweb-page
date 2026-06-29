
import foodData from './data'
import './card.css'
import { useState } from 'react'

const Card = () => {

    const [category, setCategory] = useState("all");

    const getAll = () => {
        setCategory("all");
    }

    const getB = () => {
        setCategory("breakfast");
    }
    const getL = () => {
        setCategory("lunch");
    }
    const getD = () => {
        setCategory("dinner");
    }

    const [search, setSearch] = useState("");

    const filteredFood = foodData.filter((item) => {
        const matchSearch =
            item.name.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "all" || item.type === category;

        return matchSearch && matchCategory;
    });


    return (
        <>

            <div className='page'>

                <div className='nav'>
                    <div className='options'>
                        <button className={category === "all" ? "active" : ""}  onClick={getAll}>All</button>
                        <button  className={category === "breakfast" ? "active" : ""} onClick={getB}>Breakfast</button>
                        <button className={category === "lunch" ? "active" : ""} onClick={getL}>Lunch</button>
                        <button  className={category === "dinner" ? "active" : ""} onClick={getD}>Dinner</button>
                    </div>

                    <form>
                        <input placeholder='Search food items...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    </form>

                </div>


                <div className="card">

                    {filteredFood.map((item) => (

                        <div key={item.name} className='data'>
                            <div className='imdiv'>
                                <img src={item.image} alt={item.name} className='im' />
                            </div>
                            <div>
                                <h4>{item.name}</h4>
                                <p className='text'>{item.text}</p>
                                <div className='para'>
                                    <p id='p'>$ {item.price}.00</p>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Card