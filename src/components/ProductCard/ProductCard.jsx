import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'

function ProductCard(props) {
    let { title, id, category, image, isProduct } = props
    title = title || ''
    id = id || ''
    category = category || ''
    image = image || ''
    const navigate = useNavigate();
    const format = text => text.length > 50 ? text.slice(0, 50).concat("...") : text

    const remove = null
    const update = e => navigate(`/update/${id}`)

    function handleClick(e) {
        if(isProduct) return navigate(`/products/${id}`)
        return navigate(`/products`)
    }

    return (

        <div className={styles.product_card}>

            {isProduct ? <div className={styles.remove}>
                <ImCross size={15}
                    color="red"
                    style={{ padding: "5px" }}
                    onClick={remove} /> </div> : null}
            <div className={styles.details} onClick={handleClick}>
                <div className={styles.pseudo_image}>
                    <img src={image} />
                </div>
                <div className={styles.card_info}>
                    <div className={styles.title}>
                        <p>
                            {format(title)}
                        </p>
                    </div>
                    <div className={styles.additionalInfo}>
                        <span>
                            <strong>Id</strong>: {id}
                        </span>
                        <span>
                            <strong>Categoria</strong>: {category}
                        </span>
                    </div>
                </div>
            </div>
            {isProduct ? <div className={styles.crud}>
                <span onClick={e => navigate(`/update/${id}`, { state: props })}>Atualizar</span>
            </div> : null }
        </div>
    )
}

export default ProductCard
