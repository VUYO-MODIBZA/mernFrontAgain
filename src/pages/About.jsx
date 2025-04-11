import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <p>Chitha Mthimba was the son of Nondlala Xhayiya. He was born in the village of Upper Didimana, located in the Hewu district in the Eastern Cape Province of South Africa.</p>
                <p>He married Selina Phetshiwe Twalo, and together they were blessed with four children - Tozi Lizzie Ningiza, Stephen Mthimba, Silas Mthimba and Nikiwe Ndidi</p>
                <div className="about-page-cta">
                    <div className="image-container">
                        <img className="home-image1" src="https://res.cloudinary.com/dhcsne1pn/image/upload/v1743956313/Imvelaphi%20ka%20Chitha%20Mthimba.png" alt="Family-tree" />
                        <p>Discover more detailed information about Chitha Mthimba's family history.</p>
                        <Link className="link-button" to="/Children">Explore the Lineage</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

