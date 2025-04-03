import { Link } from 'react-router-dom'

function Home() {

    return(
        <>
        <div>
            <h1>Welcome to the webpage of Selina Phetshiwe "Maxaba" Mtimba</h1>
            <p>Discover the lineage of Selina Phetshiwe "Maxaba" Mtimba, a legacy spanning five generations.</p>
            <p>Explore the stories of her descendants, from her children to her great-great-great-grandchildren.</p>
            <div class="image-container">
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731328613/family-pic2_xm7wlr.jpg" alt="Family-pic" />
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731409651/family-pic3-2_vftbhs_Banner_169_oarhlw.jpg" />
            </div>
            <div class="image-container">
            <p>"A family bound together across generations, sharing love and peace at each gathering, celebrating the togetherness that was instilled by those who came before and cherished by those who come after."</p>
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731411756/family-men-pic2-2_ewodzj.png" />       
            <img className="home-image2" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731412564/family-girls_yoztht.jpg" alt="Family-pic2" />
            </div>
            <div class="image-container">
            <p>"A family bound together across generations, sharing love and peace at each gathering, celebrating the togetherness that was instilled by those who came before and cherished by those who come after."</p>
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1743706818/Umgidi_ka_Sima_tzagb2.jpg" />       
            <img className="home-image2" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1743702505/Umtshato_ka_Nontombi_e9tess.jpg" />
            </div>
            <Link to="/">Back to home</Link>
        </div>
        </>
    )
}

export default Home
