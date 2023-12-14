import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => ({

    businesses: state.businesses

})


export default connect(mapStateToProps)(Details)
