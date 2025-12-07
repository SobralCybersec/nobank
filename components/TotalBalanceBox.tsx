import Carrinho from './Carrinho'
import ContadorAnimado from './ContadorAnimado'

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <Carrinho accounts={accounts} />
      </div>
      
      <div className='flex flex-col gap-2'>
        <h2 className="header-2">
          Conta Bancária: {totalBanks}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Saldo Total Atual:
          </p>

          <div className="total-balance-amount flex-center gap-2">
            <ContadorAnimado amount = {totalCurrentBalance}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox