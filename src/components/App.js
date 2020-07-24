import React from 'react'
import searchYouTube from 'youtube-search-api-with-axios';
import SearchBar from './SearchBar'
// import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY  = 'AIzaSyB9YW_RZaZ2pencNd-pV8pd9Z7HHEHJ_LM';

class App extends React.Component{

    state = {videos: [], selectedVideo: null};
    // OnTermSubmit = async term => {
    //     const response = await youtube.get("/search", {
    //       params: {
    //         q: term,
    //         part: "snippet",
    //         maxResults: 5,
    //         type: 'video',
    //         key: KEY
    //       }
    //     });
    //     // console.log(response.data.items);
    //     this.setState({ videos:response.data.items});
    // };


    OnTermSubmit = async term => {
      searchYouTube({key: KEY, q: term, maxResults: 5}, (response)=>{
        this.setState({ videos:response});
    });    
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
    }; 

    render(){
        return(
            <div className="ui container">
                <SearchBar OnTermSubmit= {this.OnTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        );
    }
}

export default App;