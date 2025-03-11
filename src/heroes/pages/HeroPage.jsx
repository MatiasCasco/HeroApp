import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../helpers";


export const HeroPage = () => {
    const {id} = useParams();
    const heroImageUrl =`/assets/heroes/${id}.jpg`;

    const navigate = useNavigate()

    const hero = getHeroById(id);

     const onNavigateBack = () => {
         navigate(-1);
         // window.history.back();  retrosede una pagina
     }

    if (!hero) {
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="row mt-1">
            <div className="col-3">
                <img
                    src={heroImageUrl}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-9">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className="list-group-item"> <b>Publisher: </b>{ hero.publisher }</li>
                    <li className="list-group-item"> <b>First appearence: </b>{ hero.first_appearance }</li>

                    <h5 className="mt-3"> Characters </h5>
                    <p>{ hero.characters }</p>
                </ul>
                <button
                    onClick={onNavigateBack}
                    className="btn btn-outline-primary"
                >
                    Volver
                </button>
            </div>
        </div>
    );
}