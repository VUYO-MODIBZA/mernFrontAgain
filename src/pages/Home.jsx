import { Link } from 'react-router-dom'

function Home() {

    return(
        <>
        <div>
            <h1>Welcome to the webpage of Chitha Mthimba and Selina Phetshiwe "Maxaba" Mthimba</h1>
            <p>Discover the lineage of Chitha Mthimba and Selina Phetshiwe "Maxaba" Mthimba, with a legacy spanning five generations.</p>
            <p>Explore the stories of their descendants, from the children to the great-great-great-grandchildren.</p>
            <div class="image-container">
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731328613/family-pic2_xm7wlr.jpg" alt="Family-pic" />
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731409651/family-pic3-2_vftbhs_Banner_169_oarhlw.jpg" />
            </div>
            <div class="image-container">
            <p>"As a family that is bound together across generations, we celebrate the unity and togetherness that was instilled by those who came before and cherished by those who come after."</p>
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1731411756/family-men-pic2-2_ewodzj.png" />       
            <img className="home-image2" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1743709775/IMG-20211231-WA0033_b1adf1.jpg" />
            </div>
            <div class="image-container">
            <p>"Rooted in a rich history, strengthened by tradition, and carried forward with pride, our lineage is a testament to the bonds that time cannot break. "</p>
            <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1743709775/family-tree/IMG-20220319-WA0009_u4asgt.jpg" />       
            <img className="home-image2" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1743709775/family-tree/IMG-20211231-WA0033_b1adf1.jpg" />
            </div>
            <p>Through stories, memories, and shared experiences, we honor our past, embrace our present, and inspire future generations to continue the legacy.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to top
            </button>
        </div>
        </>
    )
}

export default Home
