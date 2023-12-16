//containers/Detail.js

import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeRow } from '../redux/actions'

const mapStateToProps = (state) => ({
    businesses: state.businesses
})

const mapDispatchToProps = (dispatch) => {
    return {
        removeRow: (index) => dispatch(removeRow(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)
