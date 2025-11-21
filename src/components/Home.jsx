import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Главная страница</h1>
      <p>Навигационный тест</p>

      <button onClick={() => navigate("/about")} style={{marginRight: 10}}>
        Перейти на About
      </button>

      <button onClick={() => navigate("/help")}>
        Перейти на Help
      </button>
    </div>
  );
}
