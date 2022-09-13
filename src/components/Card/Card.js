import React from "react";
import "./Card.css";
import { BiPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { motion } from "framer-motion";

export default function Card({ item }) {
  return (
    <>
      {!item ? (
        <Spinner />
      ) : (
        <>
          {item?.map((i, index) => (
            <Link to={`/product/${i.id}`} key={index} className="card">
              <motion.img src={i.image} alt="product" />
              <motion.div className="card-details">
                <h5>{i.title}</h5>
                <h6>{i.paragraph}</h6>
                <h4>
                  <BiPurchaseTag /> {i.price}
                </h4>
              </motion.div>
            </Link>
          ))}
        </>
      )}
    </>
  );
}