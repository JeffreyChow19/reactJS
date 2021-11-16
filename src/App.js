import React, {useState} from "react";
import './App.css';

// list drakor
function App() {
  const [pageButton, setPageButton] = useState('Wishlist');
  const [wishlist, setWishlist] = useState([]);
  const [wishlistJudul, setWishlistJudul] = useState([]);
  
  const [drakor] = useState([
    {
      judul : 'Crash Landing on You',
      image : 'https://upload.wikimedia.org/wikipedia/id/6/64/Crash_Landing_on_You_main_poster.jpg',
      genre : '2020 | Romantic Comedy',
      text : "Crash Landing on You (Korean: 사랑의 불시착; Hanja: 사랑의 不時着; RR: Sarang-ui Bulsichak; MR: Sarang-ŭi Pulshich'ak; lit. Love's Emergency Landing) is a 2019–2020 South Korean television series written by Park Ji-eun, directed by Lee Jeong-hyo and starring Hyun Bin, Son Ye-jin, Kim Jung-hyun and Seo Ji-hye. It is about a successful South Korean businesswoman and chaebol heiress who, while paragliding in Seoul, South Korea, is swept up in a sudden storm, crash-lands in the North Korean portion of the DMZ, and meets an army captain in the Korean People's Army who decides he will help her hide. Over time, they fall in love, despite the divide and dispute between their respective countries.",
    },
    {
      judul : 'Descendants of the Sun',
      image : 'https://upload.wikimedia.org/wikipedia/en/6/6e/DescendantsoftheSun.jpg',
      genre : '2016 | Romance, Melodrama, Action',
      text : "Descendants of the Sun (Korean: 태양의 후예; Hanja: 太陽의 後裔; RR: Taeyang-ui Huye) is a 2016 South Korean television series starring Song Joong-ki, Song Hye-kyo, Jin Goo, and Kim Ji-won. It aired on KBS2 from February 24 to April 14, 2016 for 16 episodes. KBS then aired three additional special episodes from April 20 to April 22, 2016 containing highlights and the best scenes from the series, the drama's production process, behind-the-scenes footage, commentaries from cast members and the final epilogue.",
    },
    {
      judul : 'Hotel del Luna',
      image : 'https://upload.wikimedia.org/wikipedia/en/0/00/Hotel_Del_Luna.jpg',
      genre : '2019 | Dark Fantasy, Romantic Comedy',
      text : "Hotel del Luna (Korean: 호텔 델루나; RR: Hotel delluna) is a 2019 South Korean television series, starring Lee Ji-eun (IU) and Yeo Jin-goo as the owner and manager, respectively, of the eponymous hotel that caters only to ghosts. Produced by GT:st, written by the Hong sisters and directed by Oh Choong-hwan, it aired on tvN from July 13 to September 1, 2019.",
    },
    {
      judul : "What's Wrong with Secretary Kim",
      image : 'https://upload.wikimedia.org/wikipedia/en/1/10/What%27s_Wrong_with_Secretary_Kim.jpg',
      genre : '2018 | Romantic Comedy',
      text : "What's Wrong with Secretary Kim (Korean: 김비서가 왜 그럴까; RR: Kimbiseoga Wae Geureolkka) is a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, which was then serialized into a Webtoon comic by KakaoPage in 2015.[1] The series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes.",
    },
    {
      judul : 'Start-Up',
      image : 'https://upload.wikimedia.org/wikipedia/en/1/12/Start-Up_2020.jpg',
      genre : '2020 | Drama, Romance',
      text : "Start-Up (Korean: 스타트업; RR: Seutateueop) is a South Korean television series starring Bae Suzy, Nam Joo-hyuk, Kim Seon-ho and Kang Han-na. The series revolves around a woman who has dreams of becoming an entrepreneur like Steve Jobs, and her love triangle between a man who is secretly her first love and another man who is pretending to be her first love.It aired on tvN from October 17 to December 6, 2020, every Saturday and Sunday at 21:00 (KST). It is available for streaming on Netflix.",
    },
  ]);

  const [overview, setOverview] = useState(drakor[0]);

  const changeOverview = (jenis) =>{
    setOverview(jenis);
    document.getElementById('overviews').style.display = 'inline-flex';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  };

  const addToWishlist = (movie) => {
    let status = true;
    for(let i=0; i<wishlistJudul.length; i++){
      if(wishlistJudul[i]===movie.judul){
        status = false;
      }
    }

    if (status){
      setWishlist([...wishlist, {...movie}]);
      setWishlistJudul([...wishlistJudul, movie.judul]);
    }
    
  };

  const removeFromWL = (movieToRemove) => {
    setWishlist(
      wishlist.filter((movie) => movie !== movieToRemove)
    );
  };

  const renderMain = () => (
    <>
      <div className = "navbar">
        <div className="title"><h3>reactDRAKOR</h3></div>
        <div className="pageButton"><button onClick={() => setPageButton('Home')}><h3>{pageButton} ({wishlist.length})</h3></button></div>
      </div>

      <div className="overviews" id="overviews">
        <div className="filmPic">
          <img src={overview.image}/>
        </div>
        <div className="specs">
          <div className="judul">
            {overview.judul}
            <button onClick={() => {document.getElementById('overviews').style.display = 'none'}}>&#10005;</button>
          </div>
          <div className="genre">{overview.genre}</div>
          <div className="text"><p>{overview.text}</p></div>
        </div>
      </div>

      {drakor.map((jenis) => (
        <div className="renderFilms">
          <div className="films">
            <img src={jenis.image}></img>
            <div className="buttons">
              <button onClick={() => changeOverview(jenis)}>View More</button>
              <button onClick={() => addToWishlist(jenis)}>Add to Wishlist</button>
            </div>
          </div>
        </div>
      ))}

    </>
  );
  
  
  const renderWishlist = () => (
    <>
      <div className = "navbar">
        <div className="title"><h3>reactDRAKOR</h3></div>
        <div className="pageButton"><button onClick={() => setPageButton('Wishlist')}><h3>{pageButton}</h3></button></div>
      </div>

      <div className="overviews" id="overviews">
        <div className="filmPic">
          <img src={overview.image}/>
        </div>
        <div className="specs">
          <div className="judul">
            {overview.judul}
            <button onClick={() => {document.getElementById('overviews').style.display = 'none'}}>&#10005;</button>
          </div>
          <div className="genre">{overview.genre}</div>
          <div className="text"><p>{overview.text}</p></div>
        </div>
      </div>

      {wishlist.map((jenis) => (
        <div className="renderFilms">
          <div className="films">
            <img src={jenis.image}></img>
            <div className="buttons">
              <button onClick={() => changeOverview(jenis)}>View More</button>
              <button onClick={() => removeFromWL(jenis)}>Remove</button>
            </div>
          </div>
        </div>
      ))}

    </>
  );

  return (
    <div className="App">
      {pageButton === 'Wishlist' && renderMain()}
      {pageButton === 'Home' && renderWishlist()}
    </div>
  );
};

export default App;
