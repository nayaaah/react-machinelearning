import { useState } from "react"
import FormPredict from "./components/form-predict"

function PredictDiabetesPage(){
    const [predictResult, setPredictResult] = useState(null)
    const [isLoading, setLoading] = useState(false)
    return (
        <div className="min-h-screen bg-slate-50 flex item-center justify-center">
            <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-2 gap-5 bg-white p-5 rounded-3xl max-w-6xl shadow w-full">
                    <div>
                        <div className="rounded-full bg-primary/50 text-secondary">
                            Demo Machine Learning
                        </div>
                        <h1>Prediksi Diabetes</h1>
                        <p>Isi formulis di bawah ini untuk mendapatkan hasil analisis Diabetesmu</p>
                        <div>
                            <FormPredict 
                            isLoading={isLoading} 
                            setLoading={setLoading}
                            setPredictResult={setPredictResult}/>
                        </div>
                    </div>
                    <div>
                        Right : 
                        HASIL PREDIKSI : Sepertinya {predictResult === 0 ? "Sepertinya negative" : "positif"}
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default PredictDiabetesPage