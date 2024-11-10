import Nav from "./components/Nav"
import SolutionCard from "./components/SolutionCard"
import Contact from "./components/Contact"
import Showcaseoffer from "./components/Showcaseoffer"
import CollapsableCard from "./components/CollapsableCard"
import Footer from "./components/Footer"
export const Service = () => {


    return (

        <div className="flex flex-col">
            <Nav />

            <div className="flex flex-col relative gap-10 mt-[70px] items-center justify-center">
                <div>
                    <h2 className="text-2xl text-[#8F36FF] font-semibold ">Our Solutions</h2>
                </div>
                <div className="flex items-center justify-center flex-wrap w-1/2 ">
                    <SolutionCard image="/Screen Shot 2023-05-31 at 7.56(1).svg" header="Receive a Diagnosis" body="A diagnosis of ASD prescribed by a medical doctor (MD) or PhD is required before receiving ABA therapy covered by insurance." />
                    <SolutionCard image="Screen Shot 2023-05-31 at 7.56(3).svg" header="Intake" body="When you contact our team, we will take your insurance information and immediately begin the process of getting authorization for ABA services. Our system is streamlined to efficiently begin ABA services with minimal time between requesting and receiving care." />
                    <SolutionCard image="Screen Shot 2023-05-31 at 7.56(4).svg" header="Working with your Child" body="Our services are delivered by a combination of experienced Board Certified Behavior Analysts (BCBA) and highly devoted Behavior Technicians (BTs) at the time and location that is most convenient for your family. Our team implements the selected set of ABA techniques to address your child’s needs." />
                    <SolutionCard image="Screen Shot 2023-05-31 at 7.56(5).svg" header="Initial Assessment" body="Our clinical team assesses your child’s strengths and weaknesses to develop an individualized treatment plan." />
                    <SolutionCard image="Screen Shot 2023-05-31 at 7.56(6).svg" header="Coordinate Care" body="To ensure generalization of skills in school and across therapeutic settings, we coordinate and collaborate care with members of your child’s team." />
                    <SolutionCard image="Screen Shot 2023-05-31 at 7.56(7).svg" header="Intake" body="Through data analysis and direct supervision, we monitor your child’s progress and provide ongoing support. We offer consultation and parent training to deliver high quality care." />
                </div>
                <div className="absolute bottom-0 left-0">
                    <img src="/Rectangle 41.svg" alt="" />
                </div>
            </div>


            <Contact />
            <div className="relative">
                <img src="/Rectangle 42.svg" alt="" className="absolute top-0 right-0" />
                <Showcaseoffer position='bottom-right' direction='right' backgroundColor="#FFFFFF" cardImage='/fam.svg' shapeImage='/bluerectangle.svg' offsetX='-20px' offsetY='-20px' header='ABA therapy' body='Applied Behavior Analysis (ABA) therapy is the process of applying interventions to improve socially appropriate behaviors in every-day life. ABA focuses on developing skills while decreasing problem behavior. This evidenced based treatment leads to great levels of success and significantly improves symptoms of Autism Spectrum Disorder.' />
                <Showcaseoffer position='bottom-right' direction='left' backgroundColor="#FFFFFF" cardImage='/boy.svg' shapeImage='/greentiangle.svg' offsetX='-100px' offsetY='-40px' header='Autism' body="Autism spectrum disorder (ASD) is a complex condition that affects brain development and involves persistent challenges in speech and nonverbal social communication, social interaction, and restricted or repetitive behaviors. Each child with ASD possesses their individualized unique set of strengths and challenges. ABA therapy is proven to have profound impact on the development of many children with ASD." />
                <Showcaseoffer position='bottom-left' direction='right' backgroundColor="#FFFFFF" cardImage='/Screen Shot 2023-05-31 at 7.56 (8).svg' shapeImage='/orangetraingle.svg' offsetX='-100px' offsetY='-40px' header='Parent Training' >

                    <ul>
                        <li>Build Communication and Language Skills</li>
                        <li>Increase Social/Emotional skills</li>
                        <li>Improve Adaptive Daily Living Skills</li>
                        <li>Reduce Problem Behavior</li>
                    </ul>
                    <p className="mt-1">ABA uses effective strategies of positive reinforcement and understanding antecedents and consequences to increase and/or decrease behaviors. Skills include but are not limited to language development, play and leisure skills, peer interactions, learning and academic skills, and problem behaviors. (i.e. aggression). ABA therapy emphasizes positive social interactions, motivates learning, and improves the quality of life for individuals with autism and their families.</p>
                </Showcaseoffer>

                <Showcaseoffer position='bottom-left' direction='left' backgroundColor="#FFFFFF" cardImage='/Screen Shot 2023-05-31 at 7.56 (9).svg' shapeImage='/Rectanglegreen.svg' offsetX='-20px' offsetY='-20px' header='Individualized ABA Services'>


                    <ul className="list-disc">
                        <li>Intake and comprehensive skills assessment</li>
                        <li>Customized treatment plan</li>
                        <li>Behavior intervention plan</li>
                        <li>One on one ABA therapy</li>
                        <li>Supervision and Consultation</li>
                        <li>Parent Training</li>
                        <li>Coordination of care with other professionals</li>
                        <li>Coordination of care with school</li>
                        <p className="mt-1">Having a child diagnosed with ASD can be challenging and frustrating at times. We are dedicated to working together with you to ease your stress and create a brighter future for your family.</p>
                    </ul>

                </Showcaseoffer>
                <img src="/Rectangle 40 (1).svg" alt="" className="absolute bottom-0 left-0" />
            </div>
            <div className="mt-[70px] mb-10 flex flex-col gap-5 items-center justify-center">
                <h2 className="text-2xl text-bold">Common Questions About ABA Therapy</h2>
                <CollapsableCard header="What does ABA stand for?" body="ABA is an acronym for Applied Behavior Analysis, also referred to as Behavioral Engineering. The ABA method is made up of scientifically progressive techniques used to improve or correct certain types of behavior. Working with children within the autism spectrum, the therapy has proven success in managing problematic behavior while developing social and academic skills." />
                <CollapsableCard header="What does BCBA stand for?" body="" />
                <CollapsableCard header="Can you give me specific examples of behavior 
that ABA therapy focuses on?" body="" />
                <CollapsableCard header="Is there an age-appropriate time to begin ABA therapy?" body="" />
                <CollapsableCard header="How do I know if my child needs ABA therapy?" body=""/>
            </div>
            <Footer/>
        </div>

    )
}
