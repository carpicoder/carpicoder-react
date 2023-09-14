import { useLayoutEffect, useRef } from "react";
import transition from "../../helpers/transition"
import InnerSectionTitle from "../InnerSectionTitle";
import gsap from "gsap";
import InnerSectionSubtitle from "../InnerSectionSubtitle";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Donations = () => {

  const donationRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    
    donationRef.current.forEach((donation) => {
      gsap.from(donation, {
        opacity: 0,
        scale: Math.random() * 2,
        x: Math.floor(Math.random() * 401) - 200,
        ease: "back.out(2)",
        delay: .75,
        scrollTrigger: {
          trigger: donation
        }
      })
    });

  }, [])

    return (
      <section className="donations inner-section">
        <div className="container">
          <InnerSectionTitle text="Donaciones"/>
          <InnerSectionSubtitle text="Podés apoyar mi contenido haciendo un pequeño aporte mensual o único, para poder hacer más y mejor contenido."/>
          <article id="argentina" className="donation" ref={element => {donationRef.current[0] = element;}}>
            <h2 className="donation-title">Si estás en Argentina 🇦🇷</h2>

            <h3 className="donation-subtitle">MercadoPago</h3>
            <p className="donation-text">Podés suscribirte mensualmente en pesos argentinos.</p>
            <div className="buttons">
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c2082018a7084f52f0231" className="button">$100 por mes</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c204d018a7086014b0299" className="button">$500 por mes</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c2082018a7086ceb00233" className="button">$1.000 por mes</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c204d018a70871b53029d" className="button">$2.500 por mes</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c207d018a708768bc0284" className="button">$5.000 por mes</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c2082018a7087b4a40235" className="button">$10.000 por mes</a>
            </div>
            <p className="donation-text mt-1">Si no querés comprometerte a una donación mensual, podés hacerlo una sola vez también, del monto que quieras.</p>
            <div className="buttons">
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c207d018a708b1e20028b" className="button">Donación única</a>
            </div>

            <h3 className="donation-subtitle">PayPal</h3>
            <p className="donation-text">Acá podés suscribirte mensualmente o también hacer una donación única del monto que quieras.</p>
            <p className="donation-text-small">Se pesifica al momento del cobro y se cobran los típicos impuestos.</p>
            <div className="buttons">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2" className="button">Ir a PayPal</a>
            </div>

            <h3 className="donation-subtitle">Patreon</h3>
            <p className="donation-text">Se hace con tarjeta, y es un pago mensual en US$ del monto que quieras.</p>
            <p className="donation-text-small">Se pesifica al momento del cobro y se cobran los típicos impuestos.</p>
            <div className="buttons">
              <a target="_blank" href="https://patreon.com/carpicoder" className="button">Ir a Patreon</a>
            </div>

            <h3 className="donation-subtitle">Stripe</h3>
            <p className="donation-text">Acá podés hacer una donación única en US$ del monto que quieras.</p>
            <p className="donation-text-small">Se pesifica al momento del cobro y se cobran los típicos impuestos.</p>
            <div className="buttons">
              <a target="_blank" href="https://donate.stripe.com/aEU5oifsc9oacRadQQ" className="button">Ir a Stripe</a>
            </div>

          </article>
          <article id="resto-del-mundo" className="donation" ref={element => {donationRef.current[1] = element;}}>
            <h2 className="donation-title">Desde el resto del mundo</h2>

            <h3 className="donation-subtitle">PayPal</h3>
            <p className="donation-text">Acá podés suscribirte mensualmente o también hacer una donación única del monto que quieras.</p>
            <div className="buttons">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2" className="button">Ir a PayPal</a>
            </div>

            <h3 className="donation-subtitle">Patreon</h3>
            <p className="donation-text">Se hace con tarjeta, y es un pago mensual en US$ del monto que quieras.</p>
            <div className="buttons">
              <a target="_blank" href="https://patreon.com/carpicoder" className="button">Ir a Patreon</a>
            </div>

            <h3 className="donation-subtitle">Stripe</h3>
            <p className="donation-text">Acá podés hacer una donación única en US$ del monto que quieras.</p>
            <div className="buttons">
              <a target="_blank" href="https://donate.stripe.com/aEU5oifsc9oacRadQQ" className="button">Ir a Stripe</a>
            </div>
          </article>
        </div>
      </section>
    )
  }
  
  export default transition(Donations);