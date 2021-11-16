import React from "react";

class Resource extends React.Component {
    componentDidMount(){
        this.props.QuoteatizeMeCaptain()
    }
    render() { 
        return <div className="resource">
            <div className="resourceHeader">
            <h1>Resources</h1>
            </div>
            
            <div className="resourcechild">
            <h2><a target="blank" href="https://www.modiphius.net/pages/fallout-wasteland-warfare">Modiphius UK Website</a></h2>
            
            <p></p>
            </div>
            <div className="resourcechild">
            <h2><a target="blank" href="https://modiphius.us/">Modiphius US Store</a></h2>
            <p></p>
            </div>
            <div className="resourcechild">
            <h2><a target="blank" href="https://iamfanboystudio.blogspot.com/2020/06/fallout-wasteland-warfare-tacticas.html">
            IAMFANBOY'S STUDIO/ Tacticas, Guides, & Lists </a>
</h2>
            <p>IAMFANBOY'S STUDIO is a fan blog that contains exellent break down of factions, units and items</p>
            </div>
            <div className="resourcechild">
            <h2><a target="blank" href="https://www.modiphius.com/development-blog.html">FALLOUT: WASTELAND WARFARE
​DEVELOPMENT BLOG </a></h2>
            <p>This is the development blog that contains news and and developer commentary  </p>
            </div>
            <div className="resourcechild">
            <h2><a target="blank" href="https://forums.modiphius.com/c/fallout-wasteland-warfare/12">Fallout Wastland Warfare: official forums </a></h2>
            <p></p>
            </div>
           
            <div className="resourcechild">
            <h2><a target="blank" href="https://www.reddit.com/r/wastelandwarfare/"> r/wastelandwarfare </a></h2>
            <p>This is the subreddit for the game</p>
            </div>
            <div className="resourcechild">
            <h2><a target="blank" href="https://www.youtube.com/user/Modiphius"> Modiphius's Youtube Channel </a></h2>
            <p></p>
            </div>
            {/* <div className="resourcechild">
            <h2><a href=""> </a></h2>
            <p></p>
            </div> */}
        </div>;
    }
}
 
export default Resource;

