const Chip = ({ id, top, left }) => {
    return (
        <div>
            <img
                key={id}
                className="chip_img"
                style={{ position: 'absolute', top: top, left: left, maxWidth: '100px', maxHeight: '100px' }}
                src="https://assets.shop.loblaws.ca/products/21241032/b2/en/front/21241032_front_a06_@2.png" />
        </div>
    )
}

export default Chip;