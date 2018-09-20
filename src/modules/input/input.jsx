import React from "react";

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            owner: 'Jam3',
            repo: 'math-as-code',
            base: 'cc58af6e948b55aac9b74ba6d2257705ceedcac3',
            head: '25f6d2034735210e9981b74b58836c17f9b02663',
            isValidForm: false,
        }

        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleRepoChange = this.handleRepoChange.bind(this);
        this.handleBaseChange = this.handleBaseChange.bind(this);
        this.handleHeadChange = this.handleHeadChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleOwnerChange(evt){
        this.setState({
            owner: evt.target.value,
        })
    }

    handleRepoChange(evt){
        this.setState({
            repo: evt.target.value,
        })
    }

    handleBaseChange(evt){
        this.setState({
            base: evt.target.value,
        })
    }

    handleHeadChange(evt){
        this.setState({
            head: evt.target.value,
        })
    }

    setIsValidForm(isValid){
        this.setState({
            isValidForm : isValid,
        });
    }

    handleSubmitClick(){
        const {
            owner,
            repo,
            base,
            head,
        } = this.state;

        if(!owner || !repo || !base || !head){
            this.setIsValidForm(true);
            return;
        }

        this.setIsValidForm(false);
        this.props.onSubmitClick(owner, repo, base, head);
    }

    render() {
        const {
            owner,
            repo,
            head,
            base,
            isValidForm
        } = this.state;

        return (
            <div className='input'>
                <div className='input-item'>
                    <div>owner</div>
                    <input 
                        type="text" 
                        value={owner} 
                        onChange={this.handleOwnerChange}
                    />
                </div>
                <div className='input-item'>
                    <div>repository</div>
                    <input 
                        type="text" 
                        value={repo} 
                        onChange={this.handleRepoChange}
                    />
                </div>
                <div className='input-item'>
                    <div>base commit</div>
                    <input 
                        type="text" 
                        value={base} 
                        onChange={this.handleBaseChange}
                    />
                </div>
                <div className='input-item'>
                    <div>head commit</div>
                    <input 
                        type="text" 
                        value={head} 
                        onChange={this.handleHeadChange}
                    />
                </div>
                <button 
                    className='submit-button'
                    onClick={this.handleSubmitClick}
                >
                    submit
                </button>
                {isValidForm &&
                    <div>All fields are required</div>
                }
            </div>
        );
    }
}

export default Input;