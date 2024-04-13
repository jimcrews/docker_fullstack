import React from "react";
import axios from "axios";
import moment from 'moment';
import './App.css'

const baseURL = "http://localhost:3000";

type apiResponse = {
  api: string,
  db_date: string
}

function App() {
  const [data, setData] = React.useState<apiResponse>();

  // call api on first load
  React.useEffect(() => {
    if (!data) {
      axios.get(baseURL).then((response: any) => {
        setData(response.data);
      });
    }
  }, []);

  if (!data) return null;

  console.log(data)

  return (

    <div className="main-container">
      <div className="api-result">
        <p><label>API: </label>{data.api}</p>
        <p><label>Time from DB: </label>{moment(data.db_date).format('dddd, MMMM Do, YYYY h:mm:ss A')}</p>
      </div>
    </div>
  )
}

export default App
