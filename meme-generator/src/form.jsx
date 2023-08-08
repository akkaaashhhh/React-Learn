import React from "react"
import './styles.css'

export default function Form(){
    const [memeImage, setmemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemeImages, setMemeImages] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data=>setMemeImages(data))
    })
    function handleClick(){
        const memesArr = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArr.length);
        const url = memesArr[randomIndex].url;
        setmemeImage(oldvalue=>({
                ...oldvalue,
                randomImage:url
        }))
    }
    function handleChange(event){
        const {name,value} = event.target;
        setmemeImage(prevImage => ({
            ...prevImage,
            [name]: value
    }))
    }
    return(
            <main className="main">
                <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                    <button className="form--button" onClick={handleClick}>Get a new meme image</button>
                </div>
                <div className="meme">
                    <img src={memeImage.randomImage} alt="" className="meme--image"/>
                    <h2 className="meme--text top">{memeImage.topText}</h2>
                    <h2 className="meme--text bottom" >{memeImage.bottomText}</h2>
                </div>
            </main>
    )
} 