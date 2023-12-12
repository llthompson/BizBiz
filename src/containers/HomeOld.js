import { connect } from 'react-redux'
import Home from '../components/HomeOld'


const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Home)
