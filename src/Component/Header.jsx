import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.h1
          className="logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="logo-link">
            Roadmap in Programming
          </Link>
        </motion.h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-link">
              Направления
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recommendations" className="nav-link">
              Рекомендации
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
              Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
