import styles from "./index.module.css"

const paymentTypes = [
  {
    text: "Cash"
  },
  {
    text: "Checks"
  },
  {
    text: "Credit Card (Visa, American Express, Mastercard, etc.)"
  },
]

export const BillingSection = () => {
  return (
  <section
    className={styles['billing']}
  >
    <div
      className={styles['billing__content']}   
    >
      <h3
        className={styles['billing__title']}   
      >Billing</h3>
      <p>At Marroquin Truck & Trailer Repair, we want to make it as easy as possible for you to pay for our diesel mechanic services. Here are some of the payment options we accept:</p>
    </div>

    <ul
      className={styles['billing__list']}   
    >
      {paymentTypes.map((type, i) => (
        <li
          key={i}
          className={styles['billing__item']}   
        >
          {type.text}
        </li>
      ))}
    </ul>

    <p>{"Don't hesitate to contact us if you have any questions about our payment options or need help choosing the one that works best for you. We're here to help."}</p>
  </section>
  )
}