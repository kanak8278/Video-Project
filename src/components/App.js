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

    componentDidMount() {
        this.OnTermSubmit('deep mind|alpha-go')
    }

    OnTermSubmit = async term => {
      searchYouTube({key: KEY, q: term, maxResults: 5}, (response)=>{
        this.setState({
            videos:response,
            selectedVideo: response[0]
        });
    });    
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
    }; 

    render(){
        return(
            <div className="ui container">
                <SearchBar OnTermSubmit= {this.OnTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;