import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './styles.module.scss'

import { useNavigate, useParams } from 'react-router-dom'

import {FaPlusCircle} from 'react-icons/fa'

import { api } from '../../services/api'


function LandingPage() {
    const [text, setText] = useState("")
    const [category, setCategory] = useState("Todos")
    const navigate = useNavigate();

    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        async function getAllProducts() {
            let { data } = await api.get("/products")
            // converter obj em formato do back para front
            data = data.map(obj => {
                return {
                    ...obj,
                    title: obj.name,
                    price: obj.sales_avg,
                    rating: {
                        rate: 0,
                        count: obj.amount
                    },
                    category: "",
                    image: ""

                }
            })

            setAllProducts(data)
        }
        getAllProducts()
    }, [])

    const lower = text => text !== null ? text.toLocaleLowerCase() : '';

    return (
        <>
            <Header />
            <FaPlusCircle size={30} color="green" onClick={e => navigate(`/new`)}/> Novo Produto
            <aside className={styles.aside}>
                <Sidebar
                    onType={x => setText(x)}
                    onSelect={x => setCategory(x)}
                />
                <section className={styles.products}>
                    <>
                        {
                            allProducts.map((product, i) =>
                                
                             ( lower(product.title).includes(text) &&
                                    (category === "Todos" || lower(category).includes(lower(product.category))))
                                    ?
                                    <ProductCard key={i}
                                        {...product} isProduct={true}
                                    />
                                    : null
                            )
                        }
                    </>
                </section>

            </aside>
            <Footer />
        </>
    )
}

export default LandingPage
