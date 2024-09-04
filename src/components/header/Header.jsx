import { BiMoon } from "react-icons/bi"; 
import { BsSunFill } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import Container from '../../utils'
import { useEffect, useState } from 'react'
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [searchValue, setSearchValue] = useState("");

  async function loadData() {
    try {
      const response = await axios(`forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchValue ? searchValue : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
      const data = response.data
      dispatch({type: "SEARCH_DATA", data});
    }
    catch(error){
      console.log(error);
    }
  }

  const handleSearchCity = async (e) => {
    e.preventDefault();

    loadData()
  }

  useEffect(() => {
    loadData()
  })

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-indigo-700 text-2xl font-bold">Weather App</h1>
          <form onSubmit={handleSearchCity} className="border max-w-[600px] flex-1 flex border-gray-300 p-4 rounded-[30px] bg-white">
            <input value={searchValue} placeholder="Search any city" onChange={(e) => setSearchValue(e.target.value)} className="flex-1 border-none outline-none text-lg" type="text" />
            <button><AiOutlineSearch className="text-[26px]" /></button>
          </form>
          <div className="border border-gray-300 rounded-[30px] flex relative items-center">
            <input defaultChecked={theme === "dark"} onChange={(e) => dispatch({type: "CHANGE_THEME", theme: e.target.checked ? "dark" : "light"})} id="theme-toggle" type="checkbox" className="appearance-none w-[70px] h-[30px]" />
            <label htmlFor="theme-toggle" className="w-[35px] h-[35px] bg-indigo-700 text-white rounded-full flex items-center justify-center cursor-pointer absolute left-0 transition-all">
              {
                theme ==="light" ? <BsSunFill /> :
                <BiMoon />
              }
            </label>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header