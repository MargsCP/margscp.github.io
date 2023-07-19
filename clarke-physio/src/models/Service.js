import dryNeedlingImage from "../images/serviceImages/Images/DryNeedling.jpeg"
import massageImage from "../images/serviceImages/Images/newMassages.jpeg"
import rehabImage from "../images/serviceImages/Images/MovementAssessment.jpeg"
import assessmentImage from "../images/serviceImages/Images/ManualTherapy.jpeg"
import strappingImage from "../images/serviceImages/Images/Strapping.jpeg"
import newTherapyImage from "../images/serviceImages/Images/newTherapy.jpeg" 
class Service{
    constructor(name, description, image){
        this.name = name;
        this.description = description;
        this.image = image;
    }

}
let servicesArray = []


//to be used moving forward in order to add a new service to the website
function addService(name, description, image){
    const newService = new Service (name, description, image)
    servicesArray.push(newService)

}

const dryNeedling = new Service(
    "Dry Needling", 
    "Through the precise insertion of fine needles into trigger points or tight muscles, dry needling stimulates the release of tension and promotes pain relief. This technique can help manage muscle pain, reduce spasms, and improve range of motion.",
    `${dryNeedlingImage}`)

const massages = new Service(
    "Sports Massages", 
    "Sports massages help alleviate muscle tension, reduce post-exercise soreness, enhance athletic performance, and promote relaxation and overall well-being.",
    `${massageImage}`)
const assessments = new Service(
    "Movement Assessment", 
    "A comprehensive evaluation of your body's movement patterns, assessing flexibility, strength, and posture. This assessment helps us identify areas of dysfunction or imbalance and tailor treatment plans accordingly.",
    `${assessmentImage}`)
const rehab = new Service(
    "Rehabilitation", 
    "Tailored rehabilitation programs focus on restoring function, strength, and mobility. Focused specific exercise plan with an injury or before or after surgery. ",
    `${rehabImage}`)
// const advice = new Service(
//     "Education and Advice", 
//     "Each patient should be empowered with knowledge and guidance. In addition to treatment, I provide valuable education on self-care strategies, injury prevention techniques and exercises to optimise your physical well-being.",
//     "https://img.freepik.com/premium-photo/male-doctor-s-hand-pointing-intervertebral-hernia-skeleton-spine-model-close-up-physiotherapist-pointing-spine-model-clinic_294132-591.jpg?w=2000")

const manualTherapy= new Service(
    "Manual Therapy", 
    "Hands-on techniques such as joint mobilizations, soft tissue manipulation, and stretching to alleviate pain, improve joint mobility, and promote tissue healing. Manual therapy can effectively address musculoskeletal conditions and enhance overall movement",
    `${newTherapyImage}`)

const strapping= new Service(
    "Strapping", 
    "Specialised taping techniques support and stabilize injured or vulnerable joints. Strapping provides structural support, enhances proprioception, and helps prevent further injury while allowing you to maintain optimal movement and function.",
    `${strappingImage}`)




servicesArray.push(dryNeedling)
servicesArray.push(massages)
servicesArray.push(assessments)
servicesArray.push(rehab)
//servicesArray.push(advice)
servicesArray.push(manualTherapy)
servicesArray.push(strapping)

export {servicesArray}