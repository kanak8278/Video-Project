import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

const KEY  = 'AIzaSyDWBgtLkgIOqxAEyMkejsNeGolgV11p-do';

class App extends React.Component{

    state = {videos: []};
    OnTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });
        // console.log(response.data.items);
        this.setState({ videos:response.data.items});
    };



    render(){
        return(
            <div className="ui container">
                <SearchBar OnTermSubmit= {this.OnTermSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;