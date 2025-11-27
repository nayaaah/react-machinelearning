import { useState } from "react"
import http from "../../../utils/http"

function FormPredict({
    isLoading, setLoading, setPredictResult
}) {
    const [form, setForm] = useState({
        Pregnancies : 0,
        Glucose : 0,
        BloodPreasure : 0,
        SkinThickness : 0,
        Insulin : 0,
        BMI : 0,
        DiabetesPedigreeFunction : 0,
        Age : 0
    })

    const onHandleChange = (event) => {
        const {name, value} = event.target

        setForm({
            ...form,
            [name] : value
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        try {
            const response = await http.post("/predict", form)

            const {data, meta} = response.data

            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Pregnancies</legend>
                <input 
                type="number" 
                onChange={onHandleChange} 
                name="Pregnancies" 
                value={form.Pregnancies} 
                className="input" 
                placeholder="Pregnancies" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Glucose</legend>
                <input 
                type="number" 
                onChange={onHandleChange} 
                name="Glucose" 
                value={form.Glucose} 
                className="input" 
                placeholder="Glucose" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">BloodPreasure</legend>
                <input 
                type="number" 
                onChange={onHandleChange} 
                name="BloodPreasure" 
                value={form.BloodPreasure} 
                className="input" 
                placeholder="BloodPreasure" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">SkinThickness</legend>
                <input 
                type="number" 
                onChange={onHandleChange}
                name="SkinThickness" 
                value={form.SkinThickness} 
                className="input" 
                placeholder="SkinThickness" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Insulin</legend>
                <input type="number" 
                onChange={onHandleChange} 
                name="Insulin" 
                value={form.Insulin} 
                className="input" 
                placeholder="Insulin" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">BMI</legend>
                <input 
                type="number" 
                onChange={onHandleChange}
                name="BMI" 
                value={form.BMI} 
                className="input" 
                placeholder="BMI" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">DiabetesPedigreeFunction</legend>
                <input 
                type="number" 
                onChange={onHandleChange}
                name="DiabetesPedigreeFunction" 
                value={form.DiabetesPedigreeFunction} 
                className="input" 
                placeholder="DiabetesPedigreeFunction" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input 
                type="number" 
                onChange={onHandleChange}
                name="Age" 
                value={form.Age} 
                className="input" 
                placeholder="Age" />
            </fieldset>

            <button className="btn btn-primary" disabled={isLoading}>
                {
                    isLoading ? "Sedang berfikir" : "Lakukan Prediksi" 
                }
                Lakukan Prediksi</button>
        </div>
        </form>
        
    )
}

export default FormPredict