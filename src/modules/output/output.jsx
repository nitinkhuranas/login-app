import React from "react";

function Output(props) {
    const {
        commits, 
        isSuccess
    } = props; 

    if(!isSuccess){
        return <h3>Could not retrieve data</h3>
    }

    if(commits.length === 0){
        return null;
    }

    return (
        <table className='output'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Commit sha</th>
                </tr>
            </thead>
            <tbody>
            {
                commits.map((commit) => (
                    <tr key={commit.sha}>
                        <td>{commit.committer && 
                                <img src={commit.committer.avatar_url}/>
                            }
                        </td>
                        <td className='commit-sha'>{commit.sha}</td>
                    </tr>
                    )
                )
            }
            </tbody>
        </table>
    );
}

export default Output;