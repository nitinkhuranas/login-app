import Output from './output.jsx'
import {connect} from 'react-redux'
import * as selectors from '../input/selectors'

function mapStateToProps(state) {
    return {
        commits: selectors.getCommits(state),
        isSuccess: selectors.getIsSuccess(state),
    }
}

export default connect(mapStateToProps)(Output);