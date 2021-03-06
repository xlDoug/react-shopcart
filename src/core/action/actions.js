export const getProductsByCategory = categoryId => {
    console.log('aqui', categoryId)
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: categoryId
    }
}

export const getCategoriesActives = () => {
    return {
        type: 'GET_CATEGORIES_ACTIVES'
    }
}

export const addProductToCart = productId => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: productId
    }
}
export const sumProductToCart = productId => {
    return {
        type: 'SUM_PRODUCT_IN_CART',
        payload: productId
    }
}
export const subProductToCart = productId => {
    return {
        type: 'SUB_PRODUCT_IN_CART',
        payload: productId
    }
}

export const getProductById = productId => {
    return {
        type: 'ASYNC_GET_PRODUCT_BY_ID',
        payload: productId
    }
}

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: '*'
    }
}