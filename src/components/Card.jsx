
import foodData from './data'
import './card.css'
import { useState } from 'react'

const Card = () => {

    const getAll = () => {
        console.log("all")
    }

    const getB = () => {
        console.log("breakfast");
    }
    const getL = () => {
        console.log("breakfast");
    }
    const getD = () => {
        console.log("breakfast");
    }

    const [search, setSearch] = useState("");

    const filteredFood = foodData.filter((item) => {
        console.log(item.name);
        return item.name.includes(search);
    });


    return (
        <>

            <div className='page'>

                <div className='nav'>
                    <div className='options'>
                        <button onClick={getAll}>All</button>
                        <button onClick={getB}>Breakfast</button>
                        <button onClick={getL}>Lunch</button>
                        <button onClick={getD}>Dinner</button>
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