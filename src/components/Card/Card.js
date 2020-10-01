import React from 'react';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Card.scss';

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
            <div className="card">
                <div className="card__image">
                    <img src={process.env.PUBLIC_URL + '/img/img_plug.svg'} alt="" />
                </div>
                <div className="card__body">
                    <h5 className="card__title">{name}</h5>
                    <div className="card__specifications">
                        <div className="card__characteristic">
                            <img src={process.env.PUBLIC_URL + '/img/icon_height.svg'} alt=""/>
                            <span>{height}</span>
                        </div>
                        <div className="card__characteristic">
                        <img src={process.env.PUBLIC_URL + '/img/icon_weight.svg'} alt=""/>
                            <span>{weight}</span>
                        </div>
                    </div>
                    <button className="btn card__btn" data-id={id} onClick={clickHandler}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card)