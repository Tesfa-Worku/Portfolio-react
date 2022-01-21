import Tesfa from "../Images/Tesfa.jpg"

const Home = () => {
    return(
        <div>
            <h1>Profile</h1>        
            <img src={Tesfa} alt="" className="float-md-start me-md-3 mb-md-3 w-100 d-md-none"/>
            <img src={Tesfa} alt="" className="float-md-start me-md-3 mb-md-3 w-50 d-none d-md-block"/> 
            
            <p className="fs-5"><strong className="fs-4">Experienced Team Player</strong> – Education and experience in comprehensive problem solving, creative troubleshooting, and complex project management. Accomplished with effective collaboration skills, team building capabilities and leadership in diverse and multifaceted operations. <br />
            I am known for my enthusiasm for complex projects, ability to turn constructive criticism into elegant solutions.</p>

            <p className="fs-5"><strong className="fs-4">Core Competencies</strong> – Motivated and dynamic Web Developer with a keen focus and experience in web application development and web layout design, with a strong work ethic and innate ability to adapt in ever-changing and challenging environments.</p>

            <p className="fs-5"><strong className="fs-4">UI Philosophies</strong> – I believe that simple, semantic structure can be easily optimized to work well in all browsers, on all devices, and will allow for excellent SEO. Through mutual respect with my coworkers, we can analyze and define clear job requirements. This results in well formed and well organized finished products.</p>
        </div>
    )
}

export default Home;