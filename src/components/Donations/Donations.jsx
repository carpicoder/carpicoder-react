import { useEffect, useLayoutEffect, useRef } from "react";
import transition from "../../helpers/transition"
import InnerSectionTitle from "../InnerSectionTitle";
import gsap from "gsap";
import InnerSectionSubtitle from "../InnerSectionSubtitle";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import logoStripe from "../../assets/logo-stripe.png";
import logoPaypal from "../../assets/logo-paypal.png";
import logoCafecito from "../../assets/logo-cafecito.jpg";
import logoMercadopago from "../../assets/logo-mercadopago.png";
import logoPatreon from "../../assets/logo-patreon.png";


const Donations = () => {

  const [tt, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = 'Carpi Coder | ' + tt("pages.donations");
  }, [i18n.language]);

  const donationRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    
    donationRef.current.forEach((donation) => {
      gsap.from(donation, {
        opacity: 0,
        scale: 0,
        translateY: Math.floor(Math.random() * 401) - 200,
        ease: "back.out(2)",
        delay: .75
      })
    });

  }, [i18n.language])

    return (
      <section className="donations inner-section">
        <div className="container">
          <InnerSectionTitle text={tt("donations.title")} key={i18n.language}/>
          <InnerSectionSubtitle text={tt("donations.subtitle")}/>
          <div className="donations-grid">
          <article id="argentina" className="donation" ref={element => {donationRef.current[0] = element;}}>
            <h2 className="donation-title">{tt("donations.fromArgentina")}</h2>

            <h3 className="donation-subtitle">
            <img src={logoCafecito} alt="Cafecito logo" />
              Cafecito <span>(ARS)</span>
              </h3>
            <div className="buttons">
              <a target="_blank" href="https://cafecito.app/carpicoder" className="button">{tt("donations.oneTime")}</a>
            </div>

            <h3 className="donation-subtitle">
              <img src={logoMercadopago} alt="MercadoPago logo" />
              MercadoPago <span>(ARS)</span>
              </h3>
            <div className="buttons">
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a8a854e018a9546800b073f" className="button">{tt("donations.monthly")}</a>
              <a target="_blank" href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848a6c207d018a708b1e20028b" className="button">{tt("donations.oneTime")}</a>
            </div>

            <h3 className="donation-subtitle">
              <img src={logoPaypal} alt="PayPal logo" />
              PayPal <span>(USD)</span>
              </h3>
            <p className="donation-text-small">{tt("donations.pesifies")}</p>
            <div className="buttons">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2" className="button">{tt("donations.monthlyOrOneTime")}</a>
            </div>

            <h3 className="donation-subtitle">
              <img src={logoStripe} alt="Stripe logo" />
              Stripe <span>(USD)</span>
              </h3>
            <p className="donation-text-small">{tt("donations.pesifies")}</p>
            <div className="buttons">
              <a target="_blank" href="https://donate.stripe.com/aEU5oifsc9oacRadQQ" className="button">{tt("donations.oneTime")}</a>
            </div>

            <h3 className="donation-subtitle">
              <img src={logoPatreon} alt="Patreon logo" />
              Patreon <span>(USD)</span>
              </h3>
            <p className="donation-text-small">{tt("donations.pesifies")}</p>
            <div className="buttons">
              <a target="_blank" href="https://patreon.com/carpicoder" className="button">{tt("donations.monthly")}</a>
            </div>

          </article>
          <article id="resto-del-mundo" className="donation" ref={element => {donationRef.current[1] = element;}}>
            <h2 className="donation-title">{tt("donations.fromTheRest")}</h2>

            <h3 className="donation-subtitle">
            <img src={logoPaypal} alt="PayPal logo" />
              PayPal
              </h3>
            <div className="buttons">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=BVJ6LD7YYYFY2" className="button">{tt("donations.monthlyOrOneTime")} (USD)</a>
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=88DZ3PQXDCG38" className="button">{tt("donations.monthlyOrOneTime")} (EUR)</a>
            </div>

            <h3 className="donation-subtitle">
              <img src={logoStripe} alt="Stripe logo" />
              Stripe
              </h3>
            <div className="buttons">
              <a target="_blank" href="https://donate.stripe.com/aEU5oifsc9oacRadQQ" className="button">{tt("donations.oneTime")} (USD)</a>
              <a target="_blank" href="https://donate.stripe.com/5kA2c6cg0gQC9EY289" className="button">{tt("donations.oneTime")} (EUR)</a>
            </div>

            <h3 className="donation-subtitle">
              <img src={logoPatreon} alt="Patreon logo" />
              Patreon
              </h3>
            <div className="buttons">
              <a target="_blank" href="https://patreon.com/carpicoder" className="button">{tt("donations.monthly")} (USD)</a>
            </div>
          </article>
          </div>
        </div>
      </section>
    )
  }
  
  export default transition(Donations);