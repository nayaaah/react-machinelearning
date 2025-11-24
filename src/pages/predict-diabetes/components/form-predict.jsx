function FormPredict() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Pregnancies</legend>
                <input type="number" className="input" placeholder="Pregnancies" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Glucose</legend>
                <input type="number" className="input" placeholder="Glucose" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">BloodPreasure</legend>
                <input type="number" className="input" placeholder="BloodPreasure" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">SkinThickness</legend>
                <input type="number" className="input" placeholder="SkinThickness" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Insulin</legend>
                <input type="number" className="input" placeholder="Insulin" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">BMI</legend>
                <input type="number" className="input" placeholder="BMI" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">DiabetesPedigreeFunction</legend>
                <input type="number" className="input" placeholder="DiabetesPedigreeFunction" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input type="number" className="input" placeholder="Age" />
            </fieldset>

            <button className="btn btn-primary">Lakukan Prediksi</button>
        </div>
    )
}

export default FormPredict