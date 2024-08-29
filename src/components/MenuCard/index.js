import "./index.css";

function MenuCard({ icon, title }) {
    return (
        <div className="menu-card-container">

            <div>
                <span class="material-symbols-outlined" style={{ fontSize: "2rem" }}>
                    {icon}
                </span>
            </div>

            <h3>{title}</h3>


        </div>
    );
}

export default MenuCard;