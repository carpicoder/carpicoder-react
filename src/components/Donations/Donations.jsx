import { useEffect, useLayoutEffect, useRef } from "react";
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

  useEffect(() => {
    document.title = 'Carpi Coder | Donaciones';
  }, []);

    return (
      <section className="donations inner-section">
        <div className="container">
          <InnerSectionTitle text="Donaciones"/>
          <InnerSectionSubtitle text="Podés apoyar mi contenido haciendo un pequeño aporte mensual o único, para poder hacer más y mejor contenido."/>
          <div className="donations-grid">
          <article id="argentina" className="donation" ref={element => {donationRef.current[0] = element;}}>
            <h2 className="donation-title">Desde Argentina 🇦🇷</h2>

            <h3 className="donation-subtitle">MercadoPago <span>(ARS)</span></h3>
            <div className="buttons">
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a8a854e018a9546800b073f" className="button">Donación mensual</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c207d018a708b1e20028b" className="button">Donación única</a>
            </div>

            <h3 className="donation-subtitle">PayPal <span>(USD)</span></h3>
            <p className="donation-text-small">Se pesifica al momento del cobro y se cobran los típicos impuestos.</p>
            <div className="buttons">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2" className="button">Donación mensual o única</a>
            </div>

            <h3 className="donation-subtitle">Stripe <span>(USD)</span></h3>
            <p className="donation-text-small">Se pesifica al momento del cobro y se cobran los típicos impuestos.</p>
            <div className="buttons">
              <a target="_blank" href="https://donate.stripe.com/aEU5oifsc9oacRadQQ" className="button">Donación única</a>
            </div>

            <h3 className="donation-subtitle">Patreon <span>(USD)</span></h3>
            <p className="donation-text-small">Se pesifica al momento del cobro y se cobran los típicos impuestos.</p>
            <div className="buttons">
              <a target="_blank" href="https://patreon.com/carpicoder" className="button">Donación mensual</a>
            </div>

          </article>
          <article id="resto-del-mundo" className="donation" ref={element => {donationRef.current[1] = element;}}>
            <h2 className="donation-title">Desde el resto del mundo 🌎</h2>

            <h3 className="donation-subtitle">PayPal</h3>
            <div className="buttons">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2" className="button">Donación mensual o única (USD)</a>
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=88DZ3PQXDCG38" className="button">Donación mensual o única (EUR)</a>
            </div>

            <h3 className="donation-subtitle">Stripe</h3>
            <div className="buttons">
              <a target="_blank" href="https://donate.stripe.com/aEU5oifsc9oacRadQQ" className="button">Donación única (USD)</a>
              <a target="_blank" href="https://donate.stripe.com/5kA2c6cg0gQC9EY289" className="button">Donación única (EUR)</a>
            </div>

            <h3 className="donation-subtitle">Patreon</h3>
            <div className="buttons">
              <a target="_blank" href="https://patreon.com/carpicoder" className="button">Donación mensual (USD)</a>
            </div>
          </article>
          </div>
        </div>
      </section>
    )
  }
  
  export default transition(Donations);