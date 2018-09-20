import {connect} from 'react-redux'
import Input from './input.jsx'
import * as actions from './actions'

function mapDispatchToProps(dispatch) {
    return {
        onSubmitClick: function(owner, repo, base, head){
            dispatch(actions.getRepoData(owner, repo, base, head))
        }
    }
}

export default connect(null, mapDispatchToProps)(Input);