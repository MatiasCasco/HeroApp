import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import {useMemo} from "react";

export const HeroPage = () => {
    const { id } = useParams();
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
    };

    if (!hero) {
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-4 text-center">
                    <img
                        src={heroImageUrl}
                        alt={hero.superhero}
                        className="img-fluid rounded shadow-lg animate__animated animate__fadeInLeft"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>

                <div className="col-md-8">
                    <h1 className="text-primary">{hero.superhero}</h1>
                    <hr />

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-secondary-subtle">
                            <b>Alter ego:</b> {hero.alter_ego}
                        </li>
                        <li className="list-group-item bg-light">
                            <b>Publisher:</b> {hero.publisher}
                        </li>
                        <li className="list-group-item bg-secondary-subtle">
                            <b>First appearance:</b> {hero.first_appearance}
                        </li>
                    </ul>

                    <h5 className="mt-4">Characters</h5>
                    <p>{hero.characters}</p>

                    <button
                        onClick={onNavigateBack}
                        className="btn btn-outline-dark btn-lg mt-3 animate__animated animate__fadeInUp"
                        style={{ transition: 'all 0.3s ease' }}
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
};