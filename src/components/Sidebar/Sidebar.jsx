import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.scss'



function Sidebar({ onType, onSelect }) {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        async function getCategories() {
            const { data } = await api.get("/categories")
            const todos = {name: "Todos"}
            setCategories([todos, ...data])
        }
        getCategories()
    }, [])

    const [selectedItem, setSelectedItem] = useState("Todos");
    function filterProducts(e){
        onType(e.target.value)
    }
    function selectOption(e) {
        const category = e.target.innerText 
        onSelect(category)
        setSelectedItem(category)
    }
    return (
        <div className={styles.sidebar}>
            <input type="search" placeholder="Filtrar resultados..."
                onInput={filterProducts} />

            <ol>
                {
                    
                    categories.map((category, id) =>
                        <li style={{color: selectedItem === category.name ? "blue" : "rgb(0,0,0,.8)"}}
                            key={id}
                            onClick={selectOption}>
                            {category.name}
                        </li>)
                }
            </ol>
        </div>
    )
}

export default Sidebar
