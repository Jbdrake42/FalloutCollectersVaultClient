import React from "react";

class Home extends React.Component {

    componentDidMount(){
        this.props.QuoteatizeMeCaptain()
    }
    render() { 
        return <div className="home">
        <div className="homeheader">
            <h1>Welcome to the Fallout Wasteland Warfare Vault!</h1>
            <img className="homeimg" alt="the cover art" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fstargazersworld.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F07%2FFallout-Wasteland-Warfare-RPG-Board-Game-News.jpg%3Ffit%3D1200%252C675%26ssl%3D1&f=1&nofb=1"></img>
        </div >
        <div className="homepara">
            <h3>What is Fallout?</h3>
        <p> Fallout is a mostly videogame franchize about a post apocalypse America. Created by black isle Studios in 1997 as a spiritual successor to Wasteland, a 1988 rpg video game, 
            fallout started out as an isometric rpg, and was later a 3d action rpg after being purchased by Bethesda softworks  </p>
            <p> The Fallout universe is based in a post nuclear america and has a atompunk retrofuturistic setting based on post-war culture of 1950s United States. with the first game beginning in
                the year 2161, the protagonists must brave the irradated wasteland and battle mutants, rampaging robots, and the Greatest monster of all, their fellow men. After all, War, war never changes.
 </p>

        </div>
        <div> 
            <h3>What is Wasteland Warefare? </h3>
            <p>Fallout: Wasteland Warfare is a collectible tabletop Wargame. Players build a force from a varied group of characters and factions from across the fallout universe. Wasteland Warfare allows a multitude of ways to play the game, from a solo campaign with AI enemies, to a direct competition between your friends (or enemies). There is even an RPG you can play using this game.</p>
        </div>
        <div>
            <h3>What can FWW Colecter's vault do for you? </h3>
            <p> This site has a mutlitude of functions that can enhance your FWW experience! First the <b>Vault</b> allows the user to keep track of their collection and supplies additional information straight from the store.
            Secondly <b> Models</b> allows the user to show off thier painted models and view other fine examples from other users. Next the <b>Tools</b> page has a collection of web based tools that may be used for campaigns and games.
            Lastly The <b>Resources</b> page has a variety of links to other websites.
             </p>
            </div>
        </div>
    }
}
 
export default Home;