import Nav from './components/Nav'
import Showcase from './components/Showcase'
import Showcaseoffer from './components/Showcaseoffer'
import Footer from './components/Footer'
const About = () => {
    return (
        <div>
            <Nav />
            <Showcase heading='We focus on you!' body='At ABA Home Therapy we develop therapy treatment plans based on the unique needs of each of our clients. We provide Home Based, School Based and Community Based ABA services to infants, children, and young adults diagnosed with ASD.' />

            <Showcaseoffer position='bottom-left' direction='right' backgroundColor="#FFFFFF" cardImage='/Screen Shot 2023-05-31 at 7.56.svg' shapeImage='/Rectangleshowcase.svg' offsetX='-20px' offsetY='-20px' header='Home Based' body='Providing ABA therapy services in the home allows us to work with your child in their natural environment. Your clinical team will be able to engage with your entire family as part of their treatment plan to improve generalization of skills.' />
            <Showcaseoffer position='bottom-right' direction='left' backgroundColor="#F6F6F6" cardImage='/Screen Shot 2023-05-31 at 7.56 (6).svg' shapeImage='/Polygonblue.svg' offsetX='-100px' offsetY='-40px' header='School Based' body="We have extensive experience providing ABA therapy service in school, including Pre-School, Elementary, Middle, and High School. Providing services in school allows us to collaborate with your child's teachers, other school therapists, and the school administration to effectively incorporate ABA in the school environment." />
            <Showcaseoffer position='bottom-left' direction='right' backgroundColor="#FFFFFF" cardImage='/Screen Shot 2023-05-31 at 7.56 (7).svg' shapeImage='/Rectanglegreen.svg' offsetX='-20px' offsetY='-20px' header='Parent Training' body="We provide continual parent training for all of our families as part of your child's ABA therapy services. This is a critical component of our treatment plan as we need to make sure that everything our BCBAs and Behavior Technicians are working on with your child are being followed by your entire family." />
            <Footer/>
        </div>
    )
}

export default About