import React, { useState } from 'react'
import logoMercadopago from "../../assets/logo-mercadopago.png";
import logoStripe from "../../assets/logo-stripe.png";
import { Link } from 'react-router-dom';

const CourseItem = ({curso}) => {

  const [currency, setCurrency] = useState("ARS");

  return (
    <div className="course-item" style={{order: curso.order}}>
        <h2 className="course-item-title">{curso.name}</h2>
        {
          curso.soon ?
          <p>Próximamente</p> :
          <>
          <p className="course-item-desc">{curso.description}</p>
          <div className="course-item-features">
            {
              curso.features.map(feature => <span key={feature}>{feature}</span>)
            }
          </div>
          <div className="course-item-price">
              <p className="price">
                {
                  currency === "ARS" ?
                  <>
                    <span>ARS</span>
                    ${curso.price.ars}
                    <img src={logoMercadopago} className="gateway-logo" />
                  </>
                    : currency === "USD" ?
                  <>
                    <span>USD</span>
                    ${curso.price.usd}
                    <img src={logoStripe} class="gateway-logo" />
                  </> :
                  <>
                    <span>EUR</span>
                    {curso.price.eur}€
                    <img src={logoStripe} class="gateway-logo" />
                  </>
                }
              </p>
              <div className="course-item-currencies">
                <button className={currency === "ARS" ? "active" : ""} onClick={() => {setCurrency("ARS")}}>🇦🇷 ARS</button>
                <button className={currency === "USD" ? "active" : ""} onClick={() => {setCurrency("USD")}}>🇺🇸 USD</button>
                <button className={currency === "EUR" ? "active" : ""} onClick={() => {setCurrency("EUR")}}>🇪🇺 EUR</button>
              </div>
          </div>
          <div className="course-item-footer">
              <a href=
                {
                  currency === "ARS" ?
                  curso.payment_links.ars :
                  currency === "USD" ?
                  curso.payment_links.usd :
                  curso.payment_links.eur
                } target="_blank" className="button button-orange">Comprar curso</a>
              <Link to={"/" + curso.link} className="button">+ info</Link>
          </div>
          </>
        }
    </div>
  )
}

export default CourseItem