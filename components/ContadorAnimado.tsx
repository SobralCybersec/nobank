"use client";

import CountUp from 'react-countup'

const ContadorAnimado = ({amount} : {amount: number}) => {
  return (
    <div>
        <CountUp
            duration={2.75}
            decimals={2} 
            decimal=","
            prefix="R$"
            end={amount}
        />
    </div>
  )
}

export default ContadorAnimado