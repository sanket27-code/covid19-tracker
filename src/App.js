import React, {useState, useEffect} from 'react'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import Country from './Components/Country_card/Country'
import Logo from './Components/Logo/Logo'
import Precautions from './Components/Precautions/Precautions'
import axios from 'axios'

const App = () => {
    const [dailyData, setDailyData] = useState({Dates:null, confirmedCases:null, deathCases:null})
    const [CurrentData, setCurrentData] = useState({confirmed:null, recovered:null, deaths:null, lastUpdate:null})
    
    
    const initial = { country_confirmed: null, country_recovered: null, country_deaths: null }
    const [Value, setValue] = useState(initial)
    const [Error, setError] = useState(false)

    useEffect(() => {
        const url = 'https://covid19.mathdro.id/api'
        axios.get(`${url}/daily`)
        .then( ({data}) => {
            const Dates=data.map((dates)=>{
                return dates.reportDate
            })
            const confirmedCases=data.map((confirms)=>{
                return confirms.confirmed.total
            })
            const deathCases=data.map((confirms)=>{
                return confirms.deaths.total
            })
            setDailyData(
                {Dates:Dates, confirmedCases:confirmedCases, deathCases:deathCases}
            )
        })
        .catch( e => {
            console.log(e)
        })
        
        axios.get(url)
        .then( res => {
            const new_time = new Date(res.data.lastUpdate).toUTCString();
            
            setCurrentData({
                confirmed : res.data.confirmed.value,
                recovered : res.data.recovered.value,
                deaths : res.data.deaths.value,
                lastUpdate:  new_time
            })
        })
        .catch( e => {
            console.log(e)
        })
    }, [])

    const getCountry = (e) => {
        if (e.target.value === 'Globally') {
            setValue(initial)
        }
        else {
            axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`)
                .then((res) => {
                    console.log(res)
                    setError(false)
                    setValue({
                        country_confirmed: res.data.confirmed.value,
                        country_recovered: res.data.recovered.value,
                        country_deaths: res.data.deaths.value,
                        country_lastUpdate: res.data.lastUpdate
                    })
                })
                .catch((e) => {
                    setError(true)
                })
        }
    }
    return(
        <>
             <Logo />
             <Cards CurrentData={CurrentData}/>
             <Country getCountry={getCountry} Value={Value} Error={Error}/>
             <Charts dailyData={dailyData}/>
             <Precautions />
        </>
    )
}

export default App;