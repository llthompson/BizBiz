// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes } from '../redux/actions'
// import { deleteMake } from '../redux/actions'
import { removeRow } from '../redux/actions'
import Car from './Car'
// import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        // deleteMake: (index) => dispatch(deleteMake(index)),
        removeRow: (index) => dispatch(removeRow(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import)
