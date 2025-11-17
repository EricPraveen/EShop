exports.getProducts = (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'Get product working'
        }
    )
}

exports.getSingleProduct = (req, res, next) => {
    res.json(
        {
            success: true,
            message: 'Get single product working'
        }
    )
}