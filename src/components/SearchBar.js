import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''};

    OnInputChange = (e) =>{
        this.setState({term: e.target.value });
        // console.log(this.state.term);
    };
    
    OnFormSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state.term);    
        this.props.OnTermSubmit(this.state.term);

        //Make Sure we call callback to
        //the parent component
    };
    
    

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.OnFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search from Youtube</label>
                        <input type="text" 
                        value={this.state.term} 
                        onChange= {this.OnInputChange}/>
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;