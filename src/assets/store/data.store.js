import { create } from 'zustand'

const useDataStore = create((set) => ({
  data: [],
  loading: false,
  fetchData: async() => {
    set(() => ({loading:true}))
    try{
      const result  = await fetch("/data.json");
      const {data} = await result.json();
      set(() => ({data, loading:false}))
    }catch{
      set(() => ({loading:false}))
    }
  }
}))

export default useDataStore