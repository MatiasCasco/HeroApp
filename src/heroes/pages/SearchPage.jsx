import {HeroCard} from "../components";
import {useForm} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {getHeroesByName} from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const heroes = getHeroesByName(q);
    /*console.log({query});*/

    const {searchText, onInputChange, onResetForm} = useForm({
        searchText: q
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();
        /*if ( searchText.trim().length <= 1 ) return;*/
        console.log(searchText);
        navigate(`?q=${searchText}`);

      /*onResetForm();*/
    }

    return (
        <>
            <h1>Search Page</h1>
            <br />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-2 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        q === ''?
                            <div className="alert alert-info">
                                 Search a hero...
                            </div>
                            : heroes.length === 0 &&  (
                                <div className="alert alert-danger">
                                    No hero with <b>{q}</b>
                                </div>
                        )
                     }





                    {
                        heroes.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );

}