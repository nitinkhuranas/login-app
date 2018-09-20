import {connect} from 'react-redux';
import Home from './home.jsx';
import * as selectors from '../login/selectors';

function mapStateToProps(state) {
    return {
        isAuthenticated: selectors.getIsAuthenticated(state),
    }
}

export default connect(mapStateToProps)(Home);