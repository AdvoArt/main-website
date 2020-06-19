import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Image from "../components/image"
export default () => (
   <Layout
        pageMeta={{
            title:"Comp"
        }}
    >
        <div class="container">
            <h1 class="header">Spring 2020 COMP</h1>
                <figure>
                    <Image name="advo2020Springcomp.jpg" style={{margin:"auto", width:"75%"}} align="middle"/>
                </figure>
            <p></p>
            <p class="text">
                Between its seven boards:  Art, Business, Design, Features, Fiction, Poetry and Technology, The Harvard Advocate
                provides a home for writers, artists, critics, designers, coders, dealmakers, and all others with an interest in the arts and
                letters. Every semester, <i>The Advocate</i> selects new members through a “Comp” process open to all Harvard undergraduates.
            </p>
            <p></p>
            <p class="text">
                Compers are evaluated exclusively on their ability to discuss, write about, create, design, sell, or code art. Though our
                comp is selective, our hope is that all participants will find it an enriching and rewarding experience. Please direct specific
                questions about the comp to the <Link to="about">editor of the board</Link> that you are interested
                in comping.
            </p>
            <p></p>
            <p className="text center">
            If you are interested in learning more about our comp, please fill out <a href="https://forms.gle/X4NfhzVgDsBcFUyaA">this comp interest form</a> and contact the relevant board head:
            </p>
            <p></p>
            <div class="center">
                <ul>
                    <li style={{listStyleType: "none"}}>art@theharvardadvocate.com</li>
                    <li style={{listStyleType: "none"}}>design@theharvardadvocate.com</li>
                    <li style={{listStyleType: "none"}}>business@theharvardadvocate.com</li>
                    <li style={{listStyleType: "none"}}>features@theharvardadvocate.com</li>
                    <li style={{listStyleType: "none"}}>fiction@theharvardadvocate.com</li>
                    <li style={{listStyleType: "none"}}>poetry@theharvardadvocate.com</li>
                    <li style={{listStyleType: "none"}}>tech@theharvardadvocate.com</li>
                </ul>
            </div>
        </div>
   </Layout>
)
