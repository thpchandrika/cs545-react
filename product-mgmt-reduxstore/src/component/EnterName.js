import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EnterName = () => {
    const [personName, setPersonName] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleNext = (e) => {
        dispatch({ type: 'set_person_name', personName: personName });
        navigate("/productlist");
    }

    return (
        <div>
            Enter Your Name <input type="text"
                value={personName}
                id="personName"
                onChange={e => setPersonName(e.target.value)} />
            <button id="nextBtn" onClick={handleNext} >Next</button>
        </div>
    )
}

export default EnterName;