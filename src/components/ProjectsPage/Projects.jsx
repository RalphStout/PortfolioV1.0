import './Projects.css';
import StalkerPreview from "../../Assets/StalkerPreview.jpeg";
import ToDoList from "../../Assets/ToDoList.png";
import InProgress from "../../Assets/Code.jpg";

function Projects(){
    return (
        <div className='Projects-Container' id='Projects-Container'>
            <h1>Projects</h1>
            <div className="cardcontainer">
                <div className="cards">
                    <img class="zoom" src={StalkerPreview} alt="StalkerPreview"></img>
                    <div className="Content fade">
                        <div className="title">Stalker Social App</div>
                        Stalker the social app to become friends with strangers!
                        This app was created so that you can chat with others around
                        you, and if both parties are enjoying their chat they can
                        share each others location.
                    </div>
                </div>
                <div className="cards">
                    <img class="zoom" src={ToDoList} alt="ToDoList"></img>
                    <div className="Content fade">
                        <div className="title">ToDoList</div>
                        A simple to do List that allows you to track task you
                        have set for the day. If you need to remind yourself about
                        something just hop on the website and add a task to your
                        list. Its that easy!
                    </div>
                </div>
                <div className="cards">
                    <img class="zoom" src={InProgress} alt="Project In Progress"></img>
                    <div className="Content fade">
                        <div className="title">The Flower Slab In-Progress</div>
                        A Website for a small florist. This website will allow
                        customers to create and purchase a unique bouquet of flowers
                        of the florists existing inventory. This project will use the
                        Stripe payment API.
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;