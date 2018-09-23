import {connect} from 'react-redux';
import Header from './header.jsx';
import * as loginActions from '../login/actions';

function mapDispatchToProps(dispatch) {
    return {
        onLogoutClick: function(){
            dispatch(loginActions.triggerLogoutUser());
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);