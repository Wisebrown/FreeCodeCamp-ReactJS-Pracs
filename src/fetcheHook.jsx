import axios from "axios";
import useSWR from "swr";
const fetcheData = (url) => fetch(url).then((res) => res.json());

const useFetch = (url) => {
  const { data, isLoading, error } = useSWR(url, fetcheData);
  return {
    data,
    isLoading: !data && !error,
    // isLoading,
    error
}
  }
  export default useFetch;