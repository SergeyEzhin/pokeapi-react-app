import React from 'react';
import {useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';

const Card = ({name, height, weight, id, history}) => 
{
    const data = useSelector(state => state.data.data);

    function clickHandler(e)
    {
        let currentButton = e.target;
        let id = +currentButton.dataset.id;
        let obj = data.filter(elem => elem.id === id);
        
        history.push({
            pathname: '/pokemon/' + obj[0].id,
            state: obj[0]
        });
    }

    return (
        <div className="col-md-3 wrapper__column">
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/img/img_plug_card.png'} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Имя: {name}</h5>
                    <p className="card-text">Высота: {height}</p>
                    <p className="card-text">Ширина: {weight}</p>
                    <button className="btn btn-info text-white mt-3" data-id={id} onClick={clickHandler}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card)