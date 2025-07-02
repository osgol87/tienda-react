const Copyright = ({company = "Speed Sneakers", year = new Date().getFullYear() }) => 
    <p>&copy; {year} {company}. Todos los derechos reservados.</p>;

export default Copyright;