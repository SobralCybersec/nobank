
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    
    const logIn = { PrimeiroNome: 'Matheus'};

    return (
        <section className="home">
           <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="Bem Vindo" 
                        title="Bem Vindo"
                        user={logIn?.PrimeiroNome || 'Aleatório'}
                        subtext="Gerencie sua conta e informações de maneira fácil"
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={10921}
                    />
                </header>
            </div> 
        </section>
    )
}

export default Home