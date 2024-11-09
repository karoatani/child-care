import Nav from "./components/Nav"
import SolutionCard from "./components/SolutionCard"
import Contact from "./components/Contact"


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
        </div>

    )
}
