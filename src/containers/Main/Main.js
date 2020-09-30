import React from 'react';
import './Main.scss';
import {connect} from 'react-redux';
import {Loader} from '../../ui/Loader/Loader';
import Card from '../../components/Card/Card';

class Main extends React.Component 
{
    render()
    {
        let {data} = this.props;

        if(data.length)
        {
            // console.log(data);
            return (
                <div className="row wrapper__row">
                {
                    data.map(elem => 
                    {
                        return <Card name={elem.name} height={elem.height} weight={elem.weight} key={elem.id} id={elem.id} />
                    })
                }
                </div>
            )
        }
        else 
        {
            return <Loader />
        }
    }
}


const mapStateToProps = state => ({
   data: state.data.data
});

export default connect(mapStateToProps, null)(Main);