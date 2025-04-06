import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <p>Chitha Mthimba was the daughter of Nondlala "Xhayiya" Twalo. He was born in ..................., in the village of Upper Didimana, located in the Hewu district in the Eastern Cape Province of South Africa.</p>
                <p>He married Selina Phetshiwe Twalo, and together they were blessed with four children - Tozi Lizzie Ningiza, Stephen Mthimba, Silas Mthimba and Nikiwe Ndidi</p>
            <div className="about-page-cta">
            <p>Discover more detailed information about Chitha Mthimba's family history.</p>
            <Link className="link-button" to="/Home">Explore the Lineage</Link>
            </div>
        </div>
    );
}
