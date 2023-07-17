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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DLQYUnNo4IlRamwj_gb06ndSkZtlZOG4Ag&usqp=CAU")

const massages = new Service(
    "Sports Massages", 
    "Sports massages help alleviate muscle tension, reduce post-exercise soreness, enhance athletic performance, and promote relaxation and overall well-being.",
    "https://www.insure4sport.co.uk/blog/wp-content/uploads/sites/9/2022/12/sports-massage-oils.jpg")
const assessments = new Service(
    "Movement Assessment", 
    "A comprehensive evaluation of your body's movement patterns, assessing flexibility, strength, and posture. This assessment helps us identify areas of dysfunction or imbalance and tailor treatment plans accordingly.",
    "https://www.rheumatologistgatesville.co.za/img/services/musculoskeletal-disorders.jpg")
const rehab = new Service(
    "Rehabilitation", 
    "Tailored rehabilitation programs focus on restoring function, strength, and mobility. Focused specific exercise plan with an injury or before or after surgery. ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RULIjL61S38rXsg-sIIFPqokzhU7srvCAQ&usqp=CAU")
const advice = new Service(
    "Education and Advice", 
    "Each patient should be empowered with knowledge and guidance. In addition to treatment, I provide valuable education on self-care strategies, injury prevention techniques and exercises to optimise your physical well-being.",
    "https://img.freepik.com/premium-photo/male-doctor-s-hand-pointing-intervertebral-hernia-skeleton-spine-model-close-up-physiotherapist-pointing-spine-model-clinic_294132-591.jpg?w=2000")

const manualTherapy= new Service(
    "Manual Therapy", 
    "Hands-on techniques such as joint mobilizations, soft tissue manipulation, and stretching to alleviate pain, improve joint mobility, and promote tissue healing. Manual therapy can effectively address musculoskeletal conditions and enhance overall movement",
    "https://www.physio4u.net/wp-content/uploads/2017/01/9.jpg")

const strapping= new Service(
    "Strapping", 
    "Specialised taping techniques support and stabilize injured or vulnerable joints. Strapping provides structural support, enhances proprioception, and helps prevent further injury while allowing you to maintain optimal movement and function.",
    "https://upandactive.com.au/wp-content/uploads/2020/12/Shoulder-Tape-e1607318951531.jpg")




servicesArray.push(dryNeedling)
servicesArray.push(massages)
servicesArray.push(assessments)
servicesArray.push(rehab)
servicesArray.push(advice)
servicesArray.push(manualTherapy)
servicesArray.push(strapping)

export {servicesArray}