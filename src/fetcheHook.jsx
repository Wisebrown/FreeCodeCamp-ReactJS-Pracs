import axios from "axios";
const fetcheData = (url) => {
  axios.get(url).then((response) => {
    response.data
  });
  const {data, loading, error} = useSWR(url,fetcheData)
  return{
    data,
    loading: !data && !error,
    error
  }
}
  export default fetcheData;