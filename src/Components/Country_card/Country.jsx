import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Country.css';
import { Bar } from 'react-chartjs-2';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Country = (props) => {
    const [allCountries, setallCountries] = useState([])
    useEffect(() => {
        const url = 'https://covid19.mathdro.id/api/countries'
        axios.get(url)
            .then(({ data }) => {
                const all_countries = data.countries.map((country) => {
                    return country.name
                })
                setallCountries(all_countries)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const [getCountry, Value, Error] = [props.getCountry, props.Value, props.Error]
    return (
        <>
            <div className="Country_container">
                <div className="selector_div">
                    <FormControl className='country_selector'>
                        <InputLabel htmlFor="uncontrolled-native">Country Name</InputLabel>
                        <NativeSelect
                            defaultValue='Globally'
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                            onChange={getCountry}
                        >
                            <option value='Globally'>Globally</option>
                            {[...allCountries].map((country_name, index) => {
                                return <option key={index + 1} value={country_name}>{country_name}</option>
                            })}

                        </NativeSelect>
                    </FormControl>
                </div>
                {
                    (Value.country_confirmed === null) ? null : (Error === false) ? <div className="Country_card">
                        <Bar className='Bar_graph'
                            data={{
                                labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],
                                datasets: [{
                                    label: 'People',
                                    backgroundColor: [
                                        'rgba(0,0,255,0.5)',
                                        'rgba(247, 145, 12, 0.6)',
                                        'rgba(0,255,0,0.4)',
                                        'rgba(255,0,0,0.4)'
                                    ],
                                    data: [Value.country_confirmed, Value.country_confirmed-Value.country_recovered, Value.country_recovered, Value.country_deaths,],
                                    borderColor: [
                                        'rgba(0,0,255,0.9)',
                                        'rgba(247, 145, 12, 0.9)',
                                        'rgba(0,255,0,0.9)',
                                        'rgba(255,0,0,0.9)'],
                                    fill: true,
                                    borderWidth: 2,
                                }]
                            }}
                            options={{
                                legend: {display:false},
                                title:{display:true, text:'Current situation'},
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                            width={150}
                            height={80}
                        />
                    </div> : <div className="Country_card">
                            <p>
                                Enter a valid country name!!!
                     </p>
                        </div>
                }
            </div>
        </>
    )
}

export default Country;


