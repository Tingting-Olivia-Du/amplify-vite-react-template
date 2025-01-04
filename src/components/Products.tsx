

// 产品数据
const products = [
  {
    img: '/images/20_standard.png',
    title: "20' Standard",
    details: [
      { label: 'Inner Length', value: '5.89m' },
      { label: 'Inner Width', value: '2.35m' },
      { label: 'Inner Height', value: '2.39m' },
      { label: 'Volume', value: '33m³' },
    ],
  },
  {
    img: '/images/20_open_side.png',
    title: "20' Open Side",
    details: [
      { label: 'Inner Length', value: '5.89m' },
      { label: 'Inner Width', value: '2.35m' },
      { label: 'Inner Height', value: '2.28m' },
      { label: 'Volume', value: '28m³' },
    ],
  },
  {
    img: '/images/40_high_cube.png',
    title: "40' High Cube",
    details: [
      { label: 'Inner Length', value: '12.03m' },
      { label: 'Inner Width', value: '2.35m' },
      { label: 'Inner Height', value: '2.69m' },
      { label: 'Volume', value: '76m³' },
    ],
  },
  {
    img: '/images/40_high_cube_double_door.png',
    title: "40' High Cube Double Door",
    details: [
      { label: 'Inner Length', value: '11.97m' },
      { label: 'Inner Width', value: '2.35m' },
      { label: 'Inner Height', value: '2.69m' },
      { label: 'Volume', value: '76m³' },
    ],
  },
  {
    img: '/images/40_high_cube_open_side_4_doors.png',
    title: "40' High Cube Open Side 4 Doors",
    details: [
      { label: 'Inner Length', value: '12.03m' },
      { label: 'Inner Width', value: '2.28m' },
      { label: 'Inner Height', value: '2.65m' },
      { label: 'Volume', value: '73m³' },
    ],
  },
  {
    img: '/images/40_high_cube_full_open_side.png',
    title: "40' High Cube Full Open Side",
    details: [
      { label: 'Inner Length', value: '12.03m' },
      { label: 'Inner Width', value: '2.28m' },
      { label: 'Inner Height', value: '2.46m' },
      { label: 'Volume', value: '67m³' },
    ],
  },
];

const Products = () => {
  return (
    <div id="products" className="products-section">
      <h2>Our Products</h2>
      {products.map((product, index) => (
        <div key={index} className="product">
          <img src={product.img} alt={product.title} />
          <div className="product-details">
            <h3>{product.title}</h3>
            {product.details.map((detail, i) => (
              <p key={i}>
                <strong>{detail.label}:</strong> {detail.value}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
