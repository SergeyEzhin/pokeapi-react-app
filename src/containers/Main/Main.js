import React from 'react';
import './Main.scss';
import {connect} from 'react-redux';
import {Loader} from '../../ui/Loader/Loader';
import Card from '../../components/Card/Card';
import {Filter} from '../../components/Filter/Filter';

class Main extends React.Component 
{
    render()
    {
        let data = this.props.filterData || this.props.data;

        if(data.length)
        {
            return (
                <React.Fragment>
                    <Filter />
                    <div className="row wrapper__row">
                    {
                        data.map(elem => 
                        {
                            return <Card name={elem.name} height={elem.height} weight={elem.weight} key={elem.id} id={elem.id} />
                        })
                    }
                    </div>
                </React.Fragment>
            )
        }
        else 
        {
            return <Loader />
        }
    }
}


const mapStateToProps = state => ({
   data: state.data.data,
   filterData: state.data.filterData
});

export default connect(mapStateToProps, null)(Main);