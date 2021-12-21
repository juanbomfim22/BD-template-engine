import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import { api } from '../../services/api'

function CategoryInfo() {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        async function getCategories() {
            const { data } = await api.get("/categories")
            setCategories(data)
        }
        getCategories()
    }, [])
    return (
        <>
            <Header />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                {categories.map((category, i) => {
                    const obj = {
                        ...category,
                        category: category.name
                    }
                    return <ProductCard key={i} {...obj} isProduct={false} />
                })}
            </div>
        </>
    )
}

export default CategoryInfo
